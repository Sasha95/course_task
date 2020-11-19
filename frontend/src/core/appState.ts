import { CourseInitialState, ICourseState } from "../common/components/course/courseState";

export interface IAppState {
    courses: ICourseState,
}

export const AppInitialState: IAppState = {
    courses: CourseInitialState
}