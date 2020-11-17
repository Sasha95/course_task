import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ImageResources } from "../../../resources/images/ImageResource.g"
import { States } from "../../../types/Types"
import styles from "./course.module.css"

interface IProps {
    title: string;
    date: string;
    state: States;
    img: string;
}

export const CoursePreview = ({ title, date, state, img }: IProps) => {
    return (
        <Container>
            <Row className={styles.containerPrew}>
                
                <img className={styles.imgPrew} src={require(img)} alt={title} />
            </Row>
            <Row>
                <Row>
                    <Col>{title}</Col>
                    <Col>{date}</Col>
                </Row>
                <Col>
                    <ImageResources.Three_dots />
                </Col>
            </Row>
        </Container>
    )
}