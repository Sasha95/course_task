import React, { useState } from "react"
import { Form, Row } from "react-bootstrap"
import { ImageResources } from "../../../../resources/images/ImageResource.g"
import commonStyles from "../../../../common/commonStyle.module.css"
import styles from "./create.module.css"
import classnames from "classnames"
import { ModalComponent } from "../../../../components/modal/ModalComponent"
import { useForm } from "react-hook-form"
import { ICourse } from "../../../../types/ICourse"
import { InputForm } from "../../../../components/form/InputForm"

export const CreateCourse = React.memo(() => {
    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit } = useForm<ICourse>();

    const onSubmit = handleSubmit((data: any) => console.log(data, "created"));
    const onClose = () => { setShowModal(false) }
    const onSave = () => { onSubmit() }
    const onCreate = () => { setShowModal(true) }


    return (
        <>
            <ModalComponent show={showModal} handleClose={onClose} title={"Course add"} onSave={onSave}>
                <Form onSubmit={onSubmit}>
                    <InputForm register={register} controlId={"title"} label={"Name"} type={"textarea"} rowCount={1} placeholder={"input name"} />
                    <hr />
                    <InputForm register={register} controlId={"get_first"} label={"Get started"} rowCount={2} type={"textarea"} />
                    <InputForm register={register} controlId={"get_second"} label={"Description"} rowCount={3} type={"textarea"} />
                    <hr />
                    <InputForm register={register} controlId={"what_first"} label={"What to read?"} rowCount={2} type={"textarea"} />
                    <InputForm register={register} controlId={"what_second"} label={"Description"} rowCount={3} type={"textarea"} />
                    <hr />
                    <InputForm register={register} controlId={"how_first"} label={"How to read?"} rowCount={2} type={"textarea"} />
                    <InputForm register={register} controlId={"how_second"} label={"Description"} rowCount={3} type={"textarea"} />
                </Form>
            </ModalComponent>

            <div className={classnames(commonStyles.cardContainer, styles.wrapper)}>
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