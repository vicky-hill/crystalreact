import React from 'react';
import BurgerNav from '../elements/BurgerNav';
import Header from '../elements/Header';
import Heading from '../elements/Heading';
import Photos from '../elements/Photos';
import Card from '../elements/Card';


const Home = () => {
    return (
        <>
            <BurgerNav />
            <Header />
            <div className="container">
                <Heading />
                <Photos />
                <Card />
            </div>
        </>
    )
}

export default Home;
