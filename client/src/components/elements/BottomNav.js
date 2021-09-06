import React, { useState } from 'react';

/* eslint-disable */
const Bottomnav = ({ navLinks }) => {

    const [active, setActive] = useState(0);

    const activateTab = (e, i) => {
        e.preventDefault();
        setActive(i);
    }

    return (
        <nav className="bottom-nav">

            {
                navLinks.map((link, i) => (
                    <a key={i} href="" className={`bottom-nav-link ${active === i ? 'active' : ''}`} onClick={(e) => activateTab(e, i)}>
                        <i className={`fas ${link.icon}`}></i>
                        <span className="bottom-nav-text">{ link.text }</span>
                    </a>
                ))
            }

        </nav>
    )
}

export default Bottomnav;


