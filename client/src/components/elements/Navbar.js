import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
        
        <img src="" className="navbar-logo" loading="lazy"></img>
        <a className="navbar-brand" href="#">Basic Style</a>

        <div className="navbar-nav">
            <ul className="nav-list">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Elements</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Styles</a>
                </li>

            </ul>
            <form>
                <input type="search" placeholder="Search" class="input" />
                <button className="btn btn-outline-pink ml-4" type="submit">Search</button>
            </form>
        </div>
    </nav>
    )
}

export default Navbar;
