import React, { useState } from 'react';
//  STYLES
import styles from './input.module.css';


export default function Input({ inputValue, handleInput, children, placeholder, background, color }) {
    const [styling, setStyling] = useState(styles.floatingLabel)

    function handleChange(e) {
        handleInput(e)
    }

    function focused() {
        setStyling(`${styles.floatingLabel} ${styles.labelMoved}`)
    }

    function blurred() {
        if (inputValue?.length >= 1) {
            return
        } else {
            setStyling(styles.floatingLabel)
        }
    }

    return (
        <div className={styles.input}>
            <input
                name='input'
                onChange={handleChange}
                type='text'
                onFocus={focused}
                onBlur={blurred}
            />
            <span className={styling} style={{ background, color }}>
                <p>{placeholder}</p>
            </span>
            {children}
        </div >
    )
}

Input.defaultProps = {
    placeholder: 'props.placeholder',
    background: 'white',
    color: 'black'
}