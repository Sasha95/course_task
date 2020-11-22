import { createSelector } from "reselect";
import { IAppState } from "../../../core/appState";

export const CourseSelector = () => createSelector(
    (_: IAppState, id: number) => id,
    ({ courses }) => courses.courses,
    (id, courses) => {
        return courses? courses?.filter(x => x.id === id)[0]: null
    }
)