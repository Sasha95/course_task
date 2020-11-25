import { CourseInitialState, ICourseState } from "../modules/course/courseState";

export interface IAppState {
    courses: ICourseState,
}

export const AppInitialState: IAppState = {
    courses: CourseInitialState
}