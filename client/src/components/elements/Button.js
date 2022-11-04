import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({ children, variant, size, outline, rounded, loading, className, ...props }) => {

    let classes = ['btn', `btn-${variant}`];
    
    className && classes.push(className);
    outline && classes.push(`btn-${variant}-outline`);
    rounded && classes.push('btn-round');
    loading && classes.push('btn-loading');
    
    classes = classes.join(' ')

    return (
        <button className={classes} {...props} >
            <span className="btn-text">
                {children}
            </span>
        </button>
    )
}

Button.defaultProps = {
    variant: 'primary'
}

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']),
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    loading: PropTypes.bool,
    children: PropTypes.element
}

export default Button;
