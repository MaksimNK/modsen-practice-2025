import { Action } from 'redux';
import {
  CREATE_COLUMN,
  UPDATE_COLUMN,
  DELETE_COLUMN,
  MOVE_COLUMN,
} from '@myTypes/actionTypes';

export interface IColumnPayload {
  id: string;
  title: string;
  color: string;
}
export interface CreateColumnAction extends Action<typeof CREATE_COLUMN> {
  payload: IColumnPayload;
}

export interface UpdateColumnAction extends Action<typeof UPDATE_COLUMN> {
  payload: IColumnPayload;
}

export interface DeleteColumnAction extends Action<typeof DELETE_COLUMN> {
  payload: { id: string };
}

export interface MoveColumnAction extends Action<typeof MOVE_COLUMN> {
  payload: { draggedColumnId: string; targetColumnId: string };
}

export type ColumnActionType =
  | CreateColumnAction
  | UpdateColumnAction
  | DeleteColumnAction
  | MoveColumnAction;
