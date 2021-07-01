import React from 'react';
import Button from '../elements/Button';
import Alert from '../elements/Alert';
import Navbar from '../elements/Navbar';
import Badge from '../elements/Badge';
import pink from '../../assets/pink.png';
import book from '../../assets/book.png';


const Home = () => {

    function realFileClick() {
        const realFileBtn = document.getElementById('real-file');
        realFileBtn.click();
    }

    function handleFile() {
        const realFileBtn = document.getElementById('real-file');
        const customText = document.getElementById('custom-text');

        if (realFileBtn.value) {
            customText.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        } else {
            customText.innerHTML = "No file chosen";
        }
    }


    return (
        <>
            <Navbar />
            <div className="container">
                <Button variant="outline-pink">Hello</Button>
                <Alert>A simple alert!</Alert>
                <Badge variant="h2" badge="20">Normal Badge</Badge>
                <Badge variant="pill" badge="new">Pill Badge</Badge>
                <Badge variant="button" badge="35">Button Badge</Badge>

                { /* ===================================
               Cards
            =================================== */ }

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

                <div className="row">
                    <div className="col-5">

                        {/* Basic list */}
                        <h4 className="mb-5">Basic List</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Featured</li>
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>

                    </div>
                </div>

                { /* ===================================
               Lists
            =================================== */ }
                <div className="row">
                    <div className="col">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">Featured</li>
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item">Featured </li>
                            <li className="list-group-item">Cras justo odio <span className="badge badge-pill">16</span> </li>
                            <li className="list-group-item">Dapibus ac facilisis in <span className="badge badge-pill">22</span></li>
                            <li className="list-group-item">Vestibulum at eros<span className="badge badge-pill">12</span> </li>
                        </ul>
                    </div>
                </div>

                { /* ===================================
               Form
            =================================== */ }

                {/* Basic Form */}
                <div className="mb-10" style={{ width: '50%' }}>
                    <h4 className="mb-5">Basic Form</h4>
                    <form>

                        {/* Input */}
                        <div className="input-container">
                            <label htmlFor="input">Username</label>
                            <input className="input" type="text" placeholder="Enter username" />
                        </div>

                        {/* Input Validation */}
                        <div className="input-container">
                            <label htmlFor="input">Password</label>
                            <input className="input valid-feedback" type="password" placeholder="Enter password" value="1234567" />
                            <small className="valid-feedback">Looks good</small>
                        </div>

                        {/* Select */}
                        <div className="input-container">
                            <label htmlFor="cars">Choose a framework:</label>

                            <select name="cars" id="cars" className="select">
                                <option value="volvo">React</option>
                                <option value="saab">Angular</option>
                                <option value="mercedes">Vue</option>
                            </select>
                        </div>


                        {/* Custom Radio & Checkbox: htmlFor must be the same as input id */}
                        {/* Wrap labels in divs to stack them  */}

                        {/* Radio Button */}
                        <div className="input-container">
                            <label htmlFor="visual" className="radio">
                                <input type="radio" name="radio" id="visual" className="radio-input" />
                                <div className="radio-circle"></div>
                                <div className="radio-label">Visual Studio Code</div>
                            </label>
                            <label htmlFor="atom" className="radio">
                                <input type="radio" name="radio" id="atom" className="radio-input" />
                                <div className="radio-circle"></div>
                                <div className="radio-label"> Atom </div>
                            </label>
                        </div>

                        {/* Checkbox */}
                        <div className="input-container">
                            <label htmlFor="mac" className="checkbox">
                                <input type="checkbox" name="Studio Visual Code" className="checkbox-input" id="mac" />
                                <div className="checkbox-box"></div>
                                <div className="checkbox-label">Mac</div>
                            </label>
                            <label htmlFor="pc" className="checkbox">
                                <input type="checkbox" name="Studio Visual Code" className="checkbox-input" id="pc" />
                                <div className="checkbox-box"></div>
                                <div className="checkbox-label"> PC </div>
                            </label>
                        </div>

                        {/* Toggle */}
                        <div className="input-container">
                            <label htmlFor="darkmode" className="toggle">
                                <input type="checkbox" id="darkmode" className="toggle-input" />
                                <div className="toggle-fill"></div>
                                <div className="toggle-label">Darkmode</div>
                            </label>
                        </div>

                        {/* Radio Group */}

                        <div className="input-container radio-group">
                            <input className="radio-group-input" type="radio" value="option1" name="myRadio" id="myRadio1" />
                            <label className="radio-group-label" htmlFor="myRadio1"> &nbsp; 5</label>

                            <input className="radio-group-input" type="radio" value="option2" name="myRadio" id="myRadio2" />
                            <label className="radio-group-label" htmlFor="myRadio2">10</label>

                            <input className="radio-group-input" type="radio" value="option3" name="myRadio" id="myRadio3" />
                            <label className="radio-group-label" htmlFor="myRadio3">15</label>
                        </div>

                        {/* File Upload */}
                        <div className="input-container">
                            <input type="file" name="" id="real-file" hidden="hidden" onChange={handleFile} />
                            <button className="btn btn-primary" type="button" id="custom-button" onClick={realFileClick} >Browse</button>
                            <span className="file-label" id="custom-text">No file chosen</span>
                        </div>

                    </form>
                </div>



            </div>
        </>
    )
}

export default Home;
