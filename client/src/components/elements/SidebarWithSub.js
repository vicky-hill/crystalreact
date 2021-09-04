/* eslint-disable */ 'use strict';
import React, { useState } from 'react';

const SidebarWithSub = ({ links }) => {

    const [active, setActive] = useState(0);

    const showMenu = () => {
        const navbar = document.getElementById('sidebar-submenu');
        const sidebar = document.querySelector('.sidebar');
        const body = document.querySelector('body');

        navbar.classList.toggle('expand');
        sidebar.classList.toggle('add-padding');
        body.classList.toggle('add-padding');
    }

    const showSubmenu = (e) => {
        e.preventDefault();

        const target = e.target.parentElement.nextElementSibling;
        const chevron = e.target;

        target.classList.toggle('sidebar-submenu__show-collapse');
        chevron.classList.toggle('sidebar-submenu__rotate')
    }

    const getStyles = (link, i) => {
        let classes = 'sidebar-submenu__link';
        
        if(link.sublinks) {
            classes += ' sidebar-submenu-collapse';
        } 

        if(active === i) {
            classes += ' sidebar-submenu-active'
        }
       
        return classes;
    }


    return (
        <div className="sidebar-submenu" id="sidebar-submenu">
            <nav className="sidebar-submenu-nav">

                {/* Nav toggle */}
                <div className="sidebar-submenu__brand">
                    <ion-icon name="menu-outline" id="sidebar-submenu__toggle" onClick={showMenu}></ion-icon>
                    <a href="" className="sidebar-submenu__logo">Basic Style</a>
                </div>

                <div className="sidebar-submenu__content">
                    
                    {/* Nav list */}
                    <div className="sidebar-submenu__list">
                        {
                            links.map((link, i) => (
                                <a 
                                    key={i} 
                                    href="" 
                                    className={getStyles(link, i)}
                                    onClick={(e) => {e.preventDefault(); setActive(i)}}
                                >
                                    <ion-icon name={link.icon}></ion-icon>
                                    <span className="sidebar-submenu__name">{ link.title }</span>
                                    {
                                        link.sublinks && (
                                            <>
                                                <span className="sidebar-submenu__chevron">
                                                    <ion-icon name="chevron-down-outline" onClick={(e) => showSubmenu(e)} />
                                                </span>

                                                <ul className="sidebar-submenu__collapse--menu sidebar-submenu_collapse--sublink">
                                                    {
                                                        link.sublinks.map((sublink, i) => (
                                                            <button key={i} className="sidebar-submenu_collapse--sublink">{sublink}</button>
                                                        ))
                                                    }
                                                </ul>
                                            </>
                                        )
                                    }
                                </a>
                            ))
                        }
                    </div>


                    <a href="" className="sidebar-submenu__link">
                        <ion-icon name="log-out-outline"></ion-icon>
                        <span className="sidebar-submenu__name">Log Out</span>
                    </a>
                </div>
            </nav>

        </div>
    )
}

export default SidebarWithSub;
