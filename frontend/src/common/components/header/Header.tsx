import React from "react"
import Navbar from "react-bootstrap/esm/Navbar"
import commonStyle from "../../common/commonStyle.module.css"
import styles from "./header.module.css"
import { Input } from ".."

export const Header = () => {
    return (
        <Navbar className={styles.container}>
            <Navbar.Brand href="#home">
                <div className={styles.logo}></div>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Input />
                    {/* <div className={commonStyle.iconContainer}>
                        <ReactLogo className={commonStyle.icon} />
                    </div> */}
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}