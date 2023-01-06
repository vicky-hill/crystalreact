/* eslint-disable */
import React, { useState } from 'react';

const Navbar = ({ navLinks }) => {

    const [active, setActive] = useState(0);

    const mobileMenu = (e) => {
        const clicked = Array.from(e.target.classList)[0];
        const navToggle = document.querySelector('.nav-toggle');
        const searchToggle = document.querySelector('.search-toggle');

        if (clicked === 'nav-toggle') {
            searchToggle.checked = false;
        } else {
            navToggle.checked = false;
        }
    }


    return (
        <nav className="nav-container make-fit mb-10">
            <img src="" className="nav-logo" loading="lazy"></img>
            <a className="nav-brand" href="#">Crystal</a>

            <input type="checkbox" className="nav-toggle" name="" id="nav-toggle" onClick={mobileMenu} />
            <input type="checkbox" className="search-toggle" name="" id="search-toggle" onClick={mobileMenu} />

            <div className="navbar">
                <ul>

                    {
                        navLinks.map((link, i) => (
                            <li key={i} className={`${active === i ? 'active' : ''}`} onClick={() => setActive(i)}>
                                <a href="#">{link}</a>
                            </li>
                        ))
                    }

                </ul>

                <form>
                    <input type="search" placeholder="Search" className="input" />
                    <button className="btn btn-primary ml-2 mb-0 btn-input" type="submit">Search</button>
                </form>
            </div>

            <label htmlFor="nav-toggle" className="nav-toggle-label"><span></span></label>
            <label htmlFor="search-toggle" className="search-toggle-label"><span><i className="fas fa-search"></i></span></label>
        </nav>
    )
}


export default Navbar;
