import { createStore, combineReducers,applyMiddleware } from "redux";
import signInReducer from "./Redux/reducer/signInReducer";
import { thunk } from "redux-thunk";

export const result = combineReducers({
  signInReducer: signInReducer,
});

export const store = createStore(result,applyMiddleware(thunk))