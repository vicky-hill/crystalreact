import React from 'react';

const RoundedSearch = ({ }) => {

    return (
        <section>
            <div className="mb-10">
                <div className='search-bar'>
                    <input className='search-bar__input' placeholder='Search...' />
                    <button className='search-bar__btn'>
                        <i className='fas fa-search' />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default RoundedSearch;
