import React from 'react';

const Modal = () => {

    // Open Modal
    const openModal = (e) => {
        document.querySelector(`[data-modal=${e.target.id}]`).classList.add('show');
        document.querySelector(`[data-modal=${e.target.id}]`).classList.remove('fade');
        document.querySelector('body').classList.add('no-scroll');
    }

    // Close Modal
    const closeModal = (e) => {
        const modal = e.target.classList.contains('modal')
        const closeModal = e.target.classList.contains('modal-close');

        let modalId;

        if (modal || closeModal) {

            // Close the modal clicking outside of it
            if (modal) { modalId = e.target.getAttribute('data-modal'); }

            // Close the modal clicking on the close button
            if (closeModal) { modalId = e.target.parentElement.parentElement.parentElement.getAttribute('data-modal'); }

            document.querySelector(`[data-modal=${modalId}]`).classList.remove('show');
            document.querySelector('body').classList.remove('no-scroll');
        }
    }

    return (
        <section id="modal" className="mb-10">
            <button className="btn btn-primary" id="modal1" onClick={openModal}>
                Launch demo modal
            </button>

            <div className="modal" data-modal="modal1" onClick={closeModal}>
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
