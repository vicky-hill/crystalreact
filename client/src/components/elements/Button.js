import React from 'react';

/* Props
=================================================== */
// variant: String | primary, secondary, outline-primary, outline-secondary



function Button({ children, variant, onClick }) {
    return (
        <button className={`btn btn-${variant}`} onClick={onClick}>
            { children }
        </button>
    )
}



export default Button;