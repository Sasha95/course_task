import React, { useEffect, useState } from "react"
import { Dropdown } from "react-bootstrap"
import { StateMachine } from "../../utils/stateMachine"
import { ImageResources } from "../../resources/images/ImageResource.g"
import { Status } from "../../types/States"
import styles from "./drop.module.css"
import classnames from "classnames"
import { useDispatch } from "react-redux"
import { courseActions } from "../../modules/course/courseActions"
import commonStyles from "../../common/commonStyle.module.css"

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
    const [state, setState] = useState<Status[]>([])
    const dispatch = useDispatch();
    useEffect(() => {
        const availableStatuses = StateMachine(status)
        if (availableStatuses) {
            setState(availableStatuses)
        }
    }, [status])

    const handleClick = (idCourse: number, status: Status) => {

        dispatch(courseActions.changeStatus({ id: idCourse, status: status }))
        onClose()
    }

    return (
        <Dropdown.Menu>
            {state.map((item, index) => (
                <div onClick={() => { handleClick(id, item) }} key={index} className={classnames(styles.container)}>
                    <div className={styles.image}>{imgChecker(item)}</div>
                    <div className={commonStyles.iconContainer}>
                        <div className={styles.text}>{item}</div>
                    </div>
                </div>
            ))}
        </Dropdown.Menu>
    )
})