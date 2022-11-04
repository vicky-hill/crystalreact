/* eslint-disable */ 'use strict';
import React from 'react';

const Badge = () => {

    return (
        <section id="badge">
            <div className="mb-10">

                <h2>Heading <span className="badge">New</span> </h2>
                <h3>Heading <span className="badge">New</span> </h3>
                <h4>Heading <span className="badge">New</span> </h4>

            </div>

            <div className="mb-10">

                <button className="btn btn-primary">
                    Notification <span className="badge badge-light">7</span>
                </button>
                <button className="btn btn-primary">
                    Posts <span className="badge badge-pill badge-light">45</span>
                </button>

            </div>

            <div>

                <h2>Heading <span className="badge badge-pill">New</span> </h2>
                
            </div>
        </section>
    )
}

export default Badge;
