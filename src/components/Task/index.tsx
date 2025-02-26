import React, { FC, useRef } from "react";
import {
  TaskTitle,
  TaskDescription,
  TaskPriority,
  TaskItemStyled,
} from "./styled";

export interface ITaskProps {
  id: string;
  title: string;
  description?: string;
  priority: string;
  onTaskDragStart?: (id: string) => void;
}

export const Task: FC<ITaskProps> = ({
  id,
  title,
  description,
  priority,
  onTaskDragStart,

}) => {
  const taskRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", id);
    if (onTaskDragStart) onTaskDragStart(id);
    taskRef.current?.classList.add("is-dragging");
  };

  const handleDragEnd = () => {
    taskRef.current?.classList.remove("is-dragging");
  };

  return (
    <TaskItemStyled
      id={id}
      className="task"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      ref={taskRef}
    >
      <TaskPriority className={priority}>{priority}</TaskPriority>
      <TaskTitle>{title}</TaskTitle>
      {description && <TaskDescription>{description}</TaskDescription>}
    </TaskItemStyled>
  );
};
