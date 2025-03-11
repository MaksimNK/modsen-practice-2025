import { TaskActionType, ITaskPayload } from '@myTypes/task';
import {
  CREATE_TASK,
  DELETE_TASK,
  MOVE_TASK,
  UPDATE_TASK,
  MOVE_TASK_ERROR,
} from '@myTypes/actionTypes';

const ERROR_MESSAGES = {
  MISSING_ID: 'Task ID is required for moving a task.',
  MISSING_COLUMN: 'Column is required for moving a task.',
  MISSING_ORDER: 'Order is required for moving a task.',
};

export const createTask = (
  task: ITaskPayload,
  targetColumn: string
): TaskActionType => ({
  type: CREATE_TASK,
  payload: { ...task, column: targetColumn },
});

export const moveTask = ({
  id,
  column,
  newIndex,
}: ITaskPayload): TaskActionType => {
  if (!id) {
    return {
      type: MOVE_TASK_ERROR,
      payload: ERROR_MESSAGES.MISSING_ID,
    };
  }

  if (!column) {
    return {
      type: MOVE_TASK_ERROR,
      payload: ERROR_MESSAGES.MISSING_COLUMN,
    };
  }

  if (!newIndex) {
    return {
      type: MOVE_TASK_ERROR,
      payload: ERROR_MESSAGES.MISSING_ORDER,
    };
  }

  return {
    type: MOVE_TASK,
    payload: { id, column, newIndex },
  };
};

export const updateTask = (task: ITaskPayload): TaskActionType => ({
  type: UPDATE_TASK,
  payload: task,
});
export const deleteTask = (task: ITaskPayload): TaskActionType => ({
  type: DELETE_TASK,
  payload: task,
});
