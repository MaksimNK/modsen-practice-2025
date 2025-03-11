import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  MOVE_TASK,
  MOVE_TASK_ERROR,
} from './actionTypes';

export type TaskType = {
  id: string;
  title: string;
  description?: string;
  priority: string;
  column?: string;
  order?: number;
};

export interface ITaskPayload {
  id: string;
  title?: string;
  description?: string;
  priority?: string;
  column?: string;
  order?: number;
  newIndex?: number;
}

interface CreateTaskAction {
  type: typeof CREATE_TASK;
  payload: ITaskPayload;
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: { id: string };
}

interface UpdateTaskAction {
  type: typeof UPDATE_TASK;
  payload: ITaskPayload;
}

interface MoveTaskAction {
  type: typeof MOVE_TASK;
  payload: { id: string; column: string; newIndex: number };
}
interface MoveTaskError {
  type: typeof MOVE_TASK_ERROR;
  payload: string;
}
export type TaskActionType =
  | CreateTaskAction
  | DeleteTaskAction
  | UpdateTaskAction
  | MoveTaskAction
  | MoveTaskError;
