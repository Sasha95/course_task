import { ISimpleThunk } from "./simpleThunk";

export interface Dispatch {
    <T extends {type: string} | ISimpleThunk<any>>(action: T): T extends Function ? ReturnType<T> : T;
}