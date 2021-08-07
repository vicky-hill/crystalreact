import React, { useState } from 'react';

/* eslint-disable */
const Bottomnav = ({ navLinks }) => {

    const [active, setActive] = useState(0);

    const activateTab = (e) => {
        e.preventDefault();
        setActive(Number(e.target.id));
    }

    return (
        <nav className="bottom-nav">

            {
                navLinks.map((link, i) => (
                    <a key={i} id={i} href="" className={`bottom-nav-link ${active === i ? 'active' : ''}`} onClick={activateTab}>
                        <i id={i} className={`fas ${link.icon}`}></i>
                        <span id={i} className="bottom-nav-text">{ link.text }</span>
                    </a>
                ))
            }

        </nav>
    )
}

export default Bottomnav;


