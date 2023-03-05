/* eslint-disable */
import React, { useRef } from 'react'

const Collapse = () => {

    const content = useRef(null);

    function collapse() {
        content.current.style.maxHeight ? 
            content.current.style.maxHeight = null : 
            content.current.style.maxHeight = content.current.scrollHeight + "px";
    }


    return (
        <section id="collapse">
            <div className="row">
                <div className="col-4">

                    <button className="btn btn-primary" onClick={collapse} > Open Collapse </button>

                    <div className="collapse" ref={content}>
                        <div className="card">
                            <div className="card-body">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti id veritatis nemo nisi cumque, dolores dolor consequuntur nihil? Asperiores, optio adipisci beatae explicabo sequi consequuntur nostrum libero error non recusandae.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Collapse;
