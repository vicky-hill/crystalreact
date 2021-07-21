import React from 'react';

const Sidenav = () => {

    const openSidenav = () => {
        document.getElementById('sidenav').classList.add('open')
    }
    
    const closeSidenav = () => {
        document.getElementById('sidenav').classList.remove('open');
    }

    return (
        <div className="mb-10">
            <header>
                <button className="sidenav-btn" onClick={openSidenav}><i class="fas fa-bars"></i></button>
            </header>

            <nav className="sidenav" id="sidenav">
                <div className="sidenav-links">
                    <a href="" className="sidenav-link">
                        <i class="fas fa-th-large"></i>
                        Dashboard
                    </a>
                    <a href="" className="sidenav-link">
                        <i class="fas fa-folder"></i>
                        Projects
                    </a>
                    <a href="" className="sidenav-link active">
                        <i class="fas fa-lock"></i>
                        Security
                    </a>
                    <a href="" className="sidenav-link">
                        <i class="fas fa-user-alt"></i>
                        Profile
                    </a>
                </div>
                <div className="sidenav-overlay" onClick={closeSidenav}>

                </div>
            </nav>
        </div>
    )
}

export default Sidenav;
