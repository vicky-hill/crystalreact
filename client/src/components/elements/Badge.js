import React from 'react';
import PropTypes from 'prop-types';
import { getClassName } from '../../utils/getClassName';

const Badge = ({ children, badgeText, type, pill, light, round, className }) => {

    const variations = {
        header: type && type.includes('h') && 'badge--header',
        light: light && 'badge--light',
        pill: pill && 'badge--pill',
        round: round && 'badge--round'
    }

    const content = <>{children}<span className={getClassName('badge', className, variations)}>{badgeText}</span></>

    switch (type) {
        case 'h1':
            return <h1>{content}</h1>

        case 'h2':
            return <h2>{content}</h2>

        case 'h3':
            return <h3>{content}</h3>

        case 'h4':
            return <h4>{content}</h4>

        case 'h5':
            return <h5>{content}</h5>

        case 'h6':
            return <h6>{content}</h6>
        
        case 'button': 
            return (
                <button className="btn btn-primary">
                    { content }
                </button>
            )

        default:
            return null
    }
}

Badge.defaultProp = {
    type: 'h1'
}

Badge.propTypes = {
    children: PropTypes.elementType,
    badgeText: PropTypes.string,
    type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button']),
    pill: PropTypes.bool
}

export default Badge;



// if(typeof children.type === 'function') {
//     console.error('Badge children cannot be React Components');   
//     return null
// }

// if(children.length > 1) {
//    console.error('Badge can only have 1 child');   
//    return null
// }

// const variations = {
//    heading: children.type.includes('h') && 'badge--heading',
//    pill: pill && 'badge--pill',
//    light: light && 'badge--light',
//    round: round && 'badge--round'
// }

// const content = <>{children.props.children}<span className={getClassName('badge', className, variations)}>{badgeText}</span></>

// return React.createElement(children.type, {className: children.props.className ? children.props.className : ''}, content);