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
    title: string;
    tasks: ITaskProps[];
    titleBarColor: string;
    onDropTask: (taskId: string, targetColumn: string, insertIndex: number) => void;
    onCreateTask: (newTask: ITaskProps, targetColumn: string) => void;
    onTaskDragStart: (taskId: string | null) => void;
    draggingTaskId: string | null;
}

export const Column: FC<ColumnProps> = ({
    title,
    tasks,
    titleBarColor,
    onDropTask,
    onCreateTask,
    onTaskDragStart,
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

    return (
        <ColumnContainer
            className="column-container"
            data-column={title}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            ref={columnRef}
        >
            <ColumnTitleBar titleColor={titleBarColor}>
                <ColumnTitle >{title}</ColumnTitle>
                <AddButton onClick={handleCreateEmptyTask}>+</AddButton>
            </ColumnTitleBar>
            <TaskContainer>
                {tasks.map((task) => (
                    <Task key={task.id} {...task} onTaskDragStart={onTaskDragStart} />
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


