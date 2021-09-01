/* eslint-disable */ 'use strict';
import React from 'react';

const Alert = () => {

    function dismissAlert(e) {
        const alertBox = e.target.parentElement.parentElement;
        alertBox.classList.add('alert-dismiss');
        console.log('close alert')
    }

    return (
        <section id="alert">
            <div className="row">
                <div className="col-6">
                <div className='alert alert-primary'>
                A simple alert
                <button className="alert-close" onClick={dismissAlert}>
                    <span>&times;</span>
                </button>
            </div>
                </div>
            </div>        
        </section>
    )
}

export default Alert;
