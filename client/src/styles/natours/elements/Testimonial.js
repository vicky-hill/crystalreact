import React from 'react';
import nat8 from '../../../assets/nat-8.jpg';

const Testimonial = () => {
    return (
        <div className="mb-10">
            <div className="card-testimonial">
                 <figure className="card-testimonial-shape">
                    <img className="card-testimonial-img" src={nat8} alt=""/>
                    <figcaption className="card-testimonial-caption">
                        Mary Smith 
                    </figcaption>
                 </figure>
                 <div className="card-testimonial-text">
                     <h3 className="card-testimonial-heading">Best Week of my Life</h3>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae architecto tempore aut reprehenderit deleniti facere cupiditate excepturi nobis porro. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae architecto tempore aut reprehenderit deleniti facere cupiditate excepturi nobis porro.</p>
                 </div>
            </div>
        </div>
    )
}

export default Testimonial;