import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ImageResources } from "../../../resources/images/ImageResource.g"
import { States } from "../../../types/States"
import styles from "./prew.module.css"
import commonStyles from "../../commonStyle.module.css"

interface IProps {
    title: string;
    date: string;
    state: States;
    img: string;
}

export const CoursePreview = ({ title, date, state, img }: IProps) => {
    return (
        <div>
            <Row className={styles.container}>
                <img className={styles.img} src={img} alt={title} />
            </Row>
            <Row>
                <Row>
                    <Col>{title}</Col>
                    <Col>{date}</Col>
                </Row>
                <Col className={commonStyles.iconContainer}>
                    <ImageResources.ThreeDots className={commonStyles.icon} />
                </Col>
            </Row>
        </div>
    )
}