import React, { useState, useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types'
import { getClassName } from '../../utils/getClassName'

const Progress = ({ progress, small, className, ...props }) => {
    const progressBar = useRef()
    const progressText = useRef()
    const cappedProgress = Math.max(0, Math.min(progress, 100))

    useEffect(() => {
        progressBar.current.style.width = `${cappedProgress}%`
        progressText.current.textContent = `${cappedProgress} %`
    }, [progress])

    const variations = {
        small: small && 'progress--small'
    }
    
    return (
        <div className={getClassName('progress', className, variations)} {...props} >
            <div ref={progressBar} className="progress__fill" style={{ width: cappedProgress + '%' }}></div>
            <div ref={progressText} className="progress__text" style={small ? {display: 'none'} : {}}>{cappedProgress} %</div>
        </div>
    )
}

Progress.defaultProps = {
    progress: 0,
}

Progress.propTypes = {
    progress: PropTypes.number,
    small: PropTypes.bool
}

export default Progress
