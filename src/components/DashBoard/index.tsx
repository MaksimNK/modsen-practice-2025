import { FC, useState } from "react";
import { ITaskProps } from "../Task/index";
import { Column } from "../Column/index";
import { BoardContainer, PageContainer } from "./styled";

interface TaskData extends ITaskProps {
    column: string;
}
const initialTasks: TaskData[] = [
    { id: '1', title: 'Task 1', description: 'Description for task 1', column: 'To Do', priority: 'medium' },
    { id: '2', title: 'Task 2', description: 'Description for task 2', column: 'In Progress', priority: 'high' },
    { id: '3', title: 'Task 3', description: 'Description for task 3', column: 'Done', priority: 'low' },
];

interface ColumnData {
    title: string;
    color: string;
}

const initialColumns: ColumnData[] = [
    { title: 'To Do', color: '#4F46E5' },
    { title: 'In Progress', color: '#F59E0B' },
    { title: 'Done', color: '#22C55E' },
];


export const DashBoard: FC = () => {
    const [tasks, setTasks] = useState<TaskData[]>(initialTasks);
    const [draggingTaskId, setDraggingTaskId] = useState<string | null>(null);


    const handleDropTask = (taskId: string, targetColumn: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, column: targetColumn } : task
            )
        );
    };

    const handleCreateTask = (newTask: ITaskProps, targetColumn: string) => {
        setTasks([...tasks, { ...newTask, column: targetColumn }]);
    };

    return (
        <PageContainer>
            <h1>Kanban Dashboard</h1>
            <BoardContainer>
                {initialColumns.map((column) => (
                    <Column
                        key={column.title}
                        title={column.title}
                        titleBarColor={column.color}
                        tasks={tasks.filter((task) => task.column === column.title)}
                        onDropTask={handleDropTask}
                        onCreateTask={handleCreateTask}
                        onTaskDragStart={setDraggingTaskId}
                        draggingTaskId={draggingTaskId}
                    />
                ))}
            </BoardContainer>
        </PageContainer>
    );
};