import React, { useState } from "react"
import { Row } from "react-bootstrap"
import { ImageResources } from "../../../resources/images/ImageResource.g"
import commonStyles from "../../commonStyle.module.css"
import styles from "./create.module.css"
import classnames from "classnames"
import { ModalComponent } from "../modal/ModalComponent"
import { useForm } from "react-hook-form"
import { ICourse } from "../../../types/ICourse"
import { InputForm } from "../ui/form/InputForm"

export const CreateCourse = React.memo(() => {
    const [showModal, setShowModal] = useState(false);
    const { register, setValue, handleSubmit, errors } = useForm<ICourse>();

    const onClose = () => { setShowModal(false) }
    const onSave = () => { }
    const onCreate = () => { setShowModal(true) }

    return (
        <>
            <ModalComponent show={showModal} handleClose={onClose} title={"Course add"} onSave={onSave}>
                <InputForm controlId={"title"} label={"Name"} rowCount={1} type={"textarea"} placeholder={"input name"} />
                <InputForm controlId={"get"} label={"Get started"} placeholder={"input get started"} rowCount={3} type={"textarea"} />
            </ModalComponent>

            <div className={classnames(commonStyles.cardContainer)}>
                <div className={styles.container} onClick={onCreate}>
                    <Row className={classnames(commonStyles.iconContainer, styles.text)}>
                        <div className={styles.container}>
                            <ImageResources.Plus className={commonStyles.icon} />
                            <p>Create <span className={styles.new}>new course</span></p>
                        </div>
                    </Row>
                    <Row className={styles.description}>
                        Increase your sales by starting things out
                    </Row>
                </div>
            </div>
        </>
    )
})