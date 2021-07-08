import React from 'react';

const Toast = () => {

    function showToast() {
        const toast = document.getElementById('toast');
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    function hideToast() {
        document.getElementById('toast').classList.remove('show');
    }

    return (
        <>
            <div className="mb-3">
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

            <div className="mb-10">
                <button className='btn btn-primary' onClick={showToast}>
                    Show toast
                </button>
            </div>


            {/* Live toast */}

            <div className="toast-container" id="toast">
                <div class="toast">
                    <div class="toast-header">
                        <div className="toast-img"></div>
                        <strong className="toast-title">Toast</strong>
                        <small>11 mins ago</small>
                        <button className="toast-close" onClick={hideToast}><span>&times;</span></button>
                    </div>
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>
                <div class="toast">
                    <div class="toast-header">
                        <div className="toast-img"></div>
                        <strong className="toast-title">Toast</strong>
                        <small>11 mins ago</small>
                        <button className="toast-close" onClick={hideToast}><span>&times;</span></button>
                    </div>
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toast;
