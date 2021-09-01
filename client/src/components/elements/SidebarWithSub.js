/* eslint-disable */ 'use strict';
import React from 'react';

const SidebarWithSub = () => {

    const showMenu = () => {
        const navbar = document.getElementById('sidebar-submenu');
        const body = document.querySelector('body');

        navbar.classList.toggle('expand');
        body.classList.toggle('add-padding');
    }

    const showSubmenu = (e) => {
        e.preventDefault();

        const target = e.target.parentElement.nextElementSibling;
        const chevron = e.target;

        console.log(chevron)
        target.classList.toggle('sidebar-submenu__show-collapse');
        chevron.classList.toggle('sidebar-submenu__rotate')
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
                        <a href="" className="sidebar-submenu__link sidebar-submenu-active">
                            <ion-icon name="home-outline"></ion-icon>
                            <span className="sidebar-submenu__name">Dashboard</span>
                        </a>
                        <a href="" className="sidebar-submenu__link sidebar-submenu-collapse">
                            <ion-icon name="folder-outline"></ion-icon>
                            <span className="sidebar-submenu__name">Projects</span>
                            <span className="sidebar-submenu__chevron">
                                <ion-icon name="chevron-down-outline" onClick={(e) => showSubmenu(e)} />
                            </span>

                            <ul className="sidebar-submenu__collapse--menu sidebar-submenu_collapse--sublink">
                                <a href="" className="sidebar-submenu_collapse--sublink">Data</a>
                                <a href="" className="sidebar-submenu_collapse--sublink">Group</a>
                                <a href="" className="sidebar-submenu_collapse--sublink">Members</a>
                            </ul>
                        </a>
                        <a href="" className="sidebar-submenu__link">
                            <ion-icon name="chatbubbles-outline"></ion-icon>
                            <span className="sidebar-submenu__name">Messenger</span>
                        </a>
                        <a href="" className="sidebar-submenu__link">
                            <ion-icon name="pie-chart-outline"></ion-icon>
                            <span className="sidebar-submenu__name">Analytics</span>
                        </a>
                        <a href="" className="sidebar-submenu__link">
                            <ion-icon name="people-outline"></ion-icon>
                            <span className="sidebar-submenu__name">Team</span>
                        </a>
                        <a href="" className="sidebar-submenu__link">
                            <ion-icon name="settings-outline"></ion-icon>
                            <span className="sidebar-submenu__name">Settings</span>
                        </a>
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
