import React from 'react'

function BurgerNav() {
    return (
        <div className="burger-navigation">
            <input type="checkbox" id="burger-navigation-toggle" className="burger-navigation-checkbox"/>
            <label htmlFor="burger-navigation-toggle" className="burger-navigation-btn">
                <span className="burger-navigation-icon"></span>
            </label>
            <div className="burger-navigation-background">
                &nbsp;
            </div>

            <nav className="burger-navigation-nav">
                <ul className="burger-navigation-list">
                    <li className="burger-navigation-item"><a href="" className="burger-navigation-link">Home</a></li>
                    <li className="burger-navigation-item"><a href="" className="burger-navigation-link">Products</a></li>
                    <li className="burger-navigation-item"><a href="" className="burger-navigation-link">About</a></li>
                    <li className="burger-navigation-item"><a href="" className="burger-navigation-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default BurgerNav;
