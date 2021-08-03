/* eslint-disable */
import React, { useState } from 'react';

const Dropdown = () => {

    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    return (
        <section id="dropdown">
            <div className="dropdown">
                <button className="btn btn-primary btn-dropdown" onClick={toggleDropdown}>
                    Dropdown button
                </button>
                <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`}>
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Dropdown;
