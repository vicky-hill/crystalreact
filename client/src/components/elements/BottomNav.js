import React from 'react';

const Bottomnav = () => {

    const activeTab = (e) => {
        e.preventDefault();

        const tabs = document.getElementsByClassName('bottom-nav-link');
        let clickedTab;

        // Check for clicks on span and i
        if (e.target.tagName === 'SPAN' || e.target.tagName === 'I') {
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

    return (
        <nav className="bottom-nav" onClick={activeTab}>
            <a href="" className="bottom-nav-link">
                <i className="fas fa-th-large"></i>
                <span className="bottom-nav-text">Dashboard</span>
            </a>
            <a href="" className="bottom-nav-link">
                <i className="fas fa-folder"></i>
                <span className="bottom-nav-text">Projects</span>
            </a>
            <a href="" className="bottom-nav-link active">
                <i className="fas fa-lock"></i>
                <span className="bottom-nav-text">Security</span>
            </a>
            <a href="" className="bottom-nav-link">
                <i className="fas fa-user-alt"></i>
                <span className="bottom-nav-text">Profile</span>
            </a>
        </nav>
    )
}

export default Bottomnav;


