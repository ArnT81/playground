import React, { useEffect } from 'react';
import HideOverflow from '../HideOverFlow';
//  STYLES
import styles from './wave.module.css'


function Wave({ renderMe }) {
    useEffect(() => {
        setTimeout(() => { renderMe(false) }, 700)
        return () => setTimeout(() => { renderMe(false) }, 700)
    })

    return (
        <div>
            <HideOverflow>
                <span className={styles.vawe} />
            </HideOverflow>
        </div>
    );
}

export default Wave;
