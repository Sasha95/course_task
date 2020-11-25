import React, { useMemo } from "react"
import { States } from "../../types/States"
import styles from "./state.module.css"
import classnames from "classnames"

interface IProps {
    state: States;
    style?: string;
}

const background = (state: States) => {
    switch (state) {
        case "Draft":
            return styles.draft
        case "Archived":
            return styles.archived
        case "Published":
            return styles.published
        case "Deleted":
            return styles.deleted
        default:
            break;
    }
}

export const State = React.memo(({ state, style }: IProps) => {
    const bkg = useMemo(() => background(state), [state])
    return (
        <div className={classnames(styles.container, bkg, style)}>
            {state}
        </div>
    )
})