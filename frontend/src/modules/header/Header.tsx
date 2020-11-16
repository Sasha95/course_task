import React from "react"
import Navbar from "react-bootstrap/esm/Navbar"

import styles from "./header.module.css"

export const Header = () => {
    return (
        <Navbar className={styles.container}>
            <Navbar.Brand href="#home">
                <div className={styles.logo}></div>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}