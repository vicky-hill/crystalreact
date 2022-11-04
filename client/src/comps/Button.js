import React from 'react';
import './Button.scss';

const Button = ({ children, variant, size, outline, rounded, ...props }) => {

    const className = [
        'btn', 
        `btn-${variant}`, 
        `${outline && `btn-outline-${variant}`}`,
        `${rounded && `btn-rounded`}`
    ].join(' ')

    return (
        <button className={className} {...props} >
           { children } 
        </button>
        <div>


        </div>
    )
}

Button.defaultProps = {
    variant: 'primary'
}

export default Button;
