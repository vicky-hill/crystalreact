import React from 'react';
import Button from '../elements/Button';
import Alert from '../elements/Alert';
import Navbar from '../elements/Navbar';
import Badge from '../elements/Badge';
import Card from '../elements/Card';
import List from '../elements/List';
import Form from '../elements/Form';
import Collapse from '../elements/Collapse';
import Accordion from '../elements/Accordion';
import Toast from '../elements/Toast';


const Home = () => {


    return (
        <>
            <Navbar />
            <div className="container">
                <Toast />
                <Alert />
                <Button />
                <Badge />
                <Card />
                <Collapse />
                <Accordion />
                <List />
                <Form />
            </div>
        </>
    )
}

export default Home;
