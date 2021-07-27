import React from 'react';

const Alert = () => {

    function dismissAlert(e) {
        const alertBox = e.target.parentElement.parentElement;
        alertBox.classList.add('alert-dismiss');
        console.log('close alert')
    }

    return (
        <section id="alert" className="mb-10 width-50">

            <div className='alert alert-primary'>
                A simple alert
                <button className="alert-close" onClick={dismissAlert}>
                    <span>&times;</span>
                </button>
            </div>
            
        </section>
    )
}

export default Alert;
