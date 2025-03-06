import { RootState } from '../store';

export const loadState = () => {
  try {
    const serialState = localStorage.getItem('appState');
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (error) {
    console.warn('Failed to save state to localStorage:', error);
    return undefined;
  }
};

export const saveState = (state: RootState) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem('appState', serialState);
  } catch (error) {
    console.warn('Failed to save state to localStorage:', error);
  }
};
