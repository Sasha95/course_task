import { reducerWithInitialState } from "typescript-fsa-reducers";
import { ICourse } from "../../types/ICourse";
import { LoadState } from "../../common/loadState";
import { newState } from "../../common/newState";
import { courseActions } from "./courseActions";
import { CourseInitialState, ICourseState } from "./courseState";
import _ from "lodash"
import { StatusStates } from "../../types/States";

var upset = function (arr: ICourse[], key: ICourse, newval: ICourse) {
    var match = _.find(arr, key);
    if(match){
        var index = _.indexOf(arr, _.find(arr, key));
        arr.splice(index, 1, newval);
    } else {
        arr.push(newval);
    }
    return arr;
};

export const coursesReducer = reducerWithInitialState<ICourseState>(CourseInitialState)
    .case(courseActions.searchCourses.started, state => ({ ...state, loadState: LoadState.firstLoad, error: null }))
    .case(courseActions.searchCourses.done, (state, { result }) => {
        return newState(state, {
            loadState: LoadState.allIsLoaded,
            error: null,
            courses: result
        })
    })
    .case(courseActions.searchCourses.failed, (state, { error }) => ({
        ...state,
        loadState: LoadState.error,
        error,
    }))
    .case(courseActions.filterCourses.started, state => ({ ...state, loadState: LoadState.firstLoad, error: null }))
    .case(courseActions.filterCourses.done, (state, { result }) => {
        return newState(state, {
            loadState: LoadState.allIsLoaded,
            error: null,
            courses: result
        })
    })
    .case(courseActions.filterCourses.failed, (state, { error }) => ({
        ...state,
        loadState: LoadState.error,
        error,
    }))
    .case(courseActions.changeStatus, (state, { id, status }) => {
        let courses = state.courses
        
        const course = state.courses?.find(x => x.id === id)
        
        if (courses && course) {
            const newCourse = {...course, status: StatusStates[status]} as ICourse
            upset(courses, course, newCourse)
        }
        
        return newState(state, {...state, courses: courses})
    })

