import React from 'react';

const Alert = ({ children, type }) => {

    function dismissAlert(e) {
        const alertBox = e.target.parentElement.parentElement;
        alertBox.classList.add('alert-dismiss');
        console.log('close alert')
    }

    return (
        <div class={`alert alert-${type}`}>
            { children }
            <button class="alert-close" onClick={dismissAlert}>
                <span>&times;</span>
            </button>
        </div>
    )
}

Alert.defaultProps = {
    type: 'primary'
}

export default Alert;
