import React from 'react'
import { getClassName } from '../../utils/getClassName'
import { PropTypes } from 'prop-types';

const Breadcrumbs = ({ children, className, separator, ...props }) => {
    const variations = {
        separator: separator && `breadcrumbs--${separator}`
    }

    return (
        <ul className={getClassName('breadcrumbs', className, variations)}>
            { children }
        </ul>
    )
}

const Item = ({ children, link, active, separator, className, ...props }) => {
    const variations = {
        active: active && 'active'
    }

    return (
        <li className={getClassName('breadcrumbs__item', className, variations)}><a href={link} className="breadcrumbs__link">{children}</a></li>
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
