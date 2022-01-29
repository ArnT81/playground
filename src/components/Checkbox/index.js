import React, { useState } from 'react';
import styles from './checkbox.module.css'


export default function Checkbox() {
    const [checked, setChecked] = useState(false)

    return (
        <div style={{ margin: 10 }}>
            <label
                htmlFor="checkbox"
                className={styles.switch}
            >
                <input
                    type='checkbox'
                    id="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
                <span className={styles.slider} />
            </label>
            <p>{checked.toString()}</p>
        </div>
    )
}
