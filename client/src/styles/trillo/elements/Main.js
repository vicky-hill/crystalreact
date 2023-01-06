import React from 'react';
import Gallery from './Gallery';
import Overview from './Overview';
import MainCard from './MainCard';
import ReviewCard from './ReviewCard';
import Button from './Button';

const Main = () => {
    return (
        <div className="main">
            <Gallery />
            <Overview />
            <div className="details">
                <MainCard />
                <ReviewCard />
            </div>
            <div className="footer">
                <Button />
            </div>
        </div>
    )
}

export default Main;
