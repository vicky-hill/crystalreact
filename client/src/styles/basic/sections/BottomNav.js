import React, { useState } from 'react';
import classNames from 'classnames';

/* eslint-disable */
const BottomNav = ({ navLinks, className }) => {

    const [active, setActive] = useState(0);

    const getClasses = index => classNames('bottom-nav-link', {
      [className]: className, 
      'active': active === index
    });


    const activateTab = (e, i) => {
        e.preventDefault();
        setActive(i);
    }

    return (
        <nav className="bottom-nav">

            {
                navLinks.map((link, i) => (
                    <a key={i} href="" className={getClasses(i)} onClick={(e) => activateTab(e, i)}>
                        <i className={`fas ${link.icon}`}></i>
                        <span className="bottom-nav-text">{ link.text }</span>
                    </a>
                ))
            }

        </nav>
    )
}

export default BottomNav;


