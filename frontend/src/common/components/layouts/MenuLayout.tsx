import React from "react"
import { Col } from "react-bootstrap"
import classnames from "classnames"
import styles from "./layout.module.css"

export const MenuLayout = () => {
    return (
        <Col className={classnames("p-0", styles.background)} id="page-content-wrapper">
            this is a test
        </Col>
    )
}