import { ICourse } from "../../types/ICourse"
import { States, Status } from "../../types/States"
import {actionCreatorFactory} from "typescript-fsa";

export const actionCreator = actionCreatorFactory();


export const courseActions = {
    searchCourses: actionCreator.async<string | null, ICourse[] | null, Error>("SEARCH"),
    filterCourses: actionCreator.async<States | null, ICourse[] | null, Error>("FILTER"),
    changeStatus: actionCreator<{id: number, status: Status}>("STATUS"),
}