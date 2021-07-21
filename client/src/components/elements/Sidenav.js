import React from 'react';

const Sidenav = () => {

    const openSidenav = () => {
        document.getElementById('sidenav').classList.add('open')
    }
    
    const closeSidenav = () => {
        document.getElementById('sidenav').classList.remove('open');
    }

    const activeTab = (e) => {
        e.preventDefault();

        if(e.target.classList.contains('sidenav-link')){
            const tabs = document.getElementsByClassName('sidenav-link');
            let clickedTab;
    
            // Check for clicks on span and i
            if (e.target.tagName === 'I') {
                clickedTab = e.target.parentElement;
            } else {
                clickedTab = e.target
            }
    
            // Deactivate all tabs that aren't the target
            for (let i = 0; i < tabs.length; i++) {
    
                if (tabs[i] !== clickedTab) {
                    tabs[i].classList.remove('active');
                } else {
                    tabs[i].classList.add('active');
                }
            }
        }
    }

    return (
        <div className="mb-10">
            <header>
                <button className="sidenav-btn" onClick={openSidenav}><i class="fas fa-bars"></i></button>
            </header>

            <nav className="sidenav" id="sidenav" onClick={activeTab}>
                <div className="sidenav-links" onClick={activeTab}>
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
