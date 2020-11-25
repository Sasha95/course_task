import { Action, combineReducers } from "redux";
import { ThunkAction } from "redux-thunk";
import { coursesReducer } from "../modules/course/courseReducer";
import { IAppState } from "./appState";

export const createMainReducer = () =>
  combineReducers({
    courses: coursesReducer,
  });

export interface IThunkAction
  extends ThunkAction<Promise<void>, IAppState, {}, Action> {}
