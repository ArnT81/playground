import React, { useState, useRef } from 'react';
//  COMPONENTS
import Button from '../Button';
//  STYLES
import styles from './input.module.css';


//  todo flytta ut logiken för submit till container, bakgrundsfärg inherit på floatingLabel även när den är i fokus  
export default function Input({placeholder}) {
    const inputRef = useRef();
    const [inpuValue, setInputValue] = useState();

    function handleChange(e) {
        setInputValue({ ...inpuValue, [e.target.name]: e.target.value })
    }

    function submit() {
        console.log(inputRef.current.placeholder);
        console.log(inpuValue);
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

            <Button
                title='press'
                type='filled'
                functionality={submit}
            />

        </div >


    )
}