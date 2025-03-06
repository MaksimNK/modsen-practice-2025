import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { loadState, saveState } from '../utils/localStorageHelper';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
