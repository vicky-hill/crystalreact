import React, { useEffect, useState } from 'react';
import slide1 from '../../assets/slide-1.jpg';
import slide2 from '../../assets/slide-2.jpg';
import slide3 from '../../assets/slide-3.jpg';

const Gallery = () => {
    const opacity = 0.2;
    
    const [current, setCurrent] = useState('');
    const [images, setImages] = useState([]);

    const loadGallery = () => {
        setCurrent(document.querySelector('.gallery-main #current'));
        setImages(document.querySelectorAll('.gallery-images img'));
        
        images[0].style.opacity = opacity;

        // Set first image opacity
        // images[0].style.opacity = opacity;
    }

    useEffect(() => {
        // images = document.querySelectorAll('.gallery-images img');
        // images[0].style.opacity = opacity;
        loadGallery();
        console.log('images', images);
    }, [])



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
        <section id="gallery" className="mb-10">
            <div className="gallery-container">
                <div className="gallery-main">
                    <img src={slide1} id="current" />
                </div>
                <div className="gallery-images" onClick={setImage}>
                    <img src={slide1} />
                    <img src={slide2} />
                    <img src={slide3} />
                </div>
            </div>
        </section>
    )
}

export default Gallery;
