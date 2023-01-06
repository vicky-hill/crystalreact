import React from 'react'
import { PropTypes } from 'prop-types'

const Pagination = ({ active, setActive, pages }) => {
    const activatePage = (e) => {
        e.preventDefault();
        setActive(Number(e.target.id));
    }

    const nextPage = (e) => {
        e.preventDefault();
        if (active === pages - 1) return
        setActive(active + 1);
    }

    const previousPage = (e) => {
        e.preventDefault();
        if (active === 0) return
        setActive(active - 1);
    }

    return (
        <ul className="pagination">
            <li className="pagination__item pagination__icon" onClick={previousPage}>
                <a className="pagination__link" href="#">
                    <span>&laquo;</span>
                </a>
            </li>

            {
                [...Array(pages).keys()].map((page, i) => (
                    <li key={i} id={i} className={`pagination__item ${active === i ? 'active' : ''}`} onClick={activatePage}>
                        <a id={i} className="pagination__link" href="#">{page}</a>
                    </li>
                ))
            }

            <li className="pagination__item pagination__icon" onClick={nextPage}>
                <a className="pagination__link" href="#">
                    <span>&raquo;</span>
                </a>
            </li>
        </ul>
    )
}

Pagination.defaultProps = {
    active: 0,
}

Pagination.propTypes = {
    active: PropTypes.number,
    setActive: PropTypes.func,
    pages: PropTypes.number
}

export default Pagination;
