import React, { useState } from "react"
import { Col, Dropdown } from "react-bootstrap"
import { ImageResources } from "../../../../../resources/images/ImageResource.g"
import { KeyStates, States, Status, StatusStates } from "../../../../../types/States"
import styles from "./prew.module.css"
import commonStyles from "../../../../../common/commonStyle.module.css"
import classnames from "classnames"
import { State, } from "../../../ui/state/State"
import { DropMenu } from "../../../dropmenu/DropMenu"
import { useHistory } from "react-router"

interface IProps {
    id: number;
    title: string;
    date: string;
    state: KeyStates;
    img: string;
}

export const CoursePreview = React.memo(({ title, date, state, img, id }: IProps) => {
    let history = useHistory();
    const [showDialog, setShowDialog] = useState(false);

    const showDialogHandler = () => {
        setShowDialog(true)
    }
    const closeHandler = () => {
        setShowDialog(false)
    }
    const onToggle = () => {
        setShowDialog(x => !x)
    }

    const handleClick = () => {
        history.push(`/home/${id}`)
    }

    return (
        <Dropdown show={showDialog} drop={"down"} onToggle={onToggle} alignRight={true}>
            <div className={classnames(commonStyles.cardContainer)}>
                <div className={styles.container} onClick={handleClick}>
                    <img src={img} alt={title} />
                    <State state={StatusStates[state] as States} />
                </div>
                <div className={styles.textWrapper}>
                    <div>
                        <Col>{title}</Col>
                        <Col>{date}</Col>
                    </div>
                        <div onClick={showDialogHandler} className={classnames(commonStyles.iconContainer, styles.img)}>
                            <Dropdown.Toggle className={styles.opacityBtn} />
                            <ImageResources.ThreeDots className={commonStyles.icon} />
                        </div>
                </div>
            </div>
            <DropMenu status={StatusStates[state] as Status} id={id} onClose={closeHandler}/>
        </Dropdown>
    )
})