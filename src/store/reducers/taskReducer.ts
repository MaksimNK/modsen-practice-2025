import { ITaskPayload, TaskActionType } from '../actions/taskActions';

const initialTasks: ITaskPayload[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description for task 1',
    column: 'To Do',
    priority: 'medium',
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description for task 2',
    column: 'In Progress',
    priority: 'high',
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Description for task 3',
    column: 'Done',
    priority: 'low',
  },
];

const taskReducer = (
  state: ITaskPayload[] = initialTasks,
  action: TaskActionType
): ITaskPayload[] => {
  switch (action.type) {
    case 'CREATE_TASK': {
      const newTask: ITaskPayload = {
        id: action.payload.id,
        title: action.payload.title || '',
        description: action.payload.description || '',
        priority: action.payload.priority || 'medium',
        column: action.payload.column || 'To Do',
      };
      return [...state, newTask];
    }
    case 'DELETE_TASK': {
      return state.filter((task) => task.id !== action.payload.id);
    }
    case 'UPDATE_TASK': {
      const updatedTask = action.payload;
      return state.map((task) => {
        return task.id === updatedTask.id ? { ...task, ...updatedTask } : task;
      });
    }
    case 'MOVE_TASK': {
      const { id, column } = action.payload;
      return state.map((task) => (task.id === id ? { ...task, column } : task));
    }
    default: {
      return state;
    }
  }
};

export default taskReducer;
