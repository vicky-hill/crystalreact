import React from 'react';

const Badge = () => {

    return (
        <div>
            <div className="mb-10">
                <h4 className="mb-5">Heading Badge</h4>

                <h2>Heading <span className="badge">New</span> </h2>
                <h3>Heading <span className="badge">New</span> </h3>
                <h4>Heading <span className="badge">New</span> </h4>

            </div>

            <div className="mb-10">
                <h4 className="mb-5">Button Badge</h4>
                <button className="btn btn-primary">
                    Notification <span className="badge badge-light">7</span>
                </button>
                <button className="btn btn-primary">
                    Posts <span className="badge badge-pill badge-light">45</span>
                </button>
            </div>

            <div className="mb-10">
                <h4 className="mb-5">Pill Badge</h4>
                <h2>Heading <span className="badge badge-pill">New</span> </h2>
            </div>
        </div>
    )
}

export default Badge;
