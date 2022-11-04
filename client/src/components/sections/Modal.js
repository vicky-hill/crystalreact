/* eslint-disable */
import React, { useState } from 'react';

const Modal = () => {

    const [modal, setModal] = useState(false);

    // Open Modal
    const openModal = (e) => {
        setModal(true);
        document.querySelector('body').classList.add('no-scroll');
    }

    // Close Modal
    const closeModal = (e) => {
        const modalContainer = e.target.classList.contains('modal')
        const closeModal = e.target.classList.contains('modal-close');

        if (modalContainer || closeModal) {
            setModal(false)
            document.querySelector('body').classList.remove('no-scroll');
        }
    }

    return (
        <section id="modal">
            <button className="btn btn-primary" onClick={openModal}>
                Launch demo modal
            </button>

            <div className={`modal ${modal ? 'show' : 'fade'}`}  onClick={closeModal}>
                <div className="modal-content">

                    {/* Header */}
                    <div className="modal-header">
                        <p className="modal-title">Title</p>
                        <span className="modal-close">&times;</span>
                    </div>

                    {/* Body */}
                    <div className="modal-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, qui.
                    </div>

                    {/* Footer */}
                    <div className="modal-footer">
                        <button className="btn btn-secondary modal-close" onClick={closeModal}>Close</button>
                        <button className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Modal;





