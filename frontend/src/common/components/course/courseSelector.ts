import { createSelector } from "reselect";
import { IAppState } from "../../../core/appState";

export const CourseSelector = () => createSelector(
    (_: IAppState, id: number) => id,
    ({ courses }) => courses.courses,
    (id, courses) => {
        return courses? courses?.find(x => x.id === id): null
    }
)