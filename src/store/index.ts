import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./modules/user/reducers";

const reducers = combineReducers({ user: userReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
