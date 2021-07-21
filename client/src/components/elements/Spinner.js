import React from 'react';

const Spinner = () => {
    return (
        <div className="mb-10">
            <div className="loading-spinner"></div>
            <div className="loading-dots">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    )
}

export default Spinner;
