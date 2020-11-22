import { ICourse } from "../../../types/ICourse"
import { KeyStates, States } from "../../../types/States"
import { actionCreator } from "../../actionCreator"

export const courseActions = {
    searchCourses: actionCreator.async<string | null, ICourse[] | null, Error>("COURSE/SEARCH"),
    filterCourses: actionCreator.async<States | null, ICourse[] | null, Error>("COURSE/FILTER"),
    changeStatus: actionCreator<{id: number, status: KeyStates}>("COURSE/STATUS"),
}