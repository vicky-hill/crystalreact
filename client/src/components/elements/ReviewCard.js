import React from 'react';
import user1 from '../../assets/user-1.jpg'
import user2 from '../../assets/user-2.jpg'
import MainCard from './MainCard';

const ReviewCard = () => {
    return (
        <div className="review">
            <figure className="card">
                <blockquote className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempora quos a commodi cumque tenetur.
            </blockquote>
                <figcaption className="card-footer">
                    <img src={user1} alt="" className="card-footer-img" />
                    <div className="card-footer-info">
                        <p className="card-footer-name">Nick Smith</p>
                        <p className="card-footer-date">Feb 23, 2021</p>
                    </div>
                    <div className="card-footer-rating">7.8</div>
                </figcaption>
            </figure>

            <figure className="card">
                <blockquote className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempora quos a commodi cumque tenetur.
                </blockquote>
                <figcaption className="card-footer">
                    <img src={user2} alt="" className="card-footer-img" />
                    <div className="card-footer-info">
                        <p className="card-footer-name">Mary Thomas</p>
                        <p className="card-footer-date">Sept 13, 2017</p>
                    </div>
                    <div className="card-footer-rating">9.3</div>
                </figcaption>
            </figure>

            <button className="btn-inline">
                Show all
                <span>&rarr;</span>
            </button>
        </div>
    )
}

export default ReviewCard;
