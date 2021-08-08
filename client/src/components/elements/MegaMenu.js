/* eslint-disable */
import React from 'react'
import shopping1 from '../../assets/shopping-1.png';
import shopping2 from '../../assets/shopping-2.png';
import shopping3 from '../../assets/shopping-3.png';
import shopping4 from '../../assets/shopping-4.png';
import shopping5 from '../../assets/shopping-5.png';

const MegaMenu = () => {

    let submenu;

    const toggleMobileNav = () => {
        const menu = document.querySelector(".menu");
        const overlay = document.querySelector(".mobile-menu-overlay");
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
    }

    const closeMobileNav = () => {
        const menu = document.querySelector(".menu");
        const overlay = document.querySelector(".mobile-menu-overlay");
        menu.classList.remove("active");
        overlay.classList.remove("active");
    }

    const showSubMenu = (e) => {
        e.preventDefault();

        const menu = document.querySelector(".menu");

        if (!menu.classList.contains("active")) {
            return
        }

        if (e.target.closest(".menu-item-has-children")) {
            const hasChildren = e.target.closest(".menu-item-has-children");
            submenu = hasChildren.querySelector(".sub-menu");
            submenu.classList.add("active");
            submenu.style.animation = "slideLeft 0.5s ease forwards";

            const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;

            menu.querySelector(".current-menu-title").innerHTML = menuTitle;
            menu.querySelector(".mobile-megamenu").classList.add('active');
        }
    }

    const hideSubmenu = (e) => {

        const menu = document.querySelector(".menu");

        submenu.style.animation = "slideRight 0.5s ease forwards";
        setTimeout(() => {
            submenu.classList.remove("active");
        }, 300)


        menu.querySelector(".current-menu-title").innerHTML = "";
        menu.querySelector(".mobile-megamenu").classList.remove('active');
    }

    window.onresize = function () {
        if (this.innerWidth > 1400) {
            if (menu.classList.contains("active")) {
                toggleMobileNav();
            }
        }
    }

    return (
        <header className="megamenu">
                <div className="row--megamenu">

                    {/* Logo */}
                    <div className="megamenu-item item-left">
                        <div className="megamenu-logo">
                            <a href="#">Basic Style</a>
                        </div>
                    </div>

                    {/* Menu */}
                    <div className="megamenu-item item-center">
                        <div className="mobile-menu-overlay" onClick={closeMobileNav}></div>
                        <nav className="menu">
                            <div className="mobile-megamenu">
                                <div className="go-back" onClick={hideSubmenu}><i className="fas fa-angle-left"></i></div>
                                <div className="current-menu-title"></div>
                                <div className="mobile-menu-close" onClick={closeMobileNav}>&times;</div>
                            </div>
                            <ul className="menu-main" onClick={showSubMenu}>
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="">New <i className="fas fa-angle-down"></i></a>
                                    <div className="sub-menu mega-menu mega-menu-column-4">
                                        <div className="mega-menu-item text-center">
                                            <a href="">
                                                <img src={shopping2} alt="" />
                                                <h4 className="title">Product 1</h4>
                                            </a>
                                        </div>
                                        <div className="mega-menu-item text-center">
                                            <a href="">
                                                <img src={shopping3} alt="" />
                                                <h4 className="title">Product 2</h4>
                                            </a>
                                        </div>
                                        <div className="mega-menu-item text-center">
                                            <a href="">
                                                <img src={shopping4} alt="" />
                                                <h4 className="title">Product 3</h4>
                                            </a>
                                        </div>
                                        <div className="mega-menu-item text-center">
                                            <a href="">
                                                <img src={shopping5} alt="" />
                                                <h4 className="title">Product 4</h4>
                                            </a>
                                        </div>
                                    </div>
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


