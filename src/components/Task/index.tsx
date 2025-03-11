import { FC, useRef, useState } from 'react';
import {
  TaskTitle,
  TaskDescription,
  TaskPriority,
  TaskItemStyled,
  MoreButtonStyled,
} from './styled';
import { MoreIcon } from '@components/UI/MoreIcon';
import { EditMenu } from '@components/UI/EditMenu/index';
import { TaskEditForm } from '@components/Forms/TaskEditForm';

interface ITaskProps {
  id: string;
  title: string;
  description?: string;
  priority: string;
  column?: string;
  onTaskDragStart?: (id: string) => void;
  onTaskDelete?: (id: string) => void;
  onTaskUpdate?: (
    id: string,
    updatedTask: { title: string; description?: string; priority: string }
  ) => void;
}

export const Task: FC<ITaskProps> = ({
  id,
  title,
  description,
  priority,
  onTaskDragStart,
  onTaskDelete,
  onTaskUpdate,
}) => {
  const taskRef = useRef<HTMLDivElement>(null);
  const [isEditMenuOpen, setIsEditMenuOpen] = useState<boolean>(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);
  const [isMoreHidden, setIsMoreHidden] = useState(true);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', id);
    if (onTaskDragStart) onTaskDragStart(id);
    taskRef.current?.classList.add('dragging');
  };

  const handleDragEnd = () => {
    taskRef.current?.classList.remove('dragging');
  };

  const handleMoreButtonClick = () => {
    setIsEditMenuOpen((prevState) => !prevState);
  };

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

  const handleEditFormSave = (updatedTask: ITaskProps) => {
    if (onTaskUpdate) {
      onTaskUpdate(id, updatedTask);
    }
    setIsEditFormOpen(false);
  };

  const handleMouseEnter = () => {
    setIsMoreHidden(false);
  };

  const handleMouseLeave = () => {
    setIsMoreHidden(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      {!isEditFormOpen ? (
        <TaskItemStyled
          id={id}
          className="task"
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={taskRef}
        >
          <TaskPriority className={priority}>{priority}</TaskPriority>
          <TaskTitle>{title}</TaskTitle>
          {description && <TaskDescription>{description}</TaskDescription>}
          {!isMoreHidden && (
            <MoreButtonStyled>
              <MoreIcon onMoreClick={handleMoreButtonClick} />
            </MoreButtonStyled>
          )}
          {isEditMenuOpen && (
            <EditMenu
              onDelete={handleDeleteTask}
              onClose={handleEditMenuClose}
              onEdit={handleEditTask}
            />
          )}
        </TaskItemStyled>
      ) : (
        <TaskEditForm
          task={{ id, title, description, priority }}
          onSave={handleEditFormSave}
          setIsEditing={setIsEditFormOpen}
        />
      )}
    </div>
  );
};
