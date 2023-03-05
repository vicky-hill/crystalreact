import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Badge = ({ children, badgeText, type, pill, light, round, className }) => {
    
    const classes = classNames('badge', {
        [className]: true,
        'badge--header': type && type.includes('h'),
        'badge--light': light,
        'badge--pill': pill,
        'badge--round': round
    });

    const content = <>{children}<span className={classes}>{badgeText}</span></>

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