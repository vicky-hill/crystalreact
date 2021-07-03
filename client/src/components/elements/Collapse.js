import React from 'react';

const Collapse = () => {

    function collapse() {
        const content = document.getElementById('collapse');
        content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + "px";
    }


    return (
        <div className="row">
            <div className="col-4">
                <button className="btn btn-primary" onClick={collapse} > Open Collapse </button>

                <div className="collapse" id="collapse">
                <div className="card">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti id veritatis nemo nisi cumque, dolores dolor consequuntur nihil? Asperiores, optio adipisci beatae explicabo sequi consequuntur nostrum libero error non recusandae.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Collapse;
