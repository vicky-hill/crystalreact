/* eslint-disable */ 'use strict';
import React, { useState, useRef } from 'react';

const Context = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [display, setDisplay] = useState('none');

    const contextMenu = useRef(null);

    const showContextMenu = (e, show = true) => {
        e.preventDefault();

        show ? setDisplay('block') : setDisplay('none');

        console.log(window.pageYOffset)
        
        const updateX = e.nativeEvent.x + contextMenu.current.offsetWidth > window.innerWidth ? window.innerWidth - contextMenu.current.offsetWidth : e.nativeEvent.x + window.pageXOffset;
        const updateY = e.nativeEvent.y + contextMenu.current.offsetHeight > window.innerHeight ? window.innerHeight - contextMenu.current.offsetHeight: e.nativeEvent.y + window.pageYOffset;
        
        setX(updateX);
        setY(updateY);
    }

    window.addEventListener('click', () => {
        setDisplay('none');
    })

    return (
        <div className="mb-10">
            <div className="context-example" onContextMenu={(e) => showContextMenu(e)}>Right click here for context menu</div>
            <div className="context-menu" style={{ top: y, left: x, display}} ref={contextMenu}>
                <div className="context-menu__item">Item #1</div>
                <div className="context-menu__item">Item #2</div>
                <div className="context-menu__item">Item #3</div>
                <div className="context-menu__divider"></div>
                <div className="context-menu__item">Item #4</div>
            </div>
        </div>
    )
}

export default Context;
