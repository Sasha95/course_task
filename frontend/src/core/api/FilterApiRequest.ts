import { ICourse } from "../../types/ICourse"
import { baseFetch } from "./BaseFetch"
import {KeyStates} from "../../types/States"

export const filterCourses = (status: KeyStates) => {
    return baseFetch<{status: KeyStates}, ICourse[]>("filter", {status: status})
}