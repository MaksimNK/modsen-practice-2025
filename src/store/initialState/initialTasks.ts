import { ITaskPayload } from '@myTypes/task';

export const initialTasks: ITaskPayload[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description for task 1',
    column: 'To Do',
    priority: 'medium',
    order: 0,
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description for task 2',
    column: 'In Progress',
    priority: 'high',
    order: 0,
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Description for task 3',
    column: 'Done',
    priority: 'low',
    order: 0,
  },
];
