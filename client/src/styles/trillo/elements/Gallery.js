import React from 'react';
import hotel1 from '../../../assets/hotel-1.jpg';
import hotel2 from '../../../assets/hotel-2.jpg';
import hotel3 from '../../../assets/hotel-3.jpg';

const Gallery = () => {
    return (
        <div className="gallery">
            <figure className="gallery-item">
                <img src={hotel1} alt="" className="gallery-photo"/>
            </figure>
            <figure className="gallery-item">
                <img src={hotel2} alt="" className="gallery-photo"/>
            </figure>
            <figure className="gallery-item">
                <img src={hotel3} alt="" className="gallery-photo"/>
            </figure>
        </div>
    )
}

export default Gallery;