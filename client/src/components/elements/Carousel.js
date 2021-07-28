/* eslint-disable */
import React from 'react';
import slide1 from '../../assets/slide-1.jpg';
import slide2 from '../../assets/slide-2.jpg';
import slide3 from '../../assets/slide-3.jpg';

const Carousel = () => {

    let counter = 1;
    let carouselSlide,
        carouselImages,
        carouselSize,
        dots,
        nav;

    // Set all variables
    const setUpCarousel = () => {
        carouselSlide = document.querySelector('.carousel-slide');
        carouselImages = document.querySelectorAll('.carousel-image');
        carouselSize = carouselImages[0].clientWidth;
        nav = document.querySelector('.carousel-nav');
        dots = Array.from(nav.children);

        carouselSlide.style.transform = `translateX(-${carouselSize * counter}px)`;
    }

    // Handle first and last slide
    const loopCarousel = () => {
        if (carouselImages[counter].id === 'last-clone') {
            resetFirstAndLast(carouselImages.length - 2);
        }
        if (carouselImages[counter].id === 'first-clone') {
            resetFirstAndLast(carouselImages.length - counter);
        }
    }

    const resetFirstAndLast = (newCount) => {
        carouselSlide.style.transition = 'none';
        counter = newCount;
        carouselSlide.style.transform = `translateX(-${carouselSize * counter}px)`;
    }


    // Navigation arrows
    const nextSlide = () => {
        if (counter >= carouselImages.length - 1) return;
        moveToSlide(counter + 1)
    }

    const prevSlide = () => {
        if (counter <= 0) return;
        moveToSlide(counter - 1)
    }

    // Move to target slide
    const moveToSlide = (target) => {
        counter = target;

        // Move Slide
        carouselSlide.style.transition = 'transform .8s ease-in-out';
        carouselSlide.style.transform = `translateX(-${carouselSize * counter}px)`;

        // Current and target dot
        const slideCount = carouselImages.length - 1;
        const currentDot = nav.querySelector('.current');
        let targetDot;

        // Check for first and last dot
        if (counter === slideCount) { targetDot = dots[0] }
        else if (counter === 0) { targetDot = dots[slideCount - 2] }
        else { targetDot = dots[counter - 1] }

        updateDots(currentDot, targetDot)

    }

    // Move dots
    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current');
        targetDot.classList.add('current');
    }

    // Navigate to dot
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
                <div className="col-8">
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
