import React from 'react'

const Section = () => {
    return (
        <div className="mb-10">
            <section className="section-gradient">
                <div className="row width-90 gutter-30">
                <div className="card col">
                    <i className="fas fa-globe card-icon"></i>
                    <h3 className="card-title">Explore the world</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odit.</p>
                </div>
                <div className="card col">
                    <i className="fas fa-mountain card-icon"></i>
                    <h3 className="card-title">See More</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odit.</p>
                </div>
                <div className="card col">
                    <i className="fas fa-map-signs card-icon"></i>
                    <h3 className="card-title">Go places</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odit.</p>
                </div>
                <div className="card col">
                    <i className="fas fa-heart card-icon"></i>
                    <h3 className="card-title">Do what you love</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odit.</p>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Section;