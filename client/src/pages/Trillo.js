import React from 'react';
import Navbar from '../styles/trillo/elements/Navbar';
import Sidebar from '../styles/trillo/elements/Sidebar';
import Main from '../styles/trillo/elements/Main';

const Trillo = () => {
    return (
        <div id="style--trillo">
            <div className="body--trillo">
                <div className="container--trillo">
                    <Navbar />

                    <div className="content--trillo">
                        <Sidebar />
                        <Main />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trillo;
