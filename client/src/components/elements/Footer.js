import React from 'react';

const Footer = () => {
    return (
        <footer className="footer make-fit">
            <div className="footer__text footer__container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum similique, quibusdam corporis aperiam exercitationem soluta pariatur sapiente reiciendis iusto? Voluptas, officiis. Laudantium consequatur ipsam in.</p>
                <p>&copy; Copyright 2021 Basic Style </p>
                <hr className="footer__hr" />
            </div>
            <div className="footer__sections footer__container">
                <div className="footer__section">
                    <span className="footer__title">Find Out More</span>
                    <a href="#" className="footer__link">Link #1</a>
                    <a href="#" className="footer__link">Link #2</a>
                    <a href="#" className="footer__link">Link #3</a>
                    <a href="#" className="footer__link">Link #4</a>
                    <a href="#" className="footer__link">Link #5</a>
                </div>
                <div className="footer__section">
                    <span className="footer__title">Visit Our Stores</span>
                    <a href="#" className="footer__link">Los Angeles</a>
                    <a href="#" className="footer__link">San Diego</a>
                </div>
                <div className="footer__section">
                    <span className="footer__title">Support Us</span>
                    <a href="#" className="footer__link">Link #1</a>
                    <a href="#" className="footer__link">Link #2</a>
                    <a href="#" className="footer__link">Link #3</a>
                </div>
                <div className="footer__section">
                    <span className="footer__title">Follow Us Online</span>
                    <a href="#" className="footer__link">Link #1</a>
                    <a href="#" className="footer__link">Link #2</a>
                    <a href="#" className="footer__link">Link #3</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
