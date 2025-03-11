import { useDispatch } from 'react-redux';
import {
  CREATE_TASK,
  DELETE_TASK,
  MOVE_TASK,
  UPDATE_TASK,
  MOVE_TASK_ERROR,
  CREATE_COLUMN,
  UPDATE_COLUMN,
  DELETE_COLUMN,
  MOVE_COLUMN,
} from '@myTypes/actionTypes';
import { AppDispatch } from '../store';
import { ITaskPayload, TaskActionType } from '@myTypes/task';
import { ColumnActionType } from '../store/actions/columnActions';

export const useReduxActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const dispatchAction = (action: TaskActionType | ColumnActionType) => {
    dispatch(action);
  };

  const createTask = (newTask: ITaskPayload, targetColumn: string) =>
    dispatchAction({
      type: CREATE_TASK,
      payload: {
        id: newTask.id,
        title: newTask.title,
        description: newTask.description,
        priority: newTask.priority,
        column: targetColumn,
      },
    });

  const deleteTask = (taskId: string) =>
    dispatchAction({ type: DELETE_TASK, payload: { id: taskId } });

  const updateTask = (
    id: string,
    updatedTask: { title: string; description?: string; priority: string }
  ) =>
    dispatchAction({
      type: UPDATE_TASK,
      payload: {
        id,
        title: updatedTask.title,
        description: updatedTask.description,
        priority: updatedTask.priority,
      },
    });

  const moveTask = (taskId: string, targetColumn: string, newIndex: number) =>
    dispatchAction({
      type: MOVE_TASK,
      payload: { id: taskId, column: targetColumn, newIndex },
    });

  const moveTaskError = (error: string) =>
    dispatchAction({ type: MOVE_TASK_ERROR, payload: error });

  const createColumn = (columnData: {
    id: string;
    title: string;
    color: string;
  }) => dispatchAction({ type: CREATE_COLUMN, payload: columnData });

  const updateColumn = (
    id: string,
    updateColumn: { title: string; color: string }
  ) =>
    dispatchAction({ type: UPDATE_COLUMN, payload: { id, ...updateColumn } });

  const deleteColumn = (id: string) =>
    dispatchAction({ type: DELETE_COLUMN, payload: { id } });

  const moveColumn = (draggedColumnId: string, targetColumnId: string) =>
    dispatchAction({
      type: MOVE_COLUMN,
      payload: { draggedColumnId, targetColumnId },
    });

  return {
    createTask,
    deleteTask,
    updateTask,
    moveTask,
    moveTaskError,
    createColumn,
    updateColumn,
    deleteColumn,
    moveColumn,
  };
};
