import { ICourse } from "../../../types/ICourse"
import { actionCreator } from "../../actionCreator"

export const courseActions = {
    getCourses: actionCreator.async<void, ICourse[] | null, Error>("COURSE/GET_COURSES")
}