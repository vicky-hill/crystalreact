import React from 'react';
import Button from '../elements/Button';
import Alert from '../elements/Alert';
import Navbar from '../elements/Navbar';
import Badge from '../elements/Badge';
import Card from '../elements/Card';
import List from '../elements/List';
import Form from '../elements/Form';


const Home = () => {


    return (
        <>
            <Navbar />
            <div className="container">
                <Button />
                <Alert />
                <Badge />
                <Card />
                <List />
                <Form />
            </div>
        </>
    )
}

export default Home;
