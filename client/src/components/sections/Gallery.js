/* eslint-disable */
import React, { useRef, useState } from 'react';

/* Props
=========================================== */
// images: [img]

const Gallery = ({ images }) => {

    const [current, setCurrent] = useState(0);
    const [opacity, setOpacity] = useState(0.2);
    
    const main = useRef(null);




    const setImage = (e) => {

        setCurrent(Number(e.target.id));

        // Add fade-in class
        main.current.classList.add('fade-in');

        // Remove fade-in class
        setTimeout(() => {
            main.current.classList.remove('fade-in');
        }, 500);
    }



    return (
        <section id="gallery">
            <div className="row">
                <div className="col-8">
                    <div className="gallery-container">
                        <div className="gallery-main">
                            <img src={images[current]} ref={main} />
                        </div>
                        <div className="gallery-images">
                            {
                                images.map((image, i) => (
                                    <img id={i} onClick={setImage} key={i} src={image} style={{ opacity: `${current === i ? opacity : 1}` }} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;
