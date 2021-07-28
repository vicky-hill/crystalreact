/* eslint-disable */
import React from 'react';

const Accordion = () => {

    function collapse(e) {
        if (e.target.classList.contains('accordion-header')) {

            const content = e.target.nextElementSibling;
            const headings = document.getElementsByClassName('accordion-header');
            const bodies = document.getElementsByClassName('accordion-body');

            // Close all accordions that aren't the target
            for (let i = 0; i < headings.length; i++) {
                if (headings[i] !== e.target) {
                    headings[i].classList.remove('collapsed');
                    bodies[i].classList.remove('active');
                    bodies[i].style.maxHeight = null;
                }
            }

            // Toggle the clicked on accordion
            e.target.classList.toggle('collapsed')
            content.classList.toggle('active');
            content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + "px";
        }
    }

    return (
        <section id="accordion">
            <div className="row">
                <div className="col-6">
                    <div className="accordion" onClick={collapse}>
                        <div className="accordion-item">
                            <p className="accordion-header">Item #1</p>
                            <div className="accordion-body">
                                <div className="accordion-content">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum temporibus laboriosam non exercitationem perferendis id dolorem veniam mollitia illum ratione.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <p className="accordion-header">Item #2</p>
                            <div className="accordion-body">
                                <div className="accordion-content">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolor nemo sapiente doloremque dignissimos in amet aperiam, ab repudiandae reiciendis beatae cumque unde molestias pariatur ex exercitationem impedit rerum nihil aut eum doloribus, itaque corrupti? Consectetur, cupiditate quae reiciendis sunt, ipsum iure eaque, dolor neque magni rem quas soluta voluptates!
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <p className="accordion-header">Item #3</p>
                            <div className="accordion-body">
                                <div className="accordion-content">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum temporibus laboriosam non exercitationem perferendis id dolorem veniam mollitia illum ratione.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <p className="accordion-header">Item #4</p>
                            <div className="accordion-body">
                                <div className="accordion-content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nisi mollitia quod, ratione maiores eaque sapiente ut! Voluptas laudantium pariatur id cumque perspiciatis illum ea amet ipsa aut error sunt ipsam, fugiat quaerat dolores labore corrupti eaque, sapiente quos! Laboriosam quibusdam consequatur possimus voluptas explicabo suscipit! Quas nihil itaque illum at nemo officia vel natus, inventore modi nulla neque praesentium repellat saepe est ut, reiciendis eaque? Consequuntur explicabo non perferendis iure cumque in consequatur quo cupiditate atque saepe asperiores aliquid aspernatur iste reiciendis ipsam, corporis ducimus, laboriosam animi sed rem.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accordion;
