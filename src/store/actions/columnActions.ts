// src/store/actions/columnActions.ts
import { Action } from 'redux';

export interface IColumnPayload {
  id: string;
  title: string;
  color: string;
}

export interface CreateColumnAction extends Action<'CREATE_COLUMN'> {
  payload: IColumnPayload;
}

export interface UpdateColumnAction extends Action<'UPDATE_COLUMN'> {
  payload: IColumnPayload;
}

export interface DeleteColumnAction extends Action<'DELETE_COLUMN'> {
  payload: { id: string };
}

export interface MoveColumnAction extends Action<'MOVE_COLUMN'> {
  payload: { draggedColumnId: string; targetColumnId: string };
}

export type ColumnActionType =
  | CreateColumnAction
  | UpdateColumnAction
  | DeleteColumnAction
  | MoveColumnAction
  | { type: 'UNKNOWN_COLUMN_ACTION' };


