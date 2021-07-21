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
import Tooltip from '../elements/Tooltip';
import Dropdown from '../elements/Dropdown';
import Pagination from '../elements/Pagination';
import Modal from '../elements/Modal';
import Breadcrumbs from '../elements/Breadcrumbs';


const Home = () => {

    return (
        <>
            <Navbar />
            <div className="container">
                <Breadcrumbs />
                <Modal />
                <Pagination />
                <Toast />
                <Alert />
                <Badge />
                <Card />
                <Collapse />
                <Accordion />
                <Dropdown />
                <List />
                <Tabs />
                <Form />
                <Tooltip />
            </div>
        </>
    )
}

export default Home;
