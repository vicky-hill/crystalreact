import React from 'react';
import Navbar from '../elements/Navbar';
import Sidebar from '../elements/Sidebar';
import Main from '../elements/Main';


const Home = () => {
    return (
        <>
            <div className="body">
                <div className="container">
                    <Navbar />

                    <div className="content">
                        <Sidebar />
                        <Main />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
