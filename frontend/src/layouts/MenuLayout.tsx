import React, { useCallback, useEffect } from "react"
import { Col, Row, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import classnames from "classnames"
import styles from "./layout.module.css"
import { CreateCourse } from "../modules/course/components/add/CreateCourse"
import { courseActionAsync } from "../modules/course/courseActionAsync"
import { CoursePreview } from "../modules/course/components/preview/CoursePreview"
import { LoadState } from "../common/loadState"
import { URL } from "../core/settings/settings"
import { States } from "../types/States"
import { FilterType } from "./FilterType"
import commonStyle from "../common/commonStyle.module.css"


export const MenuLayout = React.memo(() => {
    const dispatch = useDispatch()

    const { courses, loadState } = useSelector(state => state.courses)
    useEffect(() => {
        if (!courses || courses?.length === 0) {
            dispatch(courseActionAsync.searchCourse(""))
        }
    }, [courses, dispatch])

    const handleFilter = useCallback((status: States) => {
        dispatch(courseActionAsync.filterCourses(status))
    }, [dispatch])

    return (
        <Col className={classnames(styles.background, "pl-0")} id="page-content-wrapper">
            {loadState === LoadState.firstLoad ?
                <Spinner animation="border" role="status" className={commonStyle.loader}>
                    <span className="sr-only">Loading...</span>
                </Spinner> :
                <>
                    <Row className={classnames("m-0 pt-5 pb-4", styles.wrapper)}>
                        <Col className={classnames("d-flex justify-content-between p-0", styles.courseText)}>
                            Your course
                        </Col>
                        <Col className={"p-0"}>
                            <Row className={"m-0 d-flex justify-content-end"}>
                                <FilterType onClick={handleFilter} status={"All"}>All</FilterType>
                                <FilterType onClick={handleFilter} status={"Draft"}>Drafted</FilterType>
                                <FilterType onClick={handleFilter} status={"Published"}>Published</FilterType>
                                <span className={classnames(styles.textContainer)}>|</span>
                                <FilterType onClick={handleFilter} status={"Archived"}>Archive</FilterType>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={"m-0 p-0"}>
                        <CreateCourse />
                        {courses && courses.map((course) =>
                            <div key={course.id} className={styles.prewContainer}>
                                <CoursePreview
                                    id={course.id}
                                    title={course.title}
                                    state={course.status}
                                    date={course.date}
                                    img={URL + course.img}
                                />
                            </div>
                        )}
                    </Row>
                </>}
        </Col>
    )
})