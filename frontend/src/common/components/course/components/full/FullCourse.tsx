import React, { useEffect, useMemo } from "react"
import { Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import classnames from "classnames"
import { CourseSelector } from "../../courseSelector"
import { useParams } from "react-router"
import { IURLParams } from "../../../../../types/urlParams"
import { State } from "../../../ui/state/State"
import { States, StatusStates } from "../../../../../types/States"
import styles from "./full.module.css"
import { IData } from "../../../../../types/ICourse"
import { ObjectMap } from "../../../../../core/helper"
import { courseActionAsync } from "../../courseActionAsync"

export const FullCourse = React.memo(() => {
    const { id } = useParams<IURLParams>()
    const dispatch = useDispatch()
    const selector = useMemo(CourseSelector, [])
    const course = useSelector(state => selector(state, Number(id)))
    const data = course?.data;

    useEffect(() => {
        if (!data) {
            dispatch(courseActionAsync.searchCourse(""))
        }
    }, [data, dispatch])

    return (
        <Col className={"d-flex"}>
            {course && data ?
                <div className={classnames("p-0 d-flex")}>
                    <div className={classnames("col-3", styles.imageContainer)}>
                        <State style={styles.stateContainer} state={StatusStates[course.status] as States} />
                        <div>{course.title}</div>
                        <div>{course.date}</div>
                    </div>
                    <div>
                        {data.map((item) => (
                            <div key={Object.keys(item)[0]}>
                                <div className={styles.caption}>{(Object.keys(item) as Array<keyof IData>)[0]}</div>
                                <div className={styles.gridContainer}>
                                    {Object.values(ObjectMap(item)[0]).map((i, ind) => (
                                        <div className={styles.gridItem} key={ind}>{i}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div> :
                <div>course not found</div>
            }
        </Col>
    )
})