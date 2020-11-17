import React from "react"
import { ImageResources } from "../../../../resources/images/ImageResource.g"
import style from "./input.module.css"

export const Input = () => {
    return (
        <div className={style.container}>
            <input placeholder={"Search"} type="text" className={style.input} />
            <ImageResources.Search className={style.search} />
        </div>
    )
}