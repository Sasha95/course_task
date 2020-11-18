import React from "react"
import { Col, Row } from "react-bootstrap"
import classnames from "classnames"
import styles from "./layout.module.css"
import { CreateCourse } from "../course/CreateCourse"

export const MenuLayout = () => {
    return (
        <Col className={classnames("p-0", styles.background)} xs={11} id="page-content-wrapper">
            <Row className={"m-0"}>
                <Col className={"d-flex justify-content-between"}>
                    Your course
                </Col>
                <Col>
                    <Row>
                        <Col>All</Col>
                        <Col>Drafted</Col>
                        <Col>Published</Col>
                        <Col>|</Col>
                        <Col>Archive</Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CreateCourse />
                </Col>

            </Row>
        </Col>
    )
}