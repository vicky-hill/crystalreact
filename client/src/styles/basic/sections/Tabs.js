/* eslint-disable */
import React, { useState } from 'react';

const Tabs = ({ content }) => {

    const [active, setActive] = useState(0);

    const openTab = (e) => {
        setActive(Number(e.target.id));
    }


    return (
        <section id="tabs">
            <div className="tabs" onClick={openTab}>
                {
                    content.map((item, i) => (
                        <div id={i} key={i} className={`tabs-item ${active === i ? 'active' : ''}`}>{item.title}</div>
                    ))
                }
            </div>

            <div className="tab-content">
                {
                    content.map((item, i) => (
                        <div key={i} id={`tab-${i}`} className={`tab-pane fade-in ${active === i ? 'show active' : ''}`}>
                            {item.content}
                        </div>
                    ))
                }


                <div className="tab-pane fade" id="second">

                </div>
                <div className="tab-pane fade" id="third">
                </div>
            </div>
        </section>
    )
}

export default Tabs;
