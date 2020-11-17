import React from "react"
import { Nav } from "react-bootstrap"
import { ImageResources } from "../../../resources/images/ImageResource.g"
import styles from "./sidebar.module.css"

export const Sidebar = () => {
    return (
        <>
            <Nav className="col-md-12 d-none d-md-block sidebar p-0" activeKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
                <div className="sidebar-sticky"></div>
                <div className={styles.separator} />
                <Nav.Item className={styles.imageContainer}>
                    <Nav.Link href="/home">
                        <ImageResources.Light />
                    </Nav.Link>
                </Nav.Item>
                <div className={styles.separator} />
                <Nav.Item className={styles.imageContainer}>
                    <Nav.Link eventKey="link-1">
                        <ImageResources.Book />
                    </Nav.Link>
                </Nav.Item>
                <div className={styles.separator} />
                <Nav.Item className={styles.imageContainer}>
                    <Nav.Link eventKey="link-2">
                        <ImageResources.Settings />
                    </Nav.Link>
                </Nav.Item>
                <div className={styles.separator} />
            </Nav>

        </>
    )
}