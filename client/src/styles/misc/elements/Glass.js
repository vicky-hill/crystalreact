/* eslint-disable */ 'use strict';
import React from 'react';
import user1 from '../../../assets/user1.png';
import user2 from '../../../assets/user2.png';
import user3 from '../../../assets/user3.png';

const Glass = () => {
    return (
        <div className="glass-morphism mt-10 mb-10">

            <div className="glass-morphism__circle glass-morphism__circle--1"></div>
            <div className="glass-morphism__circle glass-morphism__circle--2"></div>

            <div className="glass-card__container bd-container">
                
                <div className="glass-card">
                    <img src={user1} alt="" className="glass-card__img" />
                    
                    <div className="glass-card__data">
                        <h3 className="glass-card__title">Alina Morton</h3>
                        <span className="glass-card__profession">Web Developer</span>
                    </div>

                    <a href="" className="glass-card__button">Know More</a>

                    <div className="glass-card__social">
                        <a href="" className="glass-card__link"><i className="fab fa-instagram"></i></a>
                        <a href="" className="glass-card__link"><i className="fab fa-twitter"></i></a>
                        <a href="" className="glass-card__link"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

                <div className="glass-card">
                    <img src={user2} alt="" className="glass-card__img" />
                    
                    <div className="glass-card__data">
                        <h3 className="glass-card__title">Robbi Hawkins</h3>
                        <span className="glass-card__profession">Product Designer</span>
                    </div>

                    <a href="" className="glass-card__button">Know More</a>

                    <div className="glass-card__social">
                        <a href="" className="glass-card__link"><i className="fab fa-instagram"></i></a>
                        <a href="" className="glass-card__link"><i className="fab fa-twitter"></i></a>
                        <a href="" className="glass-card__link"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

                <div className="glass-card">
                    <img src={user3} alt="" className="glass-card__img" />
                    
                    <div className="glass-card__data">
                        <h3 className="glass-card__title">Davidson Bass</h3>
                        <span className="glass-card__profession">UI/UX</span>
                    </div>

                    <a href="" className="glass-card__button">Know More</a>

                    <div className="glass-card__social">
                        <a href="" className="glass-card__link"><i className="fab fa-instagram"></i></a>
                        <a href="" className="glass-card__link"><i className="fab fa-twitter"></i></a>
                        <a href="" className="glass-card__link"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Glass;
