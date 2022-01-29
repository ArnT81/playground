import React from 'react';
import styles from './button.module.css'


/* 
*   Types: text / outline / filled
*   Buttontext: title / props.children
*   iconSize: 30px default
*   iconRight: false default
*/

export default function Button({ type, title, children, color, padding, icon, iconSize, iconRight }) {

    switch (type) {
        case 'text':
            return (
                !iconRight ?
                    <div
                        role="button"
                        style={{ color, padding }}
                        className={styles.button}
                    >
                        {icon && <img src={icon} style={{ width: iconSize, marginRight: 10, fill: color }} />}
                        {title || children || 'title or children'}
                    </div>
                    :
                    <div
                        role="button"
                        style={{ color, padding }}
                        className={styles.button}
                    >
                        {title || children || 'title or children'}
                        {icon && <img src={icon} style={{ width: iconSize, marginLeft: 10, fill: color }} />}
                    </div>
            )
        case 'outlined':
            return (
                !iconRight ?
                    <div
                        role="button"
                        className={styles.button}
                        style={{ color, padding, border: `3px solid ${color}` }}
                    >
                        {icon && <img src={icon} style={{ width: iconSize, marginRight: 10, fill: color }} />}
                        {title || children || 'title or children'}
                    </div>
                    :
                    <div
                        role="button"
                        className={styles.button}
                        style={{ color, padding, border: `3px solid ${color}` }}
                    >
                        {title || children || 'title or children'}
                        {icon && <img src={icon} style={{ width: iconSize, marginLeft: 10, fill: color }} />}
                    </div>
            )
        case 'filled':
            return (
                !iconRight ?
                    <div
                        role="button"
                        className={styles.button}
                        style={{ color: 'white', padding, background: color }}
                    >
                        {icon && <img src={icon} style={{ width: iconSize, marginRight: 10 }} />}
                        {title || children || 'title or children'}
                    </div>
                    :
                    <div
                        role="button"
                        className={styles.button}
                        style={{ color: 'white', padding, background: color }}
                    >
                        {title || children || 'title or children'}
                        {icon && <img src={icon} style={{ width: iconSize, marginLeft: 10 }} />}
                    </div>
            )
    }
}

Button.defaultProps = {
    type: 'text',
    color: '#339999',
    padding: '10px',
    iconSize: '30px'
}