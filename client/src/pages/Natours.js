import React from 'react';
import BurgerNav from '../styles/natours/elements/BurgerNav';
import Header from '../styles/natours/elements/Header';
import Heading from '../styles/natours/elements/Heading';
import Photos from '../styles/natours/elements/Photos';
import Card from '../styles/natours/elements/Card';
import Section from '../styles/natours/elements/Section';
import RotatingCard from '../styles/natours/elements/RotatingCard';
import Testimonial from '../styles/natours/elements/Testimonial';
import SolidGradient from '../styles/natours/elements/SolidGradient';
import Form from '../styles/natours/elements/Form';
import Navigation from '../styles/natours/elements/Navigation';
import Modal from '../styles/natours/elements/Modal';

const Natours = () => {

    function toggleModal() {
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modal-content');
        modal.classList.toggle('show');
        modalContent.classList.toggle('show');
    } 

    return (
        <div id="style--natours">
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

        </div>
    )
}

export default Natours;
