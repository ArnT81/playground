import React, { useEffect, useRef, useState } from 'react';
//  COMPONENTS
import RippleEffect from './Effects/RippleEffect';
import WaveEffect from './Effects/WaveEffect';
import ShadowEffect from './Effects/ShadowEffect';
//  STYLES
import styles from './button.module.css';


/** 
*   !important!! 
*  props.children needs to be contained within a fragment or tag or every letter on eventual string will count as a child  and the component will try to map it (all margins for paragraph and headers removed)   
*
**  Possible props
*   Buttonclick: functionality props
*   Types: text / outline / filled
*   Buttontext: title / props.children
*   icon: may be added as props or children
*   iconSize: number or string
*   reverse: reverse the order of buttons content
*   color, padding & iconsize should not be altered in props if you want consistency throughout the app
*
**  Effects
*   ripple, wave, shadow
*/

export default function Button({
    functionality,
    type,
    title,
    children,
    color,
    padding,
    icon,
    iconSize,
    reverse,
    ripple,
    wave,
    shadow
}) {
    const [button, setButton] = useState(null)
    const [renderEffect, setRenderEffect] = useState(true)
    const [x, setX] = useState(null)
    const [y, setY] = useState(null)
    let location, margin, styling;

    useEffect(() => {
        setButton(document.getElementsByName('button'))
        return () => setButton(document.getElementsByName('button'))
    }, []);

    function handleClick(e) {
        setRenderEffect(true);
        setX(e.clientX - button[0].getBoundingClientRect().x);
        setY(e.clientY - button[0].getBoundingClientRect().y);
        functionality();
    }

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
        // only one child from props
        if (!children.length) {
            return children
        }
        // more than one child
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
            name="button"
            onClick={handleClick}
            role="button"
            className={styles.button}
            style={styling}
        >
            <TextAndIcon />
            {renderEffect && ripple && x && y && <RippleEffect x={x} y={y} renderMe={setRenderEffect} />}
            {renderEffect && x && wave && <WaveEffect renderMe={setRenderEffect} />}
            {renderEffect && x && shadow && <ShadowEffect renderMe={setRenderEffect} color={color} />}
        </div>
    )
}

Button.defaultProps = {
    type: 'text',
    color: '#339999',
    padding: '10px',
    iconSize: '30px'
}