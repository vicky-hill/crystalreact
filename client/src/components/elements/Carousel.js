/* eslint-disable */
import React, { useEffect } from 'react';
import slide1 from '../../assets/slide-1.jpg';
import slide2 from '../../assets/slide-2.jpg';
import slide3 from '../../assets/slide-3.jpg';

const Carousel = () => {

    let carouselSlide, carouselImages, carouselSize, dots, nav;
    let counter = 1;

    const setUpCarousel = () => {
        carouselSlide = document.querySelector('.carousel-slide');
        carouselImages = document.querySelectorAll('.carousel-image');
        carouselSize = carouselImages[0].clientWidth;
        nav = document.querySelector('.carousel-nav');
        dots = Array.from(nav.children);

        carouselSlide.style.transform = `translateX(-${carouselSize * counter}px)`;
    }

    const loopCarousel = () => {
        if (carouselImages[counter].id === 'last-clone') {
            carouselSlide.style.transition = 'none';
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = `translateX(-${carouselSize * counter}px)`;
        }
        if (carouselImages[counter].id === 'first-clone') {
            carouselSlide.style.transition = 'none';
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = `translateX(-${carouselSize * counter}px)`;
        }
    }


    const nextSlide = () => {
        if (counter >= carouselImages.length - 1) return;
        counter++;
        carouselSlide.style.transition = 'transform .8s ease-in-out';
        carouselSlide.style.transform = `translateX(-${carouselSize * counter}px)`;

        const slideCount = carouselImages.length -1;
        const currentDot = nav.querySelector('.current');  
        let targetDot;
        
        if(counter === slideCount) {
            targetDot = dots[0];
        } else {
            targetDot = dots[counter-1];
        }

        updateDots(currentDot, targetDot)
    }

    const prevSlide = () => {
        if (counter <= 0) return;
        counter--;
        carouselSlide.style.transition = 'transform .8s ease-in-out';
        carouselSlide.style.transform = `translateX(-${carouselSize * counter}px)`;

        const slideCount = carouselImages.length -1;
        const currentDot = nav.querySelector('.current');  
        let targetDot;
        
        if(counter === 0) {
            targetDot = dots[slideCount - 2];
        } else {
            targetDot = dots[counter - 1];
        }

        updateDots(currentDot, targetDot)
    }

    const moveToSlide = (target) => {
        counter = target;
        carouselSlide.style.transition = 'transform .8s ease-in-out';
        carouselSlide.style.transform = `translateX(-${carouselSize * counter}px)`;
    }

    // Move dots
    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current');
        targetDot.classList.add('current');
    }

    const navigateToDot = (e) => {
        if (e.target.tagName === 'BUTTON') {

            const currentDot = nav.querySelector('.current');
            const targetDot = e.target.closest('BUTTON');

            const targetIndex = dots.findIndex(dot => dot === targetDot);
            const targetCount = targetIndex + 1;

            moveToSlide(targetCount);

            updateDots(currentDot, targetDot);
        }
    }




    return (
        <section id="carousel">
            <div className="row">
                <div className="col-6">
                    <div className="carousel">
                    <button className="carousel-btn left" onClick={prevSlide}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        
                    <div className="carousel-container" onLoad={setUpCarousel}>
                        <div className="carousel-slide" onTransitionEnd={loopCarousel}>
                            <img className="carousel-image" id="last-clone" src={slide3} alt="" />
                            <img className="carousel-image" src={slide1} alt="" />
                            <img className="carousel-image" src={slide2} alt="" />
                            <img className="carousel-image" src={slide3} alt="" />
                            <img className="carousel-image" id="first-clone" src={slide1} alt="" />
                        </div>

                        <div className="carousel-nav" onClick={navigateToDot}>
                            <button id="dot1" className="carousel-indicator current"></button>
                            <button id="dot2" className="carousel-indicator"></button>
                            <button id="dot3" className="carousel-indicator"></button>
                        </div>
                    </div>

                    <button className="carousel-btn right" onClick={nextSlide}>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel;
