import React from 'react';

const RotatingCard = () => {
    return (
        <div className="mb-10">
            <h4 className="mb-10">Rotating Card</h4>
            <div className="row width-90">

                {/* Card 1 */}
                <div className="col-4">
                    <div className="card-rotating">

                        {/* Card Front */}
                        <div className="card-rotating-side side-front">
                            <div className="card-rotating-image image-1"></div>
                            <h4 className="card-rotating-heading">
                                <span className="card-rotating-heading-span span-1">The Sea Explorer</span>
                            </h4>
                            <div className="card-rotating-details">
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card back */}
                        <div className="card-rotating-side side-back back-1">
                            <div className="card-rotating-cta">
                                <div className="card-rotating-pricebox">
                                    <p className="card-rotating-price-only">Only</p>
                                    <p className="card-rotating-price-value">$29</p>
                                </div>
                                <a href="#" className="btn btn-white">Book now!</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-4">
                    <div className="card-rotating">
                        {/* Card Front */}
                        <div className="card-rotating-side side-front">
                            <div className="card-rotating-image image-2"></div>
                            <h4 className="card-rotating-heading">
                                <span className="card-rotating-heading-span span-2">The Forest Hiker</span>
                            </h4>
                            <div className="card-rotating-details">
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card back */}
                        <div className="card-rotating-side side-back back-2">
                            <div className="card-rotating-cta">
                                <div className="card-rotating-pricebox">
                                    <p className="card-rotating-price-only">Only</p>
                                    <p className="card-rotating-price-value">$29</p>
                                </div>
                                <a href="#" className="btn btn-white">Book now!</a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Card 3 */}
                <div className="col-4">
                    <div className="card-rotating">
                        {/* Card Front */}
                        <div className="card-rotating-side side-front">
                            <div className="card-rotating-image image-3"></div>
                            <h4 className="card-rotating-heading">
                                <span className="card-rotating-heading-span span-3">The Snow Adventurer </span>
                            </h4>
                            <div className="card-rotating-details">
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card back */}
                        <div className="card-rotating-side side-back back-3">
                            <div className="card-rotating-cta">
                                <div className="card-rotating-pricebox">
                                    <p className="card-rotating-price-only">Only</p>
                                    <p className="card-rotating-price-value">$29</p>
                                </div>
                                <a href="#" className="btn btn-white">Book now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RotatingCard;