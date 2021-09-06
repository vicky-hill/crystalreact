/* eslint-disable */ 'use strict';
import React, { useState } from 'react';

const Accordion = ({ content }) => {

    const [active, setActive] = useState(null);
    const [height, setHeight] = useState(0);

    function collapse(e, index) {

        const content = e.target.nextElementSibling;

        active === index ? setActive(null) : setActive(index);
        active === index ? setHeight(0) : setHeight(content.scrollHeight + "px");

    }

    return (
        <section id="accordion">
            <div className="row">
                <div className="col-6">
                    <div className="accordion">
                        {
                            content.map((item, i) => (
                                <div key={i} className="accordion-item" >
                                    <p className={`accordion-header ${active === i ? 'collapsed' : ''}`} onClick={(e) => collapse(e, i)} > {item.title} </p>
                                    <div className={`accordion-body ${active === i ? 'active' : ''}`} style={{ maxHeight: `${active !== i ? 0 : height}` }} >
                                        <div className="accordion-content">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}


/* Props
============================================================= */
// content: [title: String, content: String]


/* JSX =========================================================
    <div className="accordion">
        <div className="accordion-item">
            <p className="accordion-header">{ item.title }</p>
            <div className="accordion-body">
                <div className="accordion-content">
                    { item.content }
                </div>
            </div>
        </div>
    </div> 
============================================================= */

export default Accordion;
