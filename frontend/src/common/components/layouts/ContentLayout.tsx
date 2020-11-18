import React from "react"
import { Col, Row } from "react-bootstrap"
import { Sidebar } from "../sidebar/Sidebar"
import classnames from "classnames"
import styles from "./layout.module.css"

export const ContentLayout: React.FC = ({ children }) => {
    return (
        <>
            <Row className={classnames(styles.container, "m-0")}>
                <Col className={classnames("p-0", styles.sidebarContainer)} sm={1} id="sidebar-wrapper">
                    <Sidebar />
                </Col>
                {children}
            </Row>
        </>
    )
}