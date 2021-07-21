import React from 'react';

const Sidebar = () => {

    const openSidebar = () => {
        document.getElementById('sidebar').classList.add('open')
    }
    
    const closeSidebar = () => {
        document.getElementById('sidebar').classList.remove('open');
    }

    return (
        <div className="mb-10">
            <header>
                <button className="sidebar-btn" onClick={openSidebar}><i class="fas fa-bars"></i></button>
            </header>

            <nav className="sidebar" id="sidebar">
                <div className="sidebar-links">
                    <a href="" className="sidebar-link">
                        <i class="fas fa-th-large"></i>
                        Dashboard
                    </a>
                    <a href="" className="sidebar-link">
                        <i class="fas fa-folder"></i>
                        Projects
                    </a>
                    <a href="" className="sidebar-link active">
                        <i class="fas fa-lock"></i>
                        Security
                    </a>
                    <a href="" className="sidebar-link">
                        <i class="fas fa-user-alt"></i>
                        Profile
                    </a>
                </div>
                <div className="sidebar-overlay" onClick={closeSidebar}>

                </div>
            </nav>
        </div>
    )
}

export default Sidebar;
