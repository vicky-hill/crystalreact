import React from 'react';
import logo from '../../../assets/logo-white.png';

const Header = () => {
    return (
        <div className="natours">
            <header class="header">
                <div class="header-logo">
                    <img src={logo} alt="Logo" class="logo" />
                </div>

                <div class="text-box">
                    <h1 class="heading-primary">
                        <span class="heading-primary-main">Memorize</span>
                        <span class="heading-primary-sub">the pineapple way</span>
                    </h1>

                    <a href="" class="btn btn-white btn-animated">Get the Linguar app</a>
                </div>
            </header>
        </div>



    )
}

export default Header;
