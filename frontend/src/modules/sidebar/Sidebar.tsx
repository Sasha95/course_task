import React from "react"
import { Nav } from "react-bootstrap"
import { ImageResources } from "../../resources/images/ImageResource.g"
import styles from "./sidebar.module.css"
import commonStyles from "../../common/commonStyle.module.css"
import classnames from "classnames"
import { Link } from "react-router-dom"

export const Sidebar = () => {
    return (
        <>
            <Nav className={classnames("sidebar p-0", styles.container)}>
                <div>
                    <div className="sidebar-sticky"></div>
                    <div className={styles.separator} />
                    <Link to="/" className={commonStyles.decorationNone}>
                        <Nav.Item className={classnames(styles.imageContainer, commonStyles.iconContainer)}>
                            <ImageResources.Light className={commonStyles.icon} />
                            <div className={styles.text}>Dashboard</div>
                        </Nav.Item>
                    </Link>
                    <div className={styles.separator} />
                    <Link to="/home" className={commonStyles.decorationNone}>
                        <Nav.Item className={classnames(styles.imageContainer, commonStyles.iconContainer)}>
                            <ImageResources.Book className={commonStyles.icon} />
                            <div className={styles.text}>Courses</div>
                        </Nav.Item>
                    </Link>
                    <div className={styles.separator} />
                    <Link to="/link-2" className={commonStyles.decorationNone}>
                        <Nav.Item className={classnames(styles.imageContainer, commonStyles.iconContainer)}>
                            <ImageResources.Settings className={commonStyles.icon} />
                            <div className={styles.text}>Settings</div>
                        </Nav.Item>
                    </Link>
                    <div className={styles.separator} />
                </div>
                <div className={styles.avatarContainer}>
                    <img src={ImageResources.Avatar} alt={"avatar"} />
                </div>
            </Nav>
        </>
    )
}