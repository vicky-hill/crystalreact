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

// ImageSlider
import slide1 from '../../assets/slide-1.jpg';
import slide2 from '../../assets/slide-2.jpg';
import slide3 from '../../assets/slide-3.jpg';
const slideImages = [slide1, slide2, slide3];

// Sidenav
const sidenavLinks = [
    { name: 'Dashboard', icon: 'fa-th-large' },
    { name: 'Projects', icon: 'fa-folder' },
    { name: 'Security', icon: 'fa-lock' },
    { name: 'Profile', icon: 'fa-user-alt' },
]

// Accordion
const content = [
    { title: 'Item #1', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum temporibus laboriosam non exercitationem perferendis id dolorem veniam mollitia illum ratione.' },
    { title: 'Item #2', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
    { title: 'Item #3', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum temporibus laboriosam.' },
    { title: 'Item #4', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum temporibus laboriosam non exercitationem perferendis id dolorem.' },
]


const Home = () => {

    return (
        <>
            <Navbar />
            <div className="container main">
                    <Sidebar />
                    <Sidenav links={sidenavLinks} />
                    <Button />
                    <Progress />
                    <Breadcrumbs />
                    <Modal />
                    <Spinner />
                    <Pagination pages={[1, 2, 3]} />
                    <Toast />
                    <Alert />
                    <Badge />
                    <Card />
                    <Collapse />
                    <Accordion content={content} />
                    <Dropdown />
                    <List />
                    <Carousel images={slideImages} />
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
