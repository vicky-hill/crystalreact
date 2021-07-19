import React from 'react';

const Dropdown = () => {

    function toggleDropdown(e) {
        document.querySelector(`[data-dropdown=${e.target.id}]`).classList.toggle('show');
    }

    return (
        <div className="mb-10">
            <div class="dropdown">
                <button class="btn btn-primary btn-dropdown" id="dropdown1" onClick={toggleDropdown}>
                    Dropdown button
                </button>
                <ul class="dropdown-menu" data-dropdown="dropdown1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Dropdown;
