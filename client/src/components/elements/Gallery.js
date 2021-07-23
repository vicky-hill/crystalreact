import React, { useEffect } from 'react';
import slide1 from '../../assets/slide-1.jpg';
import slide2 from '../../assets/slide-2.jpg';
import slide3 from '../../assets/slide-3.jpg';

const Gallery = () => {

    useEffect(() => {
        images = document.querySelectorAll('.gallery-images img');
        images[0].style.opacity = opacity;
    }, [])

    let current, images;
    const opacity = 0.2;

    const loadGallery = () => {
        current = document.querySelector('.gallery-main #current');
        images = document.querySelectorAll('.gallery-images img');

        // Set first image opacity
        // images[0].style.opacity = opacity;
    }

    const setImage = (e) => {
        // Reset opacity of all images
        images.forEach(img => img.style.opacity = 1);

        // Change main image src to clicked image src
        current.src = e.target.src;

        // Add fade in class
        current.classList.add('fade-in');

        // Remove fade-in class
        setTimeout(() => {
            current.classList.remove('fade-in');
        }, 500);

        // Change the opacity
        e.target.style.opacity = opacity;
    }
    
    

    return (
        <div className="mb-10">
            <div className="gallery-container" onLoad={loadGallery}>
                <div className="gallery-main">
                    <img src={slide1} id="current" />
                </div>
                <div className="gallery-images" onClick={setImage}>
                    <img src={slide1} />
                    <img src={slide2} />
                    <img src={slide3} />
                </div>
            </div>
        </div>
    )
}

export default Gallery;
