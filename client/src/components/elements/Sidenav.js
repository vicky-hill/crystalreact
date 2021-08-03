/* eslint-disable */
import React, { useState } from 'react';

/* Props
=========================================== */
// links

const Sidenav = ({ links }) => {
    const [sidenav, setSidenav] = useState(false);
    const [active, setActive] = useState(0);

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
                <div className="sidenav-links">
                    {
                        links.map((link, i) => (
                            <a key={i} href="" id={i} className={`sidenav-link ${active === i ? 'active' : ''}`} onClick={activateTab}>
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
