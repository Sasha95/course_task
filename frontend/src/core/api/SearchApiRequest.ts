import { ICourse } from "../../types/ICourse"
import { baseFetch } from "./BaseFetch"

export const searchCourses = (searchCourses: string) => {
    return baseFetch<{title: string}, ICourse[]>("search", {title: searchCourses})
}