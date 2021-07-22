import React from 'react';

const Pagination = () => {

    const selectPage = (e) => {
        e.preventDefault();

        const pages = document.getElementsByClassName('page-item');
        const clickedPage = e.target.parentElement;

        // Deactivate all pages that aren't the target
        for (let i = 0; i < pages.length; i++) {
            if(!clickedPage.classList.contains('page-icon')) {
                if (pages[i] !== clickedPage) {
                    pages[i].classList.remove('active');
                } else {
                    pages[i].classList.add('active');
                }
            }
        }
    }

    return (
        <div className="mb-10">
            <ul className="pagination" onClick={selectPage}>
                <li className="page-item page-icon">
                    <a className="page-link" href="#">
                        <span>&laquo;</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item page-icon">
                    <a className="page-link" href="#">
                        <span>&raquo;</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination;
