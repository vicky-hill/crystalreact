/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import img1 from '../../assets/westgate/img-1.png'
import img2 from '../../assets/westgate/img-2.png'
import img3 from '../../assets/westgate/img-3.png'


/* Props
=========================================== */
// images: array


const WestgateCard = () => {

    let images = [img1, img2, img3];

    // Add first and last clones
    const lastImage = images[images.length - 1]
    const firstImage = images[0];
    images = [lastImage, ...images, firstImage];

    // Count for current slide & dot
    const [currentSlide, setCurrentSlide] = useState(1);

    const [transition, setTransition] = useState('');
    const [sliding, setSliding] = useState(false);


    const autoPlayRef = useRef()

    useEffect(() => {
        console.log('rerender')
        if (sliding) {
            autoPlayRef.current = next;
        } else {
            autoPlayRef.current = function() { return }
        }
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }


        const interval = setInterval(play, 1000)
    }, [])


    // Handle first and last slide
    const loopCarousel = () => {
        if (currentSlide === 0) {
            setTransition('none');
            setCurrentSlide(images.length - 2);
        }

        if (currentSlide === images.length - 1) {
            setTransition('none');
            setCurrentSlide(1);
        }
    }


    // Next Button
    const next = () => {
        setTransition('transform .8s ease-in-out');
        currentSlide === images.length - 1 ? setCurrentSlide(1) : setCurrentSlide(currentSlide + 1);
    }

    return (
        <section id="carousel">
            <div className="row">
                <div className="col-8">

                    {/* Carousel */}
                    <div className="westgate-container">
                        <div className="westgate">

                            {/* Slides */}
                            {images.map((image, i) => (
                                <div
                                    key={i}
                                    className={"westgate-slide"}
                                    style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: transition }}
                                    onTransitionEnd={loopCarousel}
                                    id={i}
                                    onMouseEnter={() => { setSliding(true) }}
                                    onMouseLeave={() => { setSliding(false) }}
                                >
                                    {/* Slide Image */}
                                    <img src={image} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WestgateCard;
