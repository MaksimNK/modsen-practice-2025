import { IColumnPayload } from '@store/actions/columnActions';

export const initialColumns: IColumnPayload[] = [
  { id: '1', title: 'To Do', color: '#4F46E5' },
  { id: '2', title: 'In Progress', color: '#F59E0B' },
  { id: '3', title: 'Done', color: '#22C55E' },
];
