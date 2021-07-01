import React from 'react';
import BurgerNav from '../elements/BurgerNav';
import Header from '../elements/Header';
import Heading from '../elements/Heading';
import Photos from '../elements/Photos';
import Card from '../elements/Card';
import Section from '../elements/Section';


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
            <Section />
        </>
    )
}

export default Home;
