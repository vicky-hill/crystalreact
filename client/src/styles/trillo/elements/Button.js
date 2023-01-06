import React from 'react';

const Button = () => {
    return (
        <button className="btn-round">
            <span className="btn-round-invisible">Only 4 rooms left</span>
            <span className="btn-round-visible">Book now</span>
        </button>
    )
}

export default Button;