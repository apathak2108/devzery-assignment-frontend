import homeReducer from "./reducers/homeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ home: homeReducer });

export default rootReducer;
