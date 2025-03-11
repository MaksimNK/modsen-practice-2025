import { ITaskPayload, TaskActionType } from '@myTypes/task';
import {
  CREATE_TASK,
  DELETE_TASK,
  MOVE_TASK,
  UPDATE_TASK,
  MOVE_TASK_ERROR,
} from '../../types/actionTypes';
import { initialTasks } from '../initialState/initialTasks';

const taskReducer = (
  state: ITaskPayload[] = initialTasks,
  action: TaskActionType
): ITaskPayload[] => {
  switch (action.type) {
    case CREATE_TASK: {
      const {
        id,
        title = '',
        description = '',
        priority = 'medium',
        column = 'To Do',
      } = action.payload;

      if (!id) {
        console.error('Task ID is missing in CREATE_TASK action.');
        return state;
      }
      const tasksInColumn = state.filter((task) => task.column === column);
      const order = tasksInColumn.length;
      const newTask: ITaskPayload = {
        id,
        title,
        description,
        priority,
        column,
        order,
      };
      return [...state, newTask];
    }

    case DELETE_TASK: {
      return state.filter((task) => task.id !== action.payload.id);
    }
    case UPDATE_TASK: {
      const updatedTask = action.payload;
      return state.map((task) => {
        if (task.id === updatedTask.id) {
          return { ...task, ...updatedTask };
        }
        return task;
      });
    }
    case MOVE_TASK: {
      const { id, column, newIndex } = action.payload;
      const taskToMove = state.find((task) => task.id === id);
      if (!taskToMove) return state;

      taskToMove.column = column;

      const tasksInColumn = state.filter(
        (task) => task.column === column && task.id !== id
      );

      tasksInColumn.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

      tasksInColumn.splice(newIndex, 0, taskToMove);

      const updatedTasksInColumn = tasksInColumn.map((task, index) => ({
        ...task,
        order: index,
      }));

      return [
        ...state.filter((task) => task.column !== column),
        ...updatedTasksInColumn,
      ];
    }

    case MOVE_TASK_ERROR: {
      console.error('MOVE_TASK_ERROR:', action.payload);
      return state;
    }
    default: {
      return state;
    }
  }
};

export default taskReducer;
