import React from 'react';
import { Link } from 'react-router-dom';


const Styles = ({ }) => {

    return (
        <div className='m-10'>
            <Link to={`/basic`}>Basic</Link> <br />
            <Link to={`/natours`}>Natours</Link> <br />
            <Link to={`/trillo`}>Trillo</Link> <br />
            <Link to={`/misc`}>Misc</Link> <br />
        </div>
    )
}

export default Styles;
