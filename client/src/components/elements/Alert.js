import React from 'react';

const Alert = () => {

    function dismissAlert(e) {
        const alertBox = e.target.parentElement.parentElement;
        alertBox.classList.add('alert-dismiss');
        console.log('close alert')
    }

    return (
        <div className="mb-10 width-25">

            <div class='alert alert-primary'>
                A simple alert
                <button class="alert-close" onClick={dismissAlert}>
                    <span>&times;</span>
                </button>
            </div>
            
        </div>
    )
}

export default Alert;
