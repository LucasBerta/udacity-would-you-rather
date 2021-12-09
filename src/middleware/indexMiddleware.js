import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import loggerMiddleware from "./loggerMiddleware";

export default applyMiddleware(
  thunk,
  loggerMiddleware,
);