import { baseFetch } from "./BaseFetch"
import { ICourse } from "../../types/ICourse"

export const getCourses = () => {
    return baseFetch<{}, ICourse[]>("data", {})
}