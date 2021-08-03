/* eslint-disable */
import React, { useState } from 'react';

/* Props
=========================================== */
// content: [title: String, content: String]

const Accordion = ({ content }) => {

    const [active, setActive] = useState(null);
    const [height, setHeight] = useState(0);

    function collapse(e) {

        const content = e.target.nextElementSibling;
        const activeId = Number(e.target.id)

        active === activeId ? setActive(null) : setActive(activeId);
        active === activeId ? setHeight(0) : setHeight(content.scrollHeight + "px");


    }

    return (
        <section id="accordion">
            <div className="row">
                <div className="col-6">
                    <div className="accordion">
                        {
                            content.map((item, i) => (
                                <div key={i} className="accordion-item">
                                    <p id={i} className={`accordion-header ${active === i ? 'collapsed' : ''}`} onClick={collapse}>{item.title} </p>
                                    <div className={`accordion-body ${active === i ? 'active' : ''}`} style={{ maxHeight: `${active !== i ? 0 : height}` }}>
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

export default Accordion;
