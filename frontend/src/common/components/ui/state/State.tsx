import React, { useMemo } from "react"
import { States, StatusStates } from "../../../../types/States"
import styles from "./state.module.css"
import classnames from "classnames"

interface IProps {
    state: States;
}

const background = (state: States) => {
    switch (state) {
        case 0:
            return styles.draft
        case 1:
            return styles.archived
        case 2:
            return styles.published
        case 3:
            return styles.deleted
        default:
            break;
    }
}

export const State = ({ state }: IProps) => {
    const bkg = useMemo(() => background(state), [state])
    const status = StatusStates[state]
    return (
        <div className={classnames(styles.container, bkg)}>
            {status}
        </div>
    )
}