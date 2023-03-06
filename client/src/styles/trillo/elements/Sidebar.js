import React from 'react'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="side-nav">

                {/* First list item */}
                <li className="side-nav-item side-nav-item-active">
                    <a href="#" className="side-nav-link">
                        <i className="side-nav-icon icon-home"></i>
                        <span>Hotel</span>
                    </a>
                </li>

                {/* Second list item */}
                <li className="side-nav-item">
                    <a href="#" className="side-nav-link">
                        <i className="side-nav-icon icon-aircraft-take-off"></i>
                        <span>Flight</span>
                    </a>
                </li>

                {/* Third list item */}
                <li className="side-nav-item">
                    <a href="#" className="side-nav-link">
                        <i className="side-nav-icon icon-key"></i>
                        <span>Car rental</span>
                    </a>
                </li>

                {/* Fourth list item */}
                <li className="side-nav-item">
                    <a href="#" className="side-nav-link">
                        <i className="side-nav-icon icon-map"></i>
                        <span>Tours</span>
                    </a>
                </li>
            </ul>

            <div className="sidebar-legal">
                &copy; 2021 by Trillo. All rights reserved.
            </div>
        </div>
    )
}

export default Sidebar;
