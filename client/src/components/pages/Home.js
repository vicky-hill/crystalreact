import React from 'react';
import Button from '../elements/Button';
import Alert from '../elements/Alert';
import Navbar from '../elements/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <Button variant="outline-pink">Hello</Button>
            <Alert>A simple alert!</Alert>
        </>
    )
}

export default Home;
