import React from 'react';


const Button = () => {

    const toggleSpinner = () => {
        document.getElementById('loading-button').classList.toggle('btn-loading');
    }
    

    return (
        <div className="mb-10">

            <button className='btn btn-primary'>
                Button
            </button>

            <button className="btn btn-primary" id="loading-button" onClick={toggleSpinner}>
                <span className="btn-text">Loading button</span>
            </button>

            <button className='btn btn-primary btn-outline-primary'>
                Outline Button
            </button>

            <button className='btn btn-primary btn-outline-primary btn-round'>
                Round Button
            </button>
            
        </div>
    )
}



export default Button;