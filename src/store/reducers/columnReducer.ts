import {
  CREATE_COLUMN,
  UPDATE_COLUMN,
  DELETE_COLUMN,
  MOVE_COLUMN,
} from '@myTypes/actionTypes';
import { initialColumns } from '@store/initialState/initialColumns';
import { IColumnPayload } from '@myTypes/column';
import { ColumnActionType } from '@store/actions/columnActions';

const columnReducer = (
  state: IColumnPayload[] = initialColumns,
  action: ColumnActionType
): IColumnPayload[] => {
  switch (action.type) {
    case CREATE_COLUMN:
      return [...state, action.payload];
    case UPDATE_COLUMN:
      return state.map((col) =>
        col.id === action.payload.id
          ? { ...col, title: action.payload.title, color: action.payload.color }
          : col
      );
    case DELETE_COLUMN:
      return state.filter((col) => col.id !== action.payload.id);
    case MOVE_COLUMN: {
      const { draggedColumnId, targetColumnId } = action.payload;
      const draggedIndex = state.findIndex((col) => col.id === draggedColumnId);
      const targetIndex = state.findIndex((col) => col.id === targetColumnId);
      if (draggedIndex === -1 || targetIndex === -1) return state;
      const newState = [...state];
      const [draggedColumn] = newState.splice(draggedIndex, 1);
      newState.splice(targetIndex, 0, draggedColumn);
      return newState;
    }
    default:
      return state;
  }
};

export default columnReducer;
