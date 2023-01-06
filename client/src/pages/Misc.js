import React from 'react';
import Form  from '../styles/misc/elements/Form';
import Toast from '../styles/misc/elements/Toast';
import Glass from '../styles/misc/elements/Glass';
import { connect } from 'react-redux'
import { addToast } from '../actions/toasts'

const Misc = ({ addToast }) => {
    return (
        <div className="div m-7" id="style--misc">
            <Form />
            
            <button onClick={() => addToast('SUCCESS', 'My Toast', 'This is my toast')}>Create Toast</button>
            <Toast position="bottom-right" />
            <Glass />
        </div>
    )
}


const mapDispatchToProps = {
    addToast
}


export default connect(null, mapDispatchToProps)(Misc);
