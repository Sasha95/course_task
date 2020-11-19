import {reducerWithInitialState} from "typescript-fsa-reducers";
import { LoadState } from "../../loadState";
import { newState } from "../../newState";
import { courseActions } from "./courseActions";
import { CourseInitialState, ICourseState } from "./courseState";

export const coursesReducer = reducerWithInitialState<ICourseState>(CourseInitialState)
    .case(courseActions.getCourses.started, state => ({...state, loadState: LoadState.firstLoad, error: null}))
    .case(courseActions.getCourses.done, (state, {result}) => {
            return newState(state, {
                loadState: LoadState.allIsLoaded,
                error: null,
                courses: result
            })
        }
    )
    .case(courseActions.getCourses.failed, (state, {error}) => ({
        ...state, 
        loadState: LoadState.error,
        error,
    }))