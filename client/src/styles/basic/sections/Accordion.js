/* eslint-disable */ 'use strict'
import React, { useState } from 'react'
import classNames from 'classnames'

const Accordion = ({ content }) => {

    const [active, setActive] = useState(null);
    const [height, setHeight] = useState(0);

    const getHeaderClassees = index => classNames('accordion-header', {
      'collapsed': active === index
    });

    const getBodyClassees = index => classNames('accordion-body', {
      'active': active === index
    });

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
                                    <p className={getHeaderClassees(i)} onClick={(e) => collapse(e, i)} > {item.title} </p>
                                    <div className={getBodyClassees(i)} style={{ maxHeight: `${active !== i ? 0 : height}` }} >
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
