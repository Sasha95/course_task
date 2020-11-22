import React, { useEffect, useState } from "react"
import { Dropdown } from "react-bootstrap"
import { StateMachine } from "../../../core/stateMachine"
import { ImageResources } from "../../../resources/images/ImageResource.g"
import { Status, StatusStates } from "../../../types/States"
import styles from "./drop.module.css"
import classnames from "classnames"
import { useDispatch } from "react-redux"
import { courseActions } from "../course/courseActions"
import commonStyles from "../../commonStyle.module.css"

interface IProps {
    status: Status;
    id: number;
    onClose: () => void;
}

const imgChecker = (status: Status) => {
    switch (status) {
        case "Archived":
            return <ImageResources.Archive />
        case "Deleted":
            return <ImageResources.Trash />
        case "Draft":
            return <ImageResources.Draft />
        case "Published":
            return <ImageResources.Publish />
        default:
            break;
    }
}

export const DropMenu = React.memo(({ status, id, onClose }: IProps) => {
    const [state, setState] = useState<StatusStates[]>([])
    const dispatch = useDispatch();
    useEffect(() => {
        const availableStatuses = StateMachine(status)
        if (availableStatuses) {
            setState(availableStatuses)
        }
    }, [status])

    const handleClick = (idCourse: number, status: number) => {

        dispatch(courseActions.changeStatus({ id: idCourse, status: status }))
        onClose()
    }

    return (
        <Dropdown.Menu>
            {state.map((item) => (
                <div onClick={() => {handleClick(id, item)}} key={id} className={classnames(styles.container)}>
                    <div className={styles.image}>{imgChecker(StatusStates[item] as Status)}</div>
                    <div className={commonStyles.iconContainer}>
                        <div>{StatusStates[item] as Status}</div>
                    </div>
                </div>
            ))}
        </Dropdown.Menu>
    )
})