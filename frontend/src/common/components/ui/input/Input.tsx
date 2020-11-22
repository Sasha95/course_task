import React, { useCallback, useRef } from 'react'
import { ImageResources } from '../../../../resources/images/ImageResource.g'
import style from './input.module.css'
import { useDispatch } from 'react-redux'
import debounce from 'lodash/debounce'
import { courseActionAsync } from '../../course/courseActionAsync'

export const Input = React.memo(() => {
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleSearch = useCallback(
        debounce(() => {
            const textVal = inputRef.current
            if (textVal) {
                dispatch(courseActionAsync.searchCourse(textVal.value.trim()))
            }
        }, 600),
        [],
    )
    
    return (
        <div className={style.container}>
            <input placeholder={'Search'} type="text" className={style.input} ref={inputRef} onChange={handleSearch} />
            <ImageResources.Search className={style.search} />
        </div>
    )
})