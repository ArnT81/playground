import React from 'react';
import styles from './button.module.css'


/* 
*   Types: text / outline / filled
*   Buttontext: title / props.children
*   icon: may be added as props
*   iconRight: may be added to render the icon to the right of the text
*   color, padding & iconsize should not be altered in props if you want consistency throughout the app
*/
//todo padding for the case both text & icon are added as children or only icon is in button
export default function Button({ type, title, children, color, padding, icon, iconSize, iconRight }) {
    let location, margin, styling;

    console.log(children);
    //  Determin wheter icon (if provided as prop) should render on left or right side of text 
    function TextAndIcon() {
        if (iconRight) {
            location = 'row-reverse';
            margin = '0 0 0 10px';
        } if (!iconRight) {
            location = 'row';
            margin = '0 10px 0 0';
        } if(!title || !icon) {
            margin = 0
        }

        // icon and text sent in as props
        if (!children) {
            return (
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: location }}>
                    {icon && <img src={icon} style={{ width: iconSize, margin, fill: color }} />}
                    {children || title}
                </div>
            )
        }
        // only one child
        if (!children.length) {
            return children
        }
        // more than one child



    }

    //  Determin Buttontype to render
    switch (type) {
        case 'text':
            styling = { color, padding };
            break;
        case 'outlined':
            styling = { color, padding, border: `3px solid ${color}` };
            break;
        case 'filled':
            styling = { color: 'white', padding, background: color };
            break;
    }

    return (
        <div
            role="button"
            className={styles.button}
            style={styling}
        >
            <TextAndIcon />
        </div>
    )
}

Button.defaultProps = {
    type: 'text',
    color: '#339999',
    padding: '10px',
    iconSize: '30px'
}