import {  combineReducers, applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";


const reducers = combineReducers({
    auth: authReducer,
});

export const store = legacy_createStore (reducers, applyMiddleware(thunk));



















