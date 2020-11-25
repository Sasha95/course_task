import React from "react"
import Navbar from "react-bootstrap/esm/Navbar"
import { Input } from "../../components/input/Input"
import styles from "./header.module.css"



export const Header = React.memo(() => {

    return (
        <Navbar className={styles.container}>
            <Navbar.Brand href="#home">
                <div className={styles.logo}></div>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Input />
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
})