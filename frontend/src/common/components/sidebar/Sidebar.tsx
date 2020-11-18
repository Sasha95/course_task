import React from "react"
import { Nav } from "react-bootstrap"
import { ImageResources } from "../../../resources/images/ImageResource.g"
import styles from "./sidebar.module.css"
import commonStyles from "../../../common/commonStyle.module.css"
import classnames from "classnames"

export const Sidebar = () => {
    return (
        <>
            <Nav className="col-md-12 d-none d-md-block sidebar p-0" activeKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
                <div className="sidebar-sticky"></div>
                <div className={styles.separator} />
                <Nav.Item className={classnames(styles.imageContainer, commonStyles.iconContainer)}>
                    <Nav.Link href="/home">
                        <ImageResources.Light className={commonStyles.icon} />
                    </Nav.Link>
                </Nav.Item>
                <div className={styles.separator} />
                <Nav.Item className={classnames(styles.imageContainer, commonStyles.iconContainer)}>
                    <Nav.Link eventKey="link-1">
                        <ImageResources.Book className={commonStyles.icon} />
                    </Nav.Link>
                </Nav.Item>
                <div className={styles.separator} />
                <Nav.Item className={classnames(styles.imageContainer, commonStyles.iconContainer)}>
                    <Nav.Link eventKey="link-2">
                        <ImageResources.Settings className={commonStyles.icon} />
                    </Nav.Link>
                </Nav.Item>
                <div className={styles.separator} />
            </Nav>

        </>
    )
}