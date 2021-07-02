import React from 'react';
import logo from '../../assets/logo.png';
import userPhoto from '../../assets/user.jpg';


const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} className="navbar-logo" alt=""/>

            {/* <Searchbar /> */}

            <div className="user-nav">

                {/* First icon box */}
                <div className="user-nav-iconbox">
                    <i className="user-nav-icon icon-bookmark"></i>
                    <span className="user-nav-notification">3</span>
                </div>

                {/* Second icon box */}
                <div className="user-nav-iconbox">
                    <i className="user-nav-icon icon-chat"></i>
                    <span className="user-nav-notification">7</span>
                </div>

                {/* User info */}
                <div className="user-nav-info">
                    <img src={userPhoto} alt="" className="user-nav-photo"/>
                    <span className="user-nav-name">Jonas</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
