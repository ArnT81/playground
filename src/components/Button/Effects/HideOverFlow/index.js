import React from 'react';

export default function HideOverflow({ children }) {
    // has to be inline for some reason
    return <span style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', overflow: 'hidden' }}>{children}</span>
}
