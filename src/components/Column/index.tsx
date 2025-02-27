import React, { FC, useRef, useState } from "react";
import { ITaskProps, Task } from "../Task/index";
import {
    TaskContainer,
    AddTask,
    ColumnTitle,
    ColumnTitleBar,
    AddButton,
    ColumnContainer,
} from "./styled";

export interface ColumnProps {
    id: string;
    title: string;
    tasks: ITaskProps[];
    titleBarColor: string;
    onDropTask: (taskId: string, targetColumn: string, insertIndex: number) => void;
    onCreateTask: (newTask: ITaskProps, targetColumn: string) => void;
    onTaskDragStart: (taskId: string | null) => void;
    draggingTaskId: string | null;
    onTaskDelete?: (id: string) => void;
    onTaskUpdate?: (id: string, updatedTask: { title: string; description?: string; priority: string }) => void;
    onColumnDrop?: (draggedColumn: string, targetColumn: string) => void;
}

export const Column: FC<ColumnProps> = ({
    id,
    title,
    tasks,
    titleBarColor,
    onDropTask,
    onCreateTask,
    onTaskDragStart,
    onTaskDelete,
    onTaskUpdate,
    onColumnDrop
}) => {
    const [isCreating, setIsCreating] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newPriority, setNewPriority] = useState("medium");

    const columnRef = useRef<HTMLDivElement>(null);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData("text/plain");
        let insertIndex = tasks.length;
        onDropTask(taskId, title, insertIndex);
    };

    const handleCreateTaskClick = () => {
        setIsCreating(true);
    };

    const handleCreateEmptyTask = () => {
        const uuid = self.crypto.randomUUID();

        const newTask = {
            id: uuid,
            title: "New Task",
            description: "Description",
            priority: "medium",
        };
        onCreateTask(newTask, title);
        setNewTitle("");
        setNewDescription("");
        setNewPriority("medium");
    }

    const handleCreateTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const uuid = self.crypto.randomUUID();
        const newTask = {
            id: uuid,
            title: newTitle,
            description: newDescription,
            priority: newPriority,
        };
        onCreateTask(newTask, title);
        setNewTitle("");
        setNewDescription("");
        setNewPriority("medium");
        setIsCreating(false);
    };

    const handleCancelTask = () => {
        setIsCreating(false);
        setNewTitle("");
        setNewDescription("");
        setNewPriority("medium");
    };

    const handleColumnDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("text/column", id);
    };

    const handleColumnDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const draggedColumnId = e.dataTransfer.getData("text/column");
        if (draggedColumnId && onColumnDrop) {
            onColumnDrop(draggedColumnId, id);
        }
    };




    return (
        <ColumnContainer
            className="column-container"
            data-column={title}
            ref={columnRef}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <ColumnTitleBar titleColor={titleBarColor}
                draggable
                onDragStart={handleColumnDragStart}
                onDragOver={handleDragOver}
                onDrop={(e) => {
                    if (e.dataTransfer.types.includes("text/column")) {
                        handleColumnDrop(e);
                    } else {
                        const taskId = e.dataTransfer.getData("text/plain");
                        let insertIndex = tasks.length;
                        onDropTask(taskId, title, insertIndex);
                    }
                }}

            >
                <ColumnTitle >{title}</ColumnTitle>
                <AddButton onClick={handleCreateEmptyTask}>+</AddButton>
            </ColumnTitleBar>
            <TaskContainer>
                {tasks.map((task) => (
                    <Task key={task.id} {...task} onTaskDragStart={onTaskDragStart} onTaskDelete={onTaskDelete} onTaskUpdate={onTaskUpdate} />
                ))}
                {isCreating ? (
                    <form onSubmit={handleCreateTaskSubmit}>
                        <input
                            type="text"
                            placeholder="Task title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Task description"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                        <select
                            value={newPriority}
                            onChange={(e) => setNewPriority(e.target.value)}
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        <button type="submit">Add Task</button>
                        <button type="button" onClick={handleCancelTask}>
                            Cancel
                        </button>
                    </form>
                ) : (
                    <AddTask onClick={handleCreateTaskClick}>Add task...</AddTask>
                )}
            </TaskContainer>
        </ColumnContainer>
    );
};


