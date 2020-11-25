import { ICourse } from "../../types/ICourse";
import { LoadState } from "../../common/loadState";

export interface ICourseState {
    error: Error | null;
    loadState: LoadState;
    courses: ICourse[] | null;
}

export const CourseInitialState: ICourseState = {
    error: null,
    loadState: LoadState.firstLoad,
    courses: null,
}