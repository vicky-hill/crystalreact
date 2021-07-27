import React from 'react';

const Sidenav = () => {

    const openSidenav = () => {
        document.querySelector('.sidenav').classList.add('open');
        document.querySelector('body').classList.add('no-scroll');
    }
    
    const closeSidenav = () => {
        document.querySelector('.sidenav').classList.remove('open');
        document.querySelector('body').classList.remove('no-scroll');
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
        <section id="sidenav" className="mb-10">
            <header>
                <button className="sidenav-btn" onClick={openSidenav}><i className="fas fa-bars"></i></button>
            </header>

            <nav className="sidenav" onClick={activeTab}>
                <div className="sidenav-links" onClick={activeTab}>
                    <a href="" className="sidenav-link">
                        <i className="fas fa-th-large"></i>
                        Dashboard
                    </a>
                    <a href="" className="sidenav-link">
                        <i className="fas fa-folder"></i>
                        Projects
                    </a>
                    <a href="" className="sidenav-link active">
                        <i className="fas fa-lock"></i>
                        Security
                    </a>
                    <a href="" className="sidenav-link">
                        <i className="fas fa-user-alt"></i>
                        Profile
                    </a>
                </div>
                <div className="sidenav-overlay" onClick={closeSidenav}>

                </div>
            </nav>
        </section>
    )
}

export default Sidenav;
