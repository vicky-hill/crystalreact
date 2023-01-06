/* eslint-disable */
import React from 'react';
import toast from '../elements/Toast';


const ToastSection = ({ }) => {
    
    return (
        <section id="toast">
            <div className="mb-3">
                <div className="toast">
                    <div className="toast__header">
                        <div className="toast__header-image"></div>
                        <strong className="toast__header-title">Toast</strong>
                        <small>11 mins ago</small>
                        <button className="toast__header-close"><span>&times;</span></button>
                    </div>
                    <div className="toast__body">
                        Hello, world! This is a toast message.
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <button className='btn btn-primary' onClick={() => toast('Toast', 'This is a toast message')}>
                    Show toast
                </button>
            </div>
        </section>
    )
}

export default ToastSection
