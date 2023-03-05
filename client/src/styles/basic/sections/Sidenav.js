/* eslint-disable */
import React, { useState } from 'react'
import classNames from 'classnames'

/* Props
=========================================== */
// links: [name: String, icon: String]

const Sidenav = ({ links, className }) => {
    const [sidenav, setSidenav] = useState(false);
    const [active, setActive] = useState(0);

    const getClasses = index => classNames('sidenav-link', {
      [className]: className, 
      'active': active === index
    });

    const openSidenav = () => {
        setSidenav(true);
        document.querySelector('body').classList.add('no-scroll');
    }

    const closeSidenav = () => {
        setSidenav(false)
        document.querySelector('body').classList.remove('no-scroll');
    }

    const activateTab = (e) => {
        e.preventDefault();
        setActive(Number(e.target.id));
    }

    return (
        <section id="sidenav" className="mb-10">
            <header>
                <button className="sidenav-btn" onClick={openSidenav}><i className="fas fa-bars"></i></button>
            </header>

            <nav className={`sidenav ${sidenav ? 'open' : ''}`} >
                <div className="sidenav-menu">
                    {
                        links.map((link, i) => (
                            <a key={i} href="" id={i} className={getClasses(i)} onClick={activateTab}>
                                <i className={`fas ${link.icon}`}></i>
                                { link.name }
                            </a>
                        ))
                    }
                </div>
                <div className="sidenav-overlay" onClick={closeSidenav}></div>
            </nav>
        </section>
    )
}

export default Sidenav;
