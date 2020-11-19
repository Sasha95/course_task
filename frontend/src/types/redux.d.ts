import { } from "redux";

declare module "redux" {
    import { Dispatch } from "./common"

    type CustomDispatch = Dispatch;
}