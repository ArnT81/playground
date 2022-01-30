import React from 'react';
import styles from './button.module.css'


/** 
*   !important!! 
**  Do not mix props.children with props
**  props.children needs to be contained within a fragment or tag or every letter on eventual string will count as a child and 
*   the component will try to map it (all margins for paragraph and headers removed)
*   
*
**  Possible props
*   Types: text / outline / filled
*   Buttontext: title / props.children
*   icon: may be added as props
*   reverse: may be added to render the icon to the right of the text or reverse order for props.children
*   color, padding & iconsize should not be altered in props if you want consistency throughout the app
*/

export default function Button({ type, title, children, color, padding, icon, iconSize, reverse }) {
    let location, margin, styling;

    //  Determin wheter icon (if provided as prop) should render on left or right side of text and adds margin between content
    function TextAndIcon() {
        if (reverse) {
            location = 'row-reverse';
            margin = '0 0 0 10px';
        } if (!reverse) {
            location = 'row';
            margin = '0 10px 0 0';
        }
        if (!title && !children || !icon && !children) {
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
        // more than one child (hence the need of fra)
        if (children.length) {
            return (
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: location }}>
                    {children.map((child, i) => {
                        // only margin on the first child
                        if (i == 0) {
                            return (
                                <span key={i} style={{ margin }}>{child}</span>
                            )
                        } else {
                            return <span key={i}>{child}</span>
                        }
                    })}
                </div>
            )
        }
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