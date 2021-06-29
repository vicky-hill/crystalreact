import React from 'react';
import Button from '../elements/Button';
import Alert from '../elements/Alert';
import Navbar from '../elements/Navbar';
import Badge from '../elements/Badge';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Button variant="outline-pink">Hello</Button>
                <Alert>A simple alert!</Alert>
                <Badge variant="h2" badge="20">Normal Badge</Badge>
                <Badge variant="pill" badge="new">Pill Badge</Badge>
                <Badge variant="button" badge="35">Button Badge</Badge>
            
            </div>
        </>
    )
}

export default Home;
