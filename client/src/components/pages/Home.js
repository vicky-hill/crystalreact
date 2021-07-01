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
import Form from '../elements/Form';
import Navigation from '../elements/Navigation';
import Modal from '../elements/Modal';


const Home = () => {

    function toggleModal() {
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modal-content');
        modal.classList.toggle('show');
        modalContent.classList.toggle('show');
    } 

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
                <Form />
                <Navigation />
                <Modal />
                <button className="btn btn-purple" onClick={toggleModal}>Open the model</button>
            </div>

        </>
    )
}

export default Home;
