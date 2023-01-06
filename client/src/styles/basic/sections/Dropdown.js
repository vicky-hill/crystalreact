/* eslint-disable */
import React, { useState } from 'react';

const Dropdown = () => {

    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    const showMenu = () => {
        const menu_wrapper = document.querySelector(".dropdown-wrapper");
        menu_wrapper.classList.toggle("show");
    }

    const openSettings = (e) => {
        e.preventDefault();

        const menu_bar = document.querySelector(".dropdown-menu-bar");
        const setting_drop = document.querySelector(".setting-drop");

        menu_bar.style.marginLeft = "-300px";

        setTimeout(() => {
            setting_drop.style.display = "block";
        }, 100)
        
    }

    const openHelp = (e) => {
        e.preventDefault();

        const menu_bar = document.querySelector(".dropdown-menu-bar");
        const help_drop = document.querySelector(".help-drop");

        menu_bar.style.marginLeft = "-300px";
        setTimeout(() => {
            help_drop.style.display = "block";
        }, 100)
    }

    const goBackSettings = () => {
        const menu_bar = document.querySelector(".dropdown-menu-bar");
        const setting_drop = document.querySelector(".setting-drop");

        menu_bar.style.marginLeft = "0px";
        setting_drop.style.display = "none";
    }

    const goBackHelp = () => {
        const menu_bar = document.querySelector(".dropdown-menu-bar");
        const help_drop = document.querySelector(".help-drop");

        menu_bar.style.marginLeft = "0px";
        help_drop.style.display = "none";
    }

    return (
        <section id="dropdown">

            {/* Basic Dropdown */}
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

            {/* FB Dropdown */}
            <div className="dropdown-btn mt-3" onClick={showMenu}>
                Dropdown <span className="fas fa-caret-down"></span>
            </div>
            <div className="dropdown-wrapper">
                <ul className="dropdown-menu-bar">
                    <li>
                        <a href=""><div className="icon"><span className="fas fa-home"></span></div>
                            Home
                        </a>
                    </li>
                    <li className="setting-item" onClick={openSettings}>
                        <a href=""><div className="icon"><span className="fas fa-cog"></span></div>
                            Settings and Privacy <i className="fas fa-angle-right"></i>
                        </a>
                    </li>
                    <li  className="help-item" onClick={openHelp}>
                        <a href=""><div className="icon"><span className="fas fa-question-circle"></span></div>
                            Help and Support <i className="fas fa-angle-right"></i>
                        </a>
                    </li>
                    <li>
                        <a href=""><div className="icon"><span className="fas fa-user"></span></div>
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href=""><div className="icon"><span className="fas fa-comment-alt"></span></div>
                            Feedback
                        </a>
                    </li>
                </ul>

                {/* Settings & Privacy menu items */}
                <ul className="setting-drop">
                    <li className="arrow back-setting-btn"  onClick={goBackSettings}>
                        <span className="fas fa-arrow-left"></span>Settings & Privacy
                    </li>
                    <li>
                        <a href=""><div className="icon"><span className="fas fa-user"></span></div>
                            Personal info
                        </a>
                    </li>
                    <li>
                        <a href=""><div className="icon"><span className="fas fa-lock"></span></div>
                            Password 
                        </a>
                    </li>
                    <li>
                        <a href=""><div className="icon"><span className="fas fa-address-book"></span></div>
                            Acitvity log
                        </a>
                    </li>
                    <li>
                        <a href=""><div className="icon"><span className="fas fa-globe-asia"></span></div>
                            Languages
                        </a>
                    </li>
                    <li>
                        <a href=""><div className="icon"><span className="fas fa-sign-out-alt"></span></div>
                            Log out
                        </a>
                    </li>
                </ul>

                {/* Help menu items */}
                <ul className="help-drop">
                    <li className="arrow back-help-btn" onClick={goBackHelp}><span className="fas fa-arrow-left"></span>Help & Support</li>
                    <li>
                        <a href=""><div className="icon"><span className="fas fa-question-circle"></span></div>
                            Help center
                        </a>
                    </li>
                    <li>
                        <a href=""><div className="icon"><span className="fas fa-envelope"></span></div>
                            Support inbox 
                        </a>
                    </li>
                    <li>
                        <a href=""><div className="icon"><span className="fas fa-comment-alt"></span></div>
                            Send Feedback
                        </a>
                    </li>
                    <li>
                        <a href=""><div className="icon"><span className="fas fa-exclamation-circle"></span></div>
                            Report problem
                        </a>
                    </li>
                </ul>
                  
            </div>

        </section>
    )
}

export default Dropdown;
