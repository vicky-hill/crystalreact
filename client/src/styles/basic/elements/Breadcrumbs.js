import React from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'

const Breadcrumbs = ({ children, className, separator, ...props }) => {

    const classes = classNames('breadcrumbs', {
        [className]: true,
        [`breadcrumbs--${separator}`]: separator
    });

    return (
        <ul className={classes}>
            { children }
        </ul>
    )
}

const Item = ({ children, link, active, separator, className, ...props }) => {

    const classes = classNames('breadcrumbs__item', {
        [className]: true,
        'active': active
    });

    return (
        <li className={classes} {...props}>
            <a href={link} className="breadcrumbs__link">{children}</a>
        </li>
    )
} 

Breadcrumbs.Item = Item;

Item.defaultProps = {
    link: '#'
}

Breadcrumbs.propTypes = {
    separator: PropTypes.oneOf(['slash', 'caret'])
}

Item.propTypes = {
    link: PropTypes.string,
    actve: PropTypes.bool,
    children: PropTypes.element
}


export default Breadcrumbs;
