import React, { useEffect } from "react"
import { Col, Row, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames"
import styles from "./layout.module.css"
import { CreateCourse } from "../course/CreateCourse"
import { courseActionAsync } from "../course/courseActionAsync";
import { CoursePreview } from "../course/CoursePreview";
import { LoadState } from "../../loadState";
import { URL } from "../../../core/settings/settings";

export const MenuLayout = () => {
    const dispatch = useDispatch()
    const { courses, loadState } = useSelector(state => state.courses)
    useEffect(() => {
        dispatch(courseActionAsync.getCourses())
    }, [dispatch])

    return (
        <Col className={classnames(styles.background, "px-4")} id="page-content-wrapper">
            {loadState === LoadState.firstLoad ?
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner> :
                <>
                    <Row className={"m-0 pt-5 pb-4"}>
                        <Col className={classnames("d-flex justify-content-between p-0", styles.courseText)}>
                            Your course
                        </Col>
                        <Col className={"p-0"}>
                            <Row className={"m-0 d-flex justify-content-end"}>
                                <span className={classnames(styles.textContainer, styles.text)}>All</span>
                                <span className={classnames(styles.textContainer, styles.text)}>Drafted</span>
                                <span className={classnames(styles.textContainer, styles.text)}>Published</span>
                                <span className={classnames(styles.textContainer)}>|</span>
                                <span className={classnames(styles.textContainer, styles.text)}>Archive</span>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={"m-0"}>
                        <Col className={"p-0"}>
                            <CreateCourse />
                        </Col>
                        {courses && courses.map((course, index) =>
                            <Col key={index} className={"p-0"}>
                                <CoursePreview
                                    title={course.title}
                                    state={course.status}
                                    date={course.date}
                                    img={URL + course.img}
                                />
                            </Col>
                        )}
                    </Row>
                </>}
        </Col>
    )
}