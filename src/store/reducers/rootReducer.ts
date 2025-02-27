import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import columnReducer from "./columnReducer";

const rootReducer = combineReducers({
    task: taskReducer,
    column: columnReducer
});


export default rootReducer;