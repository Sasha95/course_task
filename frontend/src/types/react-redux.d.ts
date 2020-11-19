/* tslint:disable */
import {IAppState} from "../core/appState";
import {Dispatch as CustomDispatch} from "./common";

declare module "react-redux" {
    interface DefaultRootState extends IAppState {}

    export function useDispatch(): CustomDispatch;
}