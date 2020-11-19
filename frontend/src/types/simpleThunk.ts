import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAppState } from "../core/appState";

export interface ISimpleThunk<T = void> extends ThunkAction<T, IAppState, {}, Action> { }
export interface IThunkAction<T = void> extends ISimpleThunk<Promise<T>> { }