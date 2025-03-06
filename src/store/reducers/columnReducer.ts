import { IColumnPayload, ColumnActionType } from '../actions/columnActions';

const initialColumns: IColumnPayload[] = [
  { id: '1', title: 'To Do', color: '#4F46E5' },
  { id: '2', title: 'In Progress', color: '#F59E0B' },
  { id: '3', title: 'Done', color: '#22C55E' },
];

const columnReducer = (
  state: IColumnPayload[] = initialColumns,
  action: ColumnActionType
): IColumnPayload[] => {
  switch (action.type) {
    case 'CREATE_COLUMN':
      return [...state, action.payload];
    case 'UPDATE_COLUMN':
      return state.map((col) =>
        col.id === action.payload.id
          ? { ...col, title: action.payload.title, color: action.payload.color }
          : col
      );
    case 'DELETE_COLUMN':
      return state.filter((col) => col.id !== action.payload.id);
    case 'MOVE_COLUMN': {
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
