import React from 'react';

const Searchbar = () => {
    return (
        <form className="search">
            <input type="text" className="search-input" placeholder="Search hotels" />
            <button className="search-btn">
                <i class="search-icon icon-magnifying-glass"></i>
            </button>
        </form>
    )
}

export default Searchbar;
