import { FC, useRef, useState } from 'react';
import { Task } from '../Task/index';
import { TaskType } from '../../constants/constant';

import {
  TaskContainer,
  AddTask,
  ColumnTitle,
  ColumnTitleBar,
  AddButton,
  ColumnContainer,
  AddTaskWrapper,
  MoreIconWrapper,
  ActionButtonsContainer,
  CountCircle,
  HeaderContainer,
} from './styled';
import { MoreIcon } from '../UI/MoreIcon';
import { CreateTaskForm } from '../CreateTaskForm';
import { EditMenu } from '../EditMenu';
import { ColumnEditForm } from '../ColumnEditForm';

export interface ColumnProps {
  id: string;
  title: string;
  tasks: TaskType[];
  titleBarColor: string;
  onDropTask: (
    taskId: string,
    targetColumn: string,
    insertIndex: number
  ) => void;
  onCreateTask: (newTask: TaskType, targetColumn: string) => void;
  onTaskDragStart: (taskId: string | null) => void;
  draggingTaskId: string | null;
  onTaskDelete?: (id: string) => void;
  onTaskUpdate?: (
    id: string,
    updatedTask: { title: string; description?: string; priority: string }
  ) => void;
  onColumnDrop?: (draggedColumn: string, targetColumn: string) => void;
  onColumnUpdate?: (
    columnId: string,
    column: { title: string; color: string }
  ) => void;
  onColumnDelete?: (columnId: string) => void;
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
  onColumnDrop,
  onColumnUpdate,
  onColumnDelete,
}) => {
  const taskCount = tasks.length;
  const [isCreating, setIsCreating] = useState(false);

  const [isMoreHidden, setIsMoreHidden] = useState(true);

  const columnRef = useRef<HTMLDivElement>(null);

  const [isEditMenuOpen, setIsEditMenuOpen] = useState<boolean>(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    const insertIndex = tasks.length;
    onDropTask(taskId, title, insertIndex);
  };

  const handleCreateTaskClick = () => {
    setIsCreating(true);
  };

  const handleCreateEmptyTask = () => {
    const uuid = self.crypto.randomUUID();

    const newTask = {
      id: uuid,
      title: 'New Task',
      description: 'Description',
      priority: 'medium',
    };
    onCreateTask(newTask, title);
  };

  const handleColumnDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/column', id);
  };

  const handleColumnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const draggedColumnId = e.dataTransfer.getData('text/column');
    if (draggedColumnId && onColumnDrop) {
      onColumnDrop(draggedColumnId, id);
    }
  };

  const handleMouseEnter = () => {
    setIsMoreHidden(false);
  };
  const handleMouseLeave = () => {
    setIsMoreHidden(true);
  };
  const handleMoreButtonClick = () => {
    setIsEditMenuOpen((prevState) => {
      return !prevState;
    });
  };

  const handleEditMenuClose = () => {
    setIsEditMenuOpen(false);
  };

  const handleEditColumn = () => {
    setIsEditMenuOpen(false);
    setIsEditFormOpen(true);
  };

  const handleEditFormSave = (updateColumn: {
    title: string;
    color: string;
  }) => {
    if (onColumnUpdate) {
      onColumnUpdate(id, updateColumn);
    }
    setIsEditFormOpen(false);
  };

  const handleDeleteColumn = () => {
    if (onColumnDelete) {
      onColumnDelete(id);
    }
  };
  return (
    <ColumnContainer
      draggable
      className="column-container"
      data-column={title}
      ref={columnRef}
      onDragStart={handleColumnDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <ColumnTitleBar
        titleColor={titleBarColor}
        onDrop={(e) => {
          if (e.dataTransfer.types.includes('text/column')) {
            handleColumnDrop(e);
          } else {
            const taskId = e.dataTransfer.getData('text/plain');
            const insertIndex = tasks.length;
            onDropTask(taskId, title, insertIndex);
          }
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <HeaderContainer>
          <CountCircle titleColor={titleBarColor}>{taskCount}</CountCircle>
          <ColumnTitle>{title}</ColumnTitle>
        </HeaderContainer>

        <ActionButtonsContainer>
          {!isMoreHidden && (
            <MoreIconWrapper>
              <MoreIcon onMoreClick={handleMoreButtonClick} />
            </MoreIconWrapper>
          )}

          {isEditMenuOpen && (
            <EditMenu
              onDelete={handleDeleteColumn}
              onClose={handleEditMenuClose}
              onEdit={handleEditColumn}
            />
          )}

          {isEditFormOpen && (
            <ColumnEditForm
              title={title}
              titleBarColor={titleBarColor}
              onSave={handleEditFormSave}
            />
          )}
          <AddButton onClick={handleCreateEmptyTask}>+</AddButton>
        </ActionButtonsContainer>
      </ColumnTitleBar>
      <TaskContainer>
        {tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            onTaskDragStart={onTaskDragStart}
            onTaskDelete={onTaskDelete}
            onTaskUpdate={onTaskUpdate}
          />
        ))}
        {isCreating ? (
          <CreateTaskForm
            onCreateTask={onCreateTask}
            columnTitle={title}
            setIsCreating={setIsCreating}
          />
        ) : (
          <AddTaskWrapper titleColor={titleBarColor}>
            <AddTask onClick={handleCreateTaskClick} titleColor={titleBarColor}>
              Add task...
            </AddTask>
          </AddTaskWrapper>
        )}
      </TaskContainer>
    </ColumnContainer>
  );
};
