import React from 'react';
import PropTypes from 'prop-types';
import { getClassName } from '../../../utils/getClassName';

const Alert = ({ message, variant, closeAlert, className, ...props }) => {

    const variations = {
        variant: variant && `alert-${variant}`
    }

    return (
        message ? (
            <div className={getClassName('alert', className, variations)} {...props}>
                {message}
                <button className='alert__close' onClick={closeAlert}>
                    <span>&times;</span>
                </button>
            </div>
        ) : null
    )
}

Alert.defaultProps = {
    variant: 'primary'
}

Alert.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),
    message: PropTypes.string,
    closeAlert: PropTypes.func
}

export default Alert;
