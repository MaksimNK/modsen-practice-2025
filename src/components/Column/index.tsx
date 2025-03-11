import { FC, useRef, useState } from 'react';
import { Task } from '@components/Task';
import { TaskType } from '@myTypes/task';
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
import { MoreIcon } from '@components/UI/MoreIcon';
import { CreateTaskForm } from '@components/Forms/CreateTaskForm';
import { EditMenu } from '@components/UI/EditMenu';
import { ColumnEditForm } from '@components/Forms/ColumnEditForm';
import { useDragAndDrop } from '@hooks/useDragAndDrop';

interface ColumnProps {
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
  const [isEditMenuOpen, setIsEditMenuOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const columnRef = useRef<HTMLDivElement>(null);

  const {
    handleDragOver: handleColumnDragOver,
    handleDrop: handleColumnDropFromHook,
  } = useDragAndDrop({
    dragType: 'text/column',
    onDrop: (draggedColumnId) => {
      if (draggedColumnId && onColumnDrop) {
        onColumnDrop(draggedColumnId, id);
      }
    },
  });

  const handleLocalDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleLocalDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    const newIndex = tasks.length;

    onDropTask(taskId, title, newIndex);
  };

  const handleCreateTaskClick = () => setIsCreating(true);
  const handleCreateEmptyTask = () => {
    const uuid = self.crypto.randomUUID();
    const newTask: TaskType = {
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

  const handleMouseEnter = () => setIsMoreHidden(false);
  const handleMouseLeave = () => setIsMoreHidden(true);
  const toggleEditMenu = () => setIsEditMenuOpen((prev) => !prev);
  const closeEditMenu = () => setIsEditMenuOpen(false);
  const handleEditColumn = () => {
    closeEditMenu();
    setIsEditFormOpen(true);
  };
  const handleEditFormSave = (updateColumn: {
    title: string;
    color: string;
  }) => {
    if (onColumnUpdate) onColumnUpdate(id, updateColumn);
    setIsEditFormOpen(false);
  };

  const handleDeleteColumn = () => {
    if (onColumnDelete) onColumnDelete(id);
  };

  return (
    <ColumnContainer
      draggable
      className="column-container"
      data-column={title}
      ref={columnRef}
      onDragStart={handleColumnDragStart}
      onDragOver={handleLocalDragOver}
      onDrop={handleLocalDrop}
    >
      <ColumnTitleBar
        titleColor={titleBarColor}
        onDrop={(e) => {
          if (e.dataTransfer.types.includes('text/column')) {
            handleColumnDragOver(e);
            handleColumnDropFromHook(e);
          } else {
            const taskId = e.dataTransfer.getData('text/plain');
            onDropTask(taskId, title, tasks.length);
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
              <MoreIcon onMoreClick={toggleEditMenu} />
            </MoreIconWrapper>
          )}
          {isEditMenuOpen && (
            <EditMenu
              onDelete={handleDeleteColumn}
              onClose={closeEditMenu}
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
