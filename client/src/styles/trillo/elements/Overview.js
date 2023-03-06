import React from 'react'

const Overview = () => {
    return (
        <div className="overview">
            <h1 className="overview-heading">Hotel Las Palmas</h1>
            <div className="overview-stars">
                <i className="overview-icon-star icon-star"></i>
                <i className="overview-icon-star icon-star"></i>
                <i className="overview-icon-star icon-star"></i>
                <i className="overview-icon-star icon-star"></i>
                <i className="overview-icon-star icon-star"></i>
            </div>
            <div className="overview-location">
                <i className="overview-icon-location icon-location-pin"></i>
                <button className="btn-inline">Albufeira, Portugal</button>
            </div>
            <div className="overview-rating">
                <div className="overview-rating-average">8.6</div>
                <div className="overview-rating-count">465 votes</div>
            </div>
        </div>
    )
}

export default Overview;
