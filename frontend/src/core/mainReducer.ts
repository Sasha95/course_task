import { Action, combineReducers } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { coursesReducer } from "../common/components/course/courseReducer";
import { IAppState } from "./appState";

export const createMainReducer = () =>
  combineReducers({
    courses: coursesReducer,
  });

// export interface IAppState
//   extends ReturnType<ReturnType<typeof createMainReducer>> {}

export interface IAppDispatch extends ThunkDispatch<IAppState, Error, Action> {}

export interface IThunkAction
  extends ThunkAction<Promise<void>, IAppState, {}, Action> {}
