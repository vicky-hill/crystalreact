/* eslint-disable */ 'use strict';
import React from 'react';
import Alert from '../styles/basic/sections/Alert.section';
import Navbar from '../styles/basic/sections/Navbar';
import { NavItem } from '../styles/basic/sections/Navbar';
import Badge from '../styles/basic/sections/Badge.section';
import Card from '../styles/basic/sections/Card.section';
import List from '../styles/basic/sections/List';
import Form from '../styles/basic/sections/Form';
import Collapse from '../styles/basic/sections/Collapse';
import Accordion from '../styles/basic/sections/Accordion';
import Toast from '../styles/basic/sections/Toast.section';
import Tabs from '../styles/basic/sections/Tabs.section';
import Tooltip from '../styles/basic/sections/Tooltip';
import Dropdown from '../styles/basic/sections/Dropdown';
import Pagination from '../styles/basic/sections/Pagination.section';
import Modal from '../styles/basic/sections/Modal.section';
import Breadcrumbs from '../styles/basic/sections/Breadcrumbs.section';
import Progress from '../styles/basic/sections/Progress.section';
import Button from '../styles/basic/sections/Button.section';
import Spinner from '../styles/basic/sections/Loader.section';
import Sidenav from '../styles/basic/sections/Sidenav';
import Sidebar from '../styles/basic/sections/Sidebar';
import BottomNav from '../styles/basic/sections/BottomNav';
import Table from '../styles/basic/sections/Table';
import Carousel from '../styles/basic/sections/Carousel';
import Gallery from '../styles/basic/sections/Gallery';
import MegaMenu from '../styles/basic/sections/MegaMenu';
import Glass from '../styles/basic/sections/Glass';
import DragnDrop from '../styles/basic/sections/DragnDrop';
import SidebarWithSub from '../styles/basic/sections/SidebarWithSub';
import Context from '../styles/basic/sections/Context.section';
import Nav from '../styles/basic/sections/Nav';
import Footer from '../styles/basic/sections/Footer';
import RoundedSearch from '../styles/basic/sections/RoundedSearch';
import ImageZoom from '../styles/basic/sections/ImageZoom';

// ImageSlider & Gallery
import image1 from '../assets/slide-1.jpg';
import image2 from '../assets/slide-2.jpg';
import image3 from '../assets/slide-3.jpg';
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


const Basic = () => {

    return (
        <div id="style--basic">
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
                <Pagination />
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
        </div>
    )
}

export default Basic;
