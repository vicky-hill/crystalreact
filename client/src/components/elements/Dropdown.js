/* eslint-disable */
import React from 'react';

const Dropdown = () => {

    function toggleDropdown(e) {
        document.querySelector(`[data-dropdown=${e.target.id}]`).classList.toggle('show');
    }

    return (
        <section id="dropdown">
            <div className="dropdown">
                <button className="btn btn-primary btn-dropdown" id="dropdown1" onClick={toggleDropdown}>
                    Dropdown button
                </button>
                <ul className="dropdown-menu" data-dropdown="dropdown1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Dropdown;
