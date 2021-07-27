/* eslint-disable */
import React from 'react';

const Collapse = () => {

    function collapse() {
        const content = document.querySelector('.collapse');
        content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + "px";
    }


    return (
        <section id="collapse" className="row">
            <div className="col-4 mb-10">

                <button className="btn btn-primary" onClick={collapse} > Open Collapse </button>

                <div className="collapse">
                <div className="card">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti id veritatis nemo nisi cumque, dolores dolor consequuntur nihil? Asperiores, optio adipisci beatae explicabo sequi consequuntur nostrum libero error non recusandae.
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Collapse;
