import React, { useState, useRef } from 'react';
//  COMPONENTS
import Button from '../Button';
//  STYLES
import styles from './input.module.css';


//  todo flytta ut logiken för submit till container, bakgrundsfärg inherit på floatingLabel även när den är i fokus  
export default function Input({ children, placeholder }) {
    const inputRef = useRef();
    const [inpuValue, setInputValue] = useState();

    function handleChange(e) {
        setInputValue({ ...inpuValue, [e.target.name]: e.target.value })
    }


    return (
        <div className={styles.input}>
            <input
                name='input'
                onChange={handleChange}
                type='text'
                ref={inputRef}
            />
            <span className={styles.floatingLabel}>
                <p>{placeholder}</p>
            </span>
            {children}
        </div >
    )
}