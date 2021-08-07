import React from 'react'
import shopping1 from '../../assets/shopping-1.png';

const MegaMenu = () => {
    return (
        <header class="megamenu">
            <div className="container--megamenu">
                <div className="row--megamenu">

                    {/* Logo */}
                    <div className="megamenu-item item-left">
                        <div className="megamenu-logo">
                            <a href="#">Basic</a>
                        </div>
                    </div>

                    {/* Menu */}
                    <div className="megamenu-item item-center">
                        <nav className="menu">
                            <ul className="menu-main">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">New</a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="">Shop <i className="fas fa-angle-down"></i></a>
                                    <div className="sub-menu mega-menu mega-menu-column-4">
                                        <div className="mega-menu-item">
                                            <h4 className="title">Men's Fashion</h4>
                                            <ul>
                                                <li><a href="#">New Arrivals</a></li>
                                                <li><a href="#">Tops</a></li>
                                                <li><a href="#">Bottoms</a></li>
                                                <li><a href="#">Lounge Wear</a></li>
                                                <li><a href="#">Jackets</a></li>
                                            </ul>

                                            <h4 className="title">Beauty</h4>
                                            <ul>
                                                <li><a href="#">Skin Care</a></li>
                                                <li><a href="#">Ulta Beauty</a></li>
                                                <li><a href="#">Hair Care </a></li>
                                            </ul>
                                        </div>
                                        <div className="mega-menu-item">
                                            <h4 className="title">Women's Fashion</h4>
                                            <ul>
                                            <li><a href="#">New Arrivals</a></li>
                                                <li><a href="#">Tops</a></li>
                                                <li><a href="#">Bottoms</a></li>
                                                <li><a href="#">Lounge Wear</a></li>
                                                <li><a href="#">Jackets</a></li>
                                            </ul>

                                            <h4 className="title">Furniture</h4>
                                            <ul>
                                                <li><a href="#">Living Room</a></li>
                                                <li><a href="#">Home Office</a></li>
                                                <li><a href="#">Bedroom</a></li>
                                            </ul>
                                        </div>
                                        <div className="mega-menu-item">
                                            <h4 className="title">Home, Kitchen</h4>
                                            <ul>
                                                <li><a href="#">Dining Tables</a></li>
                                                <li><a href="#">Bar Stools</a></li>
                                                <li><a href="#">Appliances</a></li>
                                                <li><a href="#">Storage</a></li>
                                            </ul>
                                        </div>
                                        <div className="mega-menu-item">
                                            <img src={shopping1} alt="" />
                                        </div>
                                    </div>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="">Blog <i className="fas fa-angle-down"></i></a>
                                    <div className="sub-menu single-column-menu">
                                        <ul>
                                            <li><a href="">Standard Layout</a></li>
                                            <li><a href="">Grid Layout</a></li>
                                            <li><a href="">Single Layout</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="">Pages <i className="fas fa-angle-down"></i></a>
                                    <div className="sub-menu single-column-menu">
                                        <ul>
                                            <li><a href="">Login</a></li>
                                            <li><a href="">Register</a></li>
                                            <li><a href="">Faq</a></li>
                                            <li><a href="">404 Page</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Icons */}
                    <div className="megamenu-item item-right ">
                        <a href=""><i className="fas fa-search"></i></a>
                        <a href=""><i className="fas fa-heart"></i></a>
                        <a href=""><i className="fas fa-shopping-cart"></i></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MegaMenu


