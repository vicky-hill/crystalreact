/* eslint-disable */
import React, { useState } from 'react';

/* Props
=========================================== */
// pages

const Pagination = ({ pages }) => {

    const [active, setActive] = useState(0);

    const activatePage = (e) => {
        e.preventDefault();
        setActive(Number(e.target.id));
    }

    const nextPage = (e) => {
        e.preventDefault();
        if(active === pages.length - 1) return
        setActive(active + 1);
    }

    const previousPage = (e) => {
        e.preventDefault();
        if(active === 0) return
        setActive(active - 1);
    }

    return (
        <section id="pagination">
            <ul className="pagination">
                <li className="page-item page-icon" onClick={previousPage}>
                    <a className="page-link" href="#">
                        <span>&laquo;</span>
                    </a>
                </li>

                {
                    pages.map((page, i) => (
                        <li key={i} id={i} className={`page-item ${active === i ? 'active' : ''}`} onClick={activatePage}>
                            <a id={i} className="page-link" href="#">{page}</a>
                        </li>
                    ))
                }

                <li className="page-item page-icon" onClick={nextPage}>
                    <a className="page-link" href="#">
                        <span>&raquo;</span>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Pagination;
