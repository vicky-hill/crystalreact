import React from 'react';
import { connect } from 'react-redux';
import { deleteToast, addToast } from '../../actions/toasts';

const Toast = ({ deleteToast, addToast, toasts }) => {

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
                <button className='btn btn-primary' onClick={() => addToast('My Toast', 'The message of the toast')}>
                    Show toast
                </button>
            </div>


            {/* Live toast */}

            <div className="toast-container">
                {
                    toasts.map(toast => (
                        <div class="toast">
                        <div class="toast-header">
                            <div className="toast-img"></div>
                            <strong className="toast-title">{ toast.title }</strong>
                            <small>11 mins ago</small>
                            <button className="toast-close" onClick={() => deleteToast(toast.id)}><span>&times;</span></button>
                        </div>
                        <div class="toast-body">
                            { toast.message }
                        </div>
                    </div>
                    ))
                }
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    toasts: state.toasts
})


export default connect(mapStateToProps, { deleteToast, addToast })(Toast);