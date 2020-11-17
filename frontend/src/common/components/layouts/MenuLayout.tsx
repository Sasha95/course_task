import React from "react"
import { Col, Row } from "react-bootstrap"
import { Sidebar } from "../sidebar/Sidebar"
import classnames from "classnames"
import styles from "./menu.module.css"

export const MenuLayout = () => {
    return (
        <Row className={"m-0"}>
            <Col className={classnames("p-0", styles.container)} sm={1} id="sidebar-wrapper">      
              <Sidebar />
            </Col>
            <Col className={classnames("p-0", styles.background)} xs={11} id="page-content-wrapper">
                this is a test
            </Col> 
        </Row>
    )
}