import React, { useEffect } from 'react';
import styles from './shadoweffect.module.css';


export default function ShadowEffect(props) {

    useEffect(() => {
        setTimeout(() => { props.renderMe(false) }, 30);
        return () => setTimeout(() => { props.renderMe(false) }, 30);
    })

    var well = {
        boxShadow: `
        0 0 2px 2px white,
        0 0 20px 20px ${props.color}50
        `
    }

    return <div className={styles.shadoweffect} style={ well } />
}


