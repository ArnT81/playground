import React, { useEffect } from 'react';
//  STYLES
import styles from './ripple.module.css'


export default function RippleEffect(props) {
    // component unmounts after 200ms so that the animation may start over
    useEffect(() => {
        setTimeout(() => props.showRipple(false), 200)
        return () => props.showRipple(false), 200
    }, [])

    // has to be inline for some reason
    function HideOverflow({ children }) {
        return <span style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', overflow: 'hidden' }}>{children}</span>
    }

    return (
        <HideOverflow>
            <span className={styles.ripple} style={{ left: props.x, top: props.y }}>{props.child}</span>
        </HideOverflow>
    )
}
