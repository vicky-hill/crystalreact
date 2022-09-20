/* eslint-disable */ 'use strict';
import React from 'react';
import Alert from '../elements/Alert';
import Navbar from '../elements/Navbar';
import { NavItem } from '../elements/Navbar';
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
import MegaMenu from '../elements/MegaMenu';
import Glass from '../elements/Glass';
import DragnDrop from '../elements/DragnDrop';
import SidebarWithSub from '../elements/SidebarWithSub';
import Context from '../elements/Context';
import Nav from '../elements/Nav';
import Footer from '../elements/Footer';

// ImageSlider & Gallery
import image1 from '../../assets/slide-1.jpg';
import image2 from '../../assets/slide-2.jpg';
import image3 from '../../assets/slide-3.jpg';
import RoundedSearch from '../elements/RoundedSearch';
import ImageZoom from '../elements/ImageZoom';
const images = [image1, image2, image3];

// Navbar
const navLinks = ["Home", "Elements", "Styles"]

// Bottomnav
const bottomNavLinks = [
    { icon: 'fa-th-large', text: 'Dashboard' },
    { icon: 'fa-folder', text: 'Projects' },
    { icon: 'fa-lock', text: 'Security' },
    { icon: 'fa-user-alt', text: 'Profile' },
]

// Sidenav
const sidenavLinks = [
    { name: 'Dashboard', icon: 'fa-th-large' },
    { name: 'Projects', icon: 'fa-folder' },
    { name: 'Security', icon: 'fa-lock' },
    { name: 'Profile', icon: 'fa-user-alt' },
]

// Accordion
const contentAccordion = [
    { title: 'Item #1', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum temporibus laboriosam non exercitationem perferendis id dolorem veniam mollitia illum ratione.' },
    { title: 'Item #2', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
    { title: 'Item #3', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum temporibus laboriosam.' },
    { title: 'Item #4', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum temporibus laboriosam non exercitationem perferendis id dolorem.' },
]

// Tabs
const tab1 = (
    <>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sapiente quidem quibusd</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi quaerat sun.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla velit, hic cumque ut corrupti!</p>
    </>
)
const tab2 = (
    <>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi quaerat sunt! Magnam</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla velit, hic cumque ut corrupti!</p>
    </>
)
const tab3 = (
    <>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi quaerat sunt! Magnam</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla velit, hic cumque ut corrupti!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos eum exercitationem dolorum architecto consectetur ducimus dolorem vitae corporis, magnam possimus quo iure laudantium temporibus voluptatum nisi delectus, ipsa earum, veritatis fugiat saepe. Quae rerum delectus tempore, obcaecati illo numquam neque.</p>

    </>
)
const contentTabs = [
    { title: 'Item 1', content: tab1 },
    { title: 'Item 2', content: tab2 },
    { title: 'Item 3', content: tab3 },
]

// Drag n Drop
const dndData = [
    { title: 'Group 1', items: ['Item 1', 'Item 2', 'Item 3'] },
    { title: 'Group 2', items: ['Item 4', 'Item 5'] }
]

// Sidebar with Submenu
const submenuLinks = [
    { title: 'Dashboard', icon: 'home-outline' },
    { title: 'Projects', icon: 'folder-outline', sublinks: ['Data', 'Group', 'Team'] },
    { title: 'Messenger', icon: 'chatbubbles-outline' },
    { title: 'Analytics', icon: 'pie-chart-outline' },
    { title: 'Team', icon: 'people-outline' },
    { title: 'Settings', icon: 'settings-outline' }
]


const Home = () => {

    return (
        <>
            <MegaMenu />
            <div className="container main">
                <Sidebar />
                {/* <SidebarWithSub links={submenuLinks} /> */}
                <Sidenav links={sidenavLinks} />
                <Button />
                <Progress />
                <Breadcrumbs />
                <Modal />
                <Spinner />
                <Pagination pages={[1, 2, 3]} />
                <Toast />
                <Alert />
                <DragnDrop data={dndData} />
                <Navbar navLinks={navLinks} />
                <Badge />
                <Card />
                <Context />
                <Collapse />
                <Accordion content={contentAccordion} />
                <Dropdown />
                <List />
                <Carousel images={images} />
                <Gallery images={images} />
                <RoundedSearch />
                <ImageZoom />
                <Tabs content={contentTabs} />
                <Table />
                <Form />
                <Nav />
                <Tooltip />
                {/* <Footer /> */}
            </div>
            <BottomNav navLinks={bottomNavLinks} />
        </>
    )
}

export default Home;
