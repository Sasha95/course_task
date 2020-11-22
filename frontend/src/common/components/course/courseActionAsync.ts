import { CustomDispatch } from "redux";
import { filterCourses } from "../../../core/api/FilterApiRequest";
import { searchCourses } from "../../../core/api/SearchApiRequest";
import { States, StatusStates } from "../../../types/States";
import { courseActions } from "./courseActions";

export const courseActionAsync = {
  searchCourse: (searchText: string) => async (dispatch: CustomDispatch) => {
    try {
      dispatch(courseActions.searchCourses.started(searchText));
      const response = await searchCourses(searchText);
      dispatch(courseActions.searchCourses.done({ result: response.result, params: null }));
    } catch (error) {
      dispatch(courseActions.searchCourses.failed(error));
    }
  },
  filterCourses: (filter: States) => async (dispatch: CustomDispatch) => {
    try {
      dispatch(courseActions.filterCourses.started(filter));
      const response = await filterCourses(StatusStates[filter]);
      dispatch(courseActions.filterCourses.done({ result: response.result, params: null }));
    } catch (error) {
      dispatch(courseActions.filterCourses.failed(error));
    }
  },
}
