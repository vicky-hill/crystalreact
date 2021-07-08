import React from 'react';
import Alert from '../elements/Alert';
import Navbar from '../elements/Navbar';
import Badge from '../elements/Badge';
import Card from '../elements/Card';
import List from '../elements/List';
import Form from '../elements/Form';
import Collapse from '../elements/Collapse';
import Accordion from '../elements/Accordion';
import Toast from '../elements/Toast';
import Tabs from '../elements/Tabs';


const Home = () => {


    return (
        <>
            <Navbar />
            <div className="container">
                <Toast />
                <Alert />
                <Badge />
                <Card />
                <Collapse />
                <Accordion />
                <List />
                <Tabs />
                <Form />
            </div>
        </>
    )
}

export default Home;
