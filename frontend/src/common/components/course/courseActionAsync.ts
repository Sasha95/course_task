import { CustomDispatch } from "redux";
import { getCourses } from "../../../core/api/CourseApiRequest.g";
import { courseActions } from "./courseActions";

export const courseActionAsync = {
  getCourses: () => async (dispatch: CustomDispatch) => {
    try {
      dispatch(courseActions.getCourses.started());
      const response = await getCourses();
      dispatch(courseActions.getCourses.done({ result: response.result }));
    } catch (error) {
      dispatch(courseActions.getCourses.failed(error));
    }
  }
}
