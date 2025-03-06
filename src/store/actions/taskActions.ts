export interface ITaskPayload {
  id: string;
  title: string;
  description?: string;
  priority?: string;
  column?: string;
}

interface CreateTaskAction {
  type: 'CREATE_TASK';
  payload: ITaskPayload;
}

interface DeleteTaskAction {
  type: 'DELETE_TASK';
  payload: { id: string };
}

interface UpdateTaskAction {
  type: 'UPDATE_TASK';
  payload: ITaskPayload;
}

interface MoveTaskAction {
  type: 'MOVE_TASK';
  payload: { id: string; column: string };
}

export type TaskActionType =
  | CreateTaskAction
  | DeleteTaskAction
  | UpdateTaskAction
  | MoveTaskAction;
