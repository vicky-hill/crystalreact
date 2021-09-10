import React from 'react';
import Form from '../elements/Form';
import Toast from '../elements/Toast';
import Card from '../elements/Card'
import Glass from '../elements/Glass';
import { connect } from 'react-redux'
import { addToast } from '../../actions/toasts'

const Home = ({ addToast }) => {
    return (
        <div className="div m-7">
            <Form />
            
            <button onClick={() => addToast('SUCCESS', 'My Toast', 'This is my toast')}>Create Toast</button>
            <Toast position="bottom-right" />
            <Card />
            <Glass />
        </div>
    )
}


const mapDispatchToProps = {
    addToast
}


export default connect(null, mapDispatchToProps)(Home);
