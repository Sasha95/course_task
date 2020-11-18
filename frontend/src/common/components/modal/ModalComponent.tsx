import React from "react"
import { Button, Modal } from "react-bootstrap"

interface IProps {
    show: boolean;
    handleClose: () => void;
    title?: string;
    onSave?: () => void;
}

export const ModalComponent: React.FC<IProps> = ({ handleClose, onSave, show, title, children }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            {title && <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>}
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                {onSave && <Button variant="primary" onClick={onSave}>
                    Save
                </Button>}
            </Modal.Footer>
        </Modal>
    )
}