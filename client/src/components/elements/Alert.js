import React from 'react';

const Alert = () => {

    function dismissAlert(e) {
        const alertBox = e.target.parentElement.parentElement;
        alertBox.classList.add('alert-dismiss');
        console.log('close alert')
    }

    return (
        <div class='alert alert-primary'>
            A simple alert
            <button class="alert-close" onClick={dismissAlert}>
                <span>&times;</span>
            </button>
        </div>
    )
}

export default Alert;