import React from 'react';
import styles from './checkbox.module.css'


export default function Checkbox({ margin, checked, handleChange }) {

    return (
        <div style={{ margin }}>
            <label
                htmlFor="checkbox"
                className={styles.switch}
            >
                <input
                    type='checkbox'
                    id="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                <span className={styles.slider} />
            </label>
            <p>{checked.toString()}</p> {/* temporary */}
        </div>
    )
}

Checkbox.defaultProps = {
    margin: 10
}