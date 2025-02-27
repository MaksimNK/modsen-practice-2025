import React, { FC, useRef, useState } from "react";
import {
  TaskTitle,
  TaskDescription,
  TaskPriority,
  TaskItemStyled,
  MoreButtonStyled
} from "./styled";
import { MoreIcon } from "../UI/MoreIcon";
import { TaskEditMenu } from "../TaskEditMenu/TaskEditMenu";
import { TaskEditForm } from "../TaskEditForm";

export interface ITaskProps {
  id: string;
  title: string;
  description?: string;
  priority: string;
  column?: string;
  onTaskDragStart?: (id: string) => void;
  onTaskDelete?: (id: string) => void;
  onTaskUpdate?: (id: string, updatedTask: { title: string; description?: string; priority: string }) => void;
}

export const Task: FC<ITaskProps> = ({
  id,
  title,
  description,
  priority,
  onTaskDragStart,
  onTaskDelete,
  onTaskUpdate

}) => {
  const taskRef = useRef<HTMLDivElement>(null);
  const [isEditMenuOpen, setIsEditMenuOpen] = useState<boolean>(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", id);
    if (onTaskDragStart) onTaskDragStart(id);
    taskRef.current?.classList.add("is-dragging");
  };

  const handleDragEnd = () => {
    taskRef.current?.classList.remove("is-dragging");
  };
  const handleMoreButtonClick = () => {
    setIsEditMenuOpen((prevState) => {
      return !prevState;
    });
  }
  const handleEditMenuClose = () => {
    setIsEditMenuOpen(false);
  };

  const handleDeleteTask = () => {
    if (onTaskDelete) {
      onTaskDelete(id);
    }
  };

  const handleEditTask = () => {
    setIsEditMenuOpen(false);
    setIsEditFormOpen(true);
  };

  const handleEditFormCancel = () => {
    setIsEditFormOpen(false);
  };

  const handleEditFormSave = (updatedTask: { title: string; description?: string; priority: string }) => {
    if (onTaskUpdate) {
      onTaskUpdate(id, updatedTask);
    }
    setIsEditFormOpen(false);
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
      <MoreButtonStyled onClick={handleMoreButtonClick}>
        <MoreIcon />
      </MoreButtonStyled>

      {isEditMenuOpen && (
        <TaskEditMenu
          onDelete={handleDeleteTask}
          onClose={handleEditMenuClose}
          onEdit={handleEditTask}
        />
      )}

      {isEditFormOpen && (
        <TaskEditForm
          title={title}
          description={description}
          priority={priority}
          onSave={handleEditFormSave}
          onCancel={handleEditFormCancel}
        />
      )}

    </TaskItemStyled>
  );
};
