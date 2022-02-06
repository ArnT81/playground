import React, { useState, useEffect } from 'react';
//  COMPONENTS
import HideOverflow from '../HideOverFlow';
//  STYLES
import styles from './ripple.module.css'


export default function RippleEffect({ renderMe, x, y }) {
    //  unmounts component after 200 ms (as long as the animation in ripple.module.css) so that the effect may restart
    useEffect(() => {
        setTimeout(() => { renderMe(false) }, 200)
        return () => setTimeout(() => { renderMe(false) }, 200)
    }, [])

    return (
        <HideOverflow>
            <span className={styles.ripple} style={{ left: x, top: y }}></span>
        </HideOverflow>
    )
}
