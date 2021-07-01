import React from 'react';
import nat8 from '../../assets/nat-8.jpg';
import nat9 from '../../assets/nat-9.jpg';

function Modal() {

    function toggleModal() {
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modal-content');
        modal.classList.toggle('show');
        modalContent.classList.toggle('show');
    } 

    function outsideClick(e) {
        if(e.target.id === 'modal') {
            toggleModal();
        }
    }

    return (
        <div className="mb-10">
            <h4 className="mb-5">Modal</h4>

            <div className="modal" id="modal" onClick={outsideClick}>
                <div className="modal-content" id="modal-content">
                    <div className="modal-left">
                        <img src={nat8} alt="" className="modal-img"/>
                        <img src={nat9} alt=""  className="modal-img"/>
                    </div>
                    <div className="modal-right">
                        <button className="modal-close" onClick={toggleModal}>&times;</button>
                        <h2 className="modal-title heading-gradient">Start booking now</h2>
                        <h3 className="modal-subtitle">Import &ndash; Check before booking</h3>
                        <p className="modal-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa laboriosam, perspiciatis ipsum aliquid delectus voluptas hic veritatis. Quod optio voluptates dolores consectetur perferendis! Quia eum laboriosam aperiam nulla assumenda!</p>
                    
                        <a href="" className="btn btn-purple">Book now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
