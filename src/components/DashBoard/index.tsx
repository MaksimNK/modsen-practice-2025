import { FC, useState } from 'react';
import { Column } from '../Column/index';
import {
  BoardContainer,
  PageContainer,
  PlusButton,
  Header,
  MobileHeader,
  MobileMenuButton,
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { ITaskPayload } from '../../store/actions/taskActions';
import { Modal } from '../Modal';
import { ColumnForm } from '../ColumnForm';
import { BurgerMenu } from '../UI/BurgerMenu/index';
import { MobileDrawer } from '../UI/MobileDrawer';
import { TaskType } from '../../constants/constant';

interface ColumnData {
  id: string;
  title: string;
  color: string;
}

export const DashBoard: FC = () => {
  const [draggingTaskId, setDraggingTaskId] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.task);
  const columns = useSelector((state: RootState) => state.column);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isColumnFormOpen, setIsColumnFormOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDropTask = (taskId: string, targetColumn: string) => {
    dispatch({
      type: 'MOVE_TASK',
      payload: { id: taskId, column: targetColumn },
    });
  };

  const transformedTasks: TaskType[] = tasks.map((task) => ({
    id: task.id,
    title: task.title || 'Untitled',
    description: task.description,
    priority: task.priority || 'medium',
    column: task.column,
  }));

  const handleTaskDelete = (id: string) => {
    dispatch({
      type: 'DELETE_TASK',
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
      type: 'UPDATE_TASK',
      payload: taskPayload,
    });
  };

  const handleCreateTask = (newTask: TaskType, targetColumn: string) => {
    const taskPayload: ITaskPayload = {
      id: newTask.id,
      title: newTask.title,
      description: newTask.description,
      priority: newTask.priority,
      column: targetColumn,
    };

    dispatch({
      type: 'CREATE_TASK',
      payload: taskPayload,
    });
  };

  const handleColumnDrop = (
    draggedColumnId: string,
    targetColumnId: string
  ) => {
    dispatch({
      type: 'MOVE_COLUMN',
      payload: { draggedColumnId, targetColumnId },
    });
  };

  const handleUpdateColumn = (
    id: string,
    updateColumn: { title: string; color: string }
  ) => {
    dispatch({
      type: 'UPDATE_COLUMN',
      payload: { id, ...updateColumn },
    });
  };

  const handleDeleteColumn = (id: string) => {
    dispatch({
      type: 'DELETE_COLUMN',
      payload: { id },
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  const toggleMobileDrawer = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  const openColumnForm = () => {
    setIsColumnFormOpen(true);
  };

  const closeColumnForm = () => {
    setIsColumnFormOpen(false);
  };

  return (
    <PageContainer>
      <Header>
        <h1>Kanban Dashboard</h1>
        <PlusButton onClick={openModal}>+</PlusButton>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ColumnForm onClose={closeModal} />
        </Modal>
      </Header>
      <MobileHeader>
        <BurgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
      </MobileHeader>
      <BoardContainer>
        <MobileDrawer isOpen={isMobileDrawerOpen} onClose={toggleMobileDrawer}>
          {isColumnFormOpen ? (
            <ColumnForm onClose={closeColumnForm} />
          ) : (
            <>
              <h1>Kanban Dashboard</h1>
              <MobileMenuButton onClick={openColumnForm}>
                Create Column
              </MobileMenuButton>
            </>
          )}
        </MobileDrawer>
        {columns.map((column: ColumnData) => (
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            titleBarColor={column.color}
            tasks={transformedTasks.filter(
              (task) => task.column === column.title
            )}
            onDropTask={handleDropTask}
            onCreateTask={handleCreateTask}
            onTaskDragStart={setDraggingTaskId}
            draggingTaskId={draggingTaskId}
            onTaskDelete={handleTaskDelete}
            onTaskUpdate={handleUpdateTask}
            onColumnDrop={handleColumnDrop}
            onColumnUpdate={handleUpdateColumn}
            onColumnDelete={handleDeleteColumn}
          />
        ))}
      </BoardContainer>
    </PageContainer>
  );
};
