import React from 'react';
import Button from '../elements/Button';
import Alert from '../elements/Alert';
import Navbar from '../elements/Navbar';
import Badge from '../elements/Badge';
import pink from '../../assets/pink.png';
import book from '../../assets/book.png';


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

                <div className="row">
                    <div className="col-4">

                        {/* Card with Header */}
                        <div className="card card-border-shade">
                            <div className="card-header">
                                Header
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Card Title</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam ad architecto impedit rem!</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                <div className="col-4">

                    {/* Card without header */}
                    <div className="card">
                        <div className="card-body" >
                            <h4 className="card-title">Card Title</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias?</p>
                            <a href="" className="card-link">Read More</a>
                            <a href="" className="card-link">Subscribe</a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-4">

                    {/* Card with image */}
                    <div class="card">
                        <div className="card-image" style={{ backgroundImage: `url(${pink})` }}></div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-outline-pink">Go somewhere</a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-4">

                    {/* Well Card */}
                    <div className="card">
                        <div className="card-body">
                            Some Text
                        </div>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-4">

                    {/* Horizontal card with image */}
                    <div className="card card-horizontal">
                        <div className="card-image" style={{ backgroundImage: `url(${book})` }}></div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn" style={{ background: '#2c3e50' }}>Go somewhere</a>
                        </div>
                    </div>

                </div>
            </div>

            </div>
        </>
    )
}

export default Home;
