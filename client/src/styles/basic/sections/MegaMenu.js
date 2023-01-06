/* eslint-disable */
import React, { useState } from 'react'
import shopping1 from '../../../assets/shopping-1.png';
import shopping2 from '../../../assets/shopping-2.png';
import shopping3 from '../../../assets/shopping-3.png';
import shopping4 from '../../../assets/shopping-4.png';
import shopping5 from '../../../assets/shopping-5.png';

const MegaMenu = () => {

    const [menu, setMenu] = useState(false);
    const [menuTitle, setMenuTitle] = useState('');

    // Toggle mobile nav
    const toggleMobileNav = () => {
        setMenu(!menu);
    }

    // Close mobile nav
    const closeMobileNav = () => {
        setMenu(false);
        hideSubmenu();
    }

    // Show submenu
    const showSubMenu = (e) => {
        e.preventDefault();

        const selectedMenuTitle = e.target.closest("a").textContent;
        setMenuTitle(selectedMenuTitle);

        const submenu = e.target.closest(".menu-item-has-children").firstElementChild.nextElementSibling;
        submenu.classList.add("activeSubmenu");
        submenu.style.animation = "slideLeft 0.5s ease forwards";
    }

    // Hide submenu
    const hideSubmenu = () => {
        const submenu = document.querySelector(".activeSubmenu");

        if(submenu) {
            submenu.style.animation = "slideRight 0.5s ease forwards";
            setTimeout(() => {
                submenu.classList.remove("activeSubmenu");
            }, 300)
    
            setMenuTitle('');
        }
    }


    return (
        <header className="megamenu">
            <div className="megamenu-container">

                {/* Section Left: Logo */}
                <div className="megamenu-section--left">
                    <div className="megamenu-logo">
                        <a href="#">Crystal</a>
                    </div>
                </div>

                {/* Section Center: Menu */}
                <div className="megamenu-section--center">
                    <div className={`megamenu-overlay ${menu ? 'active' : ''}`} onClick={closeMobileNav}></div>

                    <nav className={`megamenu-nav ${menu ? 'active' : ''}`}>

                        {/* Mobile Menu Controls */}
                        <div className={`mobile-megamenu ${menu ? 'active' : ''}`}>
                            <div className="go-back" onClick={hideSubmenu}><i className="fas fa-angle-left"></i></div>
                            <div className="menu-title">{menuTitle}</div>
                            <div className="menu-close" onClick={closeMobileNav}>&times;</div>
                        </div>

                        <ul className="menu-main">
                            <li>
                                <a href="">Home</a>
                            </li>

                            {/* New */}
                            <li className="menu-item-has-children" onClick={showSubMenu}>
                                <a href="">New <i className="fas fa-angle-down"></i></a>
                                <div className="sub-menu mega-menu mega-menu-column-4">
                                    <div className="megamenu-item text-center">
                                        <a href="">
                                            <img src={shopping2} alt="" />
                                            <h4 className="title">Product 1</h4>
                                        </a>
                                    </div>
                                    <div className="megamenu-item text-center">
                                        <a href="">
                                            <img src={shopping3} alt="" />
                                            <h4 className="title">Product 2</h4>
                                        </a>
                                    </div>
                                    <div className="megamenu-item text-center">
                                        <a href="">
                                            <img src={shopping4} alt="" />
                                            <h4 className="title">Product 3</h4>
                                        </a>
                                    </div>
                                    <div className="megamenu-item text-center">
                                        <a href="">
                                            <img src={shopping5} alt="" />
                                            <h4 className="title">Product 4</h4>
                                        </a>
                                    </div>
                                </div>
                            </li>

                            {/* Shop */}
                            <li className="menu-item-has-children" onClick={showSubMenu}>
                                <a href=""> Shop <i className="fas fa-angle-down"></i></a>
                                <div className="sub-menu mega-menu mega-menu-column-4">
                                    <div className="megamenu-item">
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
                                    <div className="megamenu-item">
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
                                    <div className="megamenu-item">
                                        <h4 className="title">Home, Kitchen</h4>
                                        <ul>
                                            <li><a href="#">Dining Tables</a></li>
                                            <li><a href="#">Bar Stools</a></li>
                                            <li><a href="#">Appliances</a></li>
                                            <li><a href="#">Storage</a></li>
                                        </ul>
                                    </div>
                                    <div className="megamenu-item">
                                        <img src={shopping1} alt="" />
                                    </div>
                                </div>
                            </li>

                            {/* Blog */}
                            <li className="menu-item-has-children" onClick={showSubMenu}>
                                <a href="">Blog <i className="fas fa-angle-down"></i></a>
                                <div className="sub-menu single-column-menu">
                                    <ul>
                                        <li><a href="">Standard Layout</a></li>
                                        <li><a href="">Grid Layout</a></li>
                                        <li><a href="">Single Layout</a></li>
                                    </ul>
                                </div>
                            </li>

                            {/* Pages */}
                            <li className="menu-item-has-children" onClick={showSubMenu}>
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

                            {/* Contact  */}
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Icons  */}
                <div className="megamenu-section--right">
                    <a href=""><i className="fas fa-search"></i></a>
                    <a href=""><i className="fas fa-heart"></i></a>
                    <a href=""><i className="fas fa-shopping-cart"></i></a>

                    {/* Mobile menu trigger */}
                    <div className="megamenu-mobile-toggle" onClick={toggleMobileNav}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}



export default MegaMenu


