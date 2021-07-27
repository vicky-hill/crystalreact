/* eslint-disable */
import React from 'react';

const Navbar = () => {

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
        <nav className="nav-container">
            <img src="" className="nav-logo" loading="lazy"></img>
            <a className="nav-brand" href="#">Basic Style</a>

            <input type="checkbox" className="nav-toggle" name="" id="nav-toggle" onClick={mobileMenu} />
            <input type="checkbox" className="search-toggle" name="" id="search-toggle" onClick={mobileMenu} />
            
            <div className="navbar">
                <ul>
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Elements</a></li>
                    <li><a href="#">Styles</a></li>
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
