import { FC, useState, useRef, RefObject } from 'react';
import { Column } from '@components/Column/index';
import {
  BoardContainer,
  PageContainer,
  PlusButton,
  Header,
  MobileHeader,
  MobileMenuButton,
} from './styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Modal } from '@components/UI/Modal';
import { ColumnForm } from '@components/Forms/ColumnForm';
import { BurgerMenu } from '@components/UI/BurgerMenu/index';
import { MobileDrawer } from '@components/UI/MobileDrawer';
import { TaskType } from '@myTypes/task';
import { useReduxActions } from '@hooks/useReduxActions';
import { useDragScroll } from '@hooks/useDragScroll';
interface ColumnData {
  id: string;
  title: string;
  color: string;
}

export const DashBoard: FC = () => {
  const [draggingTaskId, setDraggingTaskId] = useState<string | null>(null);
  const tasks = useSelector((state: RootState) => state.task);
  const columns = useSelector((state: RootState) => state.column);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isColumnFormOpen, setIsColumnFormOpen] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);

  const { handleMouseDown, handleMouseLeaveOrUp, handleMouseMove } =
    useDragScroll(boardRef as RefObject<HTMLDivElement>);

  const {
    createTask,
    moveTask,
    updateTask,
    deleteTask,
    deleteColumn,
    updateColumn,
    moveColumn,
  } = useReduxActions();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const transformedTasks: TaskType[] = tasks.map((task) => ({
    id: task.id,
    title: task.title || 'Untitled',
    description: task.description,
    priority: task.priority || 'medium',
    column: task.column,
  }));

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
      <BoardContainer
        ref={boardRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
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
            onDropTask={moveTask}
            onCreateTask={createTask}
            onTaskDragStart={setDraggingTaskId}
            draggingTaskId={draggingTaskId}
            onTaskDelete={deleteTask}
            onTaskUpdate={updateTask}
            onColumnDrop={moveColumn}
            onColumnUpdate={updateColumn}
            onColumnDelete={deleteColumn}
          />
        ))}
      </BoardContainer>
    </PageContainer>
  );
};
