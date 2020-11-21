import React, { useState } from "react"
import { Col } from "react-bootstrap"
import { ImageResources } from "../../../resources/images/ImageResource.g"
import { States } from "../../../types/States"
import styles from "./prew.module.css"
import commonStyles from "../../commonStyle.module.css"
import classnames from "classnames"
import { State } from "../ui/state/State"

interface IProps {
    title: string;
    date: string;
    state: States;
    img: string;
}

export const CoursePreview = ({ title, date, state, img }: IProps) => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <div className={classnames(commonStyles.cardContainer)}>
            <div className={styles.container}>
                <img src={img} alt={title} />
                <State state={state} />
            </div>
            <div className={styles.textWrapper}>
                <div>
                    <Col>{title}</Col>
                    <Col>{date}</Col>
                </div>
                <div className={classnames(commonStyles.iconContainer, styles.img)}>
                    <ImageResources.ThreeDots className={commonStyles.icon} />
                </div>
            </div>
        </div>
    )
}