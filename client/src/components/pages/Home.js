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
import Progress from '../elements/Progress';
import Button from '../elements/Button';
import Spinner from '../elements/Spinner';
import Sidenav from '../elements/Sidenav';
import Sidebar from '../elements/Sidebar';
import BottomNav from '../elements/BottomNav';
import Table from '../elements/Table';
import Carousel from '../elements/Carousel';
import Gallery from '../elements/Gallery';
import ScrollSpy from '../elements/ScrollSpy';



const Home = () => {

    return (
        <>
            <Navbar />
            <div className="container main">
                <ScrollSpy />
                <Sidebar />
                <Sidenav />
                <Button />
                <Progress />
                <Breadcrumbs />
                <Modal />
                <Spinner />
                <Pagination />
                <Toast />
                <Alert />
                <Badge />
                <Card />
                <Collapse />
                <Accordion />
                <Dropdown />
                <List />
                <Carousel />
                <Gallery />
                <Tabs />
                <Table />
                <Form />
                <Tooltip />
            </div>
            <BottomNav />
        </>
    )
}

export default Home;
