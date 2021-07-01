import React from 'react';
import BurgerNav from '../elements/BurgerNav';
import Header from '../elements/Header';
import Heading from '../elements/Heading';
import Photos from '../elements/Photos';
import Card from '../elements/Card';
import Section from '../elements/Section';
import RotatingCard from '../elements/RotatingCard';
import Testimonial from '../elements/Testimonial';
import SolidGradient from '../elements/SolidGradient';


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

            <div className="container">
                <RotatingCard />
                <Testimonial />
                <SolidGradient />
            </div>

        </>
    )
}

export default Home;
