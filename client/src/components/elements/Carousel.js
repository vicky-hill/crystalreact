import React from 'react';
import slide1 from '../../assets/slide-1.jpg';
import slide2 from '../../assets/slide-2.jpg';
import slide3 from '../../assets/slide-3.jpg';

const Carousel = () => {

    let track, nav, dots, slides;

    const setUpCarousel = () => {

        // Set up variables
        track = document.querySelector('.carousel-track');
        slides = Array.from(track.children);
        nav = document.querySelector('.carousel-nav');
        dots = Array.from(nav.children);

        // Set images next to each other
        const slideWidth = slides[0].getBoundingClientRect().width;

        slides.forEach((slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        })
    }

    // Move to the target Slide
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = `translateX(-${targetSlide.style.left})`;
        currentSlide.classList.remove('current');
        targetSlide.classList.add('current');
    }

    // Next slide
    const nextSlide = () => {
        let nextSlide, nextDot;
        const currentSlide = track.querySelector('.current');
        const currentDot = nav.querySelector('.current');
        const currentIndex = dots.findIndex(dot => dot === currentDot);

        // Check if last slide
        if (currentIndex + 1 === slides.length) {
            nextSlide = slides[0];
            nextDot = dots[0]
        } else {
            nextSlide = currentSlide.nextElementSibling;
            nextDot = currentDot.nextElementSibling;
        }

        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
    }

    // Previous slide
    const prevSlide = () => {
        let prevSlide, prevDot;
        const currentSlide = track.querySelector('.current');
        const currentDot = nav.querySelector('.current');
        const currentIndex = dots.findIndex(dot => dot === currentDot);

        // Check if first slide
        if (currentIndex === 0) {
            prevSlide = slides[2];
            prevDot = dots[2]
        } else {
            prevSlide = currentSlide.previousElementSibling;
            prevDot = currentDot.previousElementSibling;
        }

        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
    }

    // Navigate dot
    const navigateToDot = (e) => {
        if (e.target.tagName === 'BUTTON') {
            const currentSlide = track.querySelector('.current');
            const currentDot = nav.querySelector('.current');

            const targetDot = e.target.closest('button');
            const targetIndex = dots.findIndex(dot => dot === targetDot);
            const targetSlide = slides[targetIndex];

            moveToSlide(track, currentSlide, targetSlide);
            updateDots(currentDot, targetDot);
        }
    }

    // Move dots
    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current');
        targetDot.classList.add('current');
    }




    return (
        <div className="mb-10">
            <div className="carousel" onLoad={setUpCarousel}>
                <button className="carousel-btn left" onClick={prevSlide}>
                    <i class="fas fa-chevron-left"></i>
                </button>

                <div className="carousel-container">
                    <ul className="carousel-track">
                        <li className="carousel-slide current">
                            <img className="carousel-image" src={slide1} alt="" />
                        </li>
                        <li className="carousel-slide">
                            <img className="carousel-image" src={slide2} alt="" />
                        </li>
                        <li className="carousel-slide">
                            <img className="carousel-image" src={slide3} alt="" />
                        </li>
                    </ul>
                </div>
                
                <button className="carousel-btn right" onClick={nextSlide}>
                    <i class="fas fa-chevron-right"></i>
                </button>
                
                <div className="carousel-nav" onClick={navigateToDot}>
                    <button className="carousel-indicator current"></button>
                    <button className="carousel-indicator"></button>
                    <button className="carousel-indicator"></button>
                </div>
            </div>
        </div>
    )
}

export default Carousel;
