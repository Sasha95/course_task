import React, { ElementType } from "react"
import { Form } from "react-bootstrap"

interface IProps {
    label: string;
    controlId: string;
    placeholder?: string;
    rowCount?: number;
    type?: ElementType;
}

export const InputForm = ({label, placeholder, controlId, rowCount=1, type = "text"}: IProps) => {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control as={type} rows={rowCount} placeholder={placeholder} />
        </Form.Group>
    )
}