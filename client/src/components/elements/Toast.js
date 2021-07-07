import React from 'react';

const Toast = () => {
    return (
        <div className="mb-10">
            <div class="toast">
                <div class="toast-header">
                    <div className="toast-img"></div>
                    <strong className="toast-title">Toast</strong>
                    <small>11 mins ago</small>
                    <button className="toast-close"><span>&times;</span></button>
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>
        </div>
    )
}

export default Toast;
