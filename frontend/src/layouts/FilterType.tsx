import React from "react"
import { States } from "../types/States"
import classnames from "classnames"
import styles from "./layout.module.css"

interface IProps {
    status: States;
    onClick: (x: States) => void;
}

export const FilterType: React.FC<IProps> = ({ onClick, status, children }) => {
    return (
        <span className={classnames(styles.textContainer, styles.text)} onClick={() => onClick(status)}>
            {children}
        </span>
    )
}