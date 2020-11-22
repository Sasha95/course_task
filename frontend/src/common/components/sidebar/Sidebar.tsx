import React from "react"
import { Nav } from "react-bootstrap"
import { ImageResources } from "../../../resources/images/ImageResource.g"
import styles from "./sidebar.module.css"
import commonStyles from "../../../common/commonStyle.module.css"
import classnames from "classnames"
import { Link } from "react-router-dom"

export const Sidebar = () => {
    return (
        <>
            <Nav className={classnames("sidebar p-0", styles.container)}>
                <div>
                <div className="sidebar-sticky"></div>
                <div className={styles.separator} />
                <Link to="/">
                    <Nav.Item className={classnames(styles.imageContainer, commonStyles.iconContainer)}>
                        <ImageResources.Light className={commonStyles.icon} />
                    </Nav.Item>
                </Link>
                <div className={styles.separator} />
                <Link to="/home">
                    <Nav.Item className={classnames(styles.imageContainer, commonStyles.iconContainer)}>
                        <ImageResources.Book className={commonStyles.icon} />
                    </Nav.Item>
                </Link>
                <div className={styles.separator} />
                <Link to="/link-2">
                    <Nav.Item className={classnames(styles.imageContainer, commonStyles.iconContainer)}>
                        <ImageResources.Settings className={commonStyles.icon} />
                    </Nav.Item>
                </Link>
                <div className={styles.separator} />
                </div>
                <div className={styles.avatarContainer}>
                    <img src={ImageResources.Avatar} alt={"avatar"}/>
                </div>
            </Nav>
        </>
    )
}