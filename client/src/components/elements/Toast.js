import React from 'react';
import { connect } from 'react-redux';
import { removeToast } from '../../actions/toasts';


const Toast = ({ toasts, position, removeToast }) => {

    const generateIcon = (type) => {   
        switch(type) {
            case "INFO":
                return <i class="fas fa-info-circle"/>

            case "WARNING":
                return <i class="fas fa-exclamation-triangle"/>

            case "DANGER":
                return <i class="fas fa-exclamation-circle"/>

            case "SUCCESS":
                return <i class="fas fa-check-circle"/>
            
            default: return;
        }
    }

    const generateBackground = (type) => {   
        switch(type) {
            case "INFO":
                return '#5bc0de'

            case "WARNING":
                return '#f0ad4e'

            case "DANGER":
                return '#d9534f'

            case "SUCCESS":
                return '#5cb85c'
            
            default: return;
        }
    }

    return (
        <div className={`toast-container toast--${position}`}>
            {
                toasts.map(toast => (
                    <div style={{backgroundColor: generateBackground(toast.type)}} key={toast.id} className={`toast toast--${position}`}>
                        <div className="toast-close" onClick={() => removeToast(toast.id)}>&times;</div>
                        <div className="toast-icon">{generateIcon(toast.type)}</div>
                        <div>
                            <p className="toast-title">{toast.title}</p>
                            <p className="toast-message">{toast.message}</p>
                        </div>
                    </div>
                ))
            }

        </div>

    )
}



const mapStateToProps = (state) => ({
    toasts: state.toasts
})

const mapDispatchToProps = {
    removeToast
}


export default connect(mapStateToProps, mapDispatchToProps)(Toast);
