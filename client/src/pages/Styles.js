import React from 'react';
import { Link } from 'react-router-dom';


const Styles = ({ }) => {

    return (
        <div className='m-10'>
            <Link to={`/basic`}>Basic</Link> <br />
            <Link to={`/natours`}>Natours</Link> <br />
        </div>
    )
}

export default Styles;
