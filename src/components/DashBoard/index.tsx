import React, { FC, useState } from "react";
import { ITaskProps } from "../Task/index";
import { Column } from "../Column/index";
import { BoardContainer, PageContainer } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { ITaskPayload } from "../../store/actions/taskActions";

interface ColumnData {
    id: string;
    title: string;
    color: string;
}

export const DashBoard: FC = () => {
    const [draggingTaskId, setDraggingTaskId] = useState<string | null>(null);
    const dispatch = useDispatch<any>();
    const tasks = useSelector((state: RootState) => state.task);
    const columns = useSelector((state: RootState) => state.column);

    const handleDropTask = (taskId: string, targetColumn: string) => {
        dispatch({
            type: "MOVE_TASK",
            payload: { id: taskId, column: targetColumn },
        });
    };

    const transformedTasks: ITaskProps[] = tasks.map((task) => ({
        id: task.id,
        title: task.title || "Untitled",
        description: task.description,
        priority: task.priority || "medium",
        column: task.column,
    }));

    const handleTaskDelete = (id: string) => {
        dispatch({
            type: "DELETE_TASK",
            payload: { id },
        });
    };

    const handleUpdateTask = (
        id: string,
        updatedTask: { title: string; description?: string; priority: string }
    ) => {
        const taskPayload: ITaskPayload = {
            id,
            title: updatedTask.title,
            description: updatedTask.description,
            priority: updatedTask.priority,
        };
        dispatch({
            type: "UPDATE_TASK",
            payload: taskPayload,
        });
    };

    const handleCreateTask = (newTask: ITaskProps, targetColumn: string) => {
        const taskPayload: ITaskPayload = {
            id: newTask.id,
            title: newTask.title,
            description: newTask.description,
            priority: newTask.priority,
            column: targetColumn,
        };

        dispatch({
            type: "CREATE_TASK",
            payload: taskPayload,
        });
    };

    const handleColumnDrop = (draggedColumnId: string, targetColumnId: string) => {
        dispatch({
            type: "MOVE_COLUMN",
            payload: { draggedColumnId, targetColumnId },
        });
    };

    const [newCoumnTitle, setNewCoumnTitle] = useState<string>("");
    const [newColumnColor, setNewColumnColor] = useState<string>("");

    const handleAddColumn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const uuid = self.crypto.randomUUID();
        const newColumn: ColumnData = {
            id: uuid,
            title: newCoumnTitle,
            color: newColumnColor,
        };
        dispatch({ type: "CREATE_COLUMN", payload: newColumn });
        setNewCoumnTitle("");
        setNewColumnColor("");
    };

    return (
        <PageContainer>
            <h1>Kanban Dashboard</h1>
            <BoardContainer>
                {columns.map((column: ColumnData) => (
                    <Column
                        key={column.id}
                        id={column.id}
                        title={column.title}
                        titleBarColor={column.color}
                        tasks={transformedTasks.filter((task) => task.column === column.title)}
                        onDropTask={handleDropTask}
                        onCreateTask={handleCreateTask}
                        onTaskDragStart={setDraggingTaskId}
                        draggingTaskId={draggingTaskId}
                        onTaskDelete={handleTaskDelete}
                        onTaskUpdate={handleUpdateTask}
                        onColumnDrop={handleColumnDrop}
                    />
                ))}
                <form onSubmit={handleAddColumn}>
                    <input
                        type="text"
                        placeholder="New Column Title"
                        value={newCoumnTitle}
                        onChange={(e) => setNewCoumnTitle(e.target.value)}
                    />
                    <input
                        type="color"
                        placeholder="New Column Color"
                        value={newColumnColor}
                        onChange={(e) => setNewColumnColor(e.target.value)}
                    />
                    <button type="submit">+</button>
                </form>
            </BoardContainer>
        </PageContainer>
    );
};