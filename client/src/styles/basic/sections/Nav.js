import React from 'react';

const Nav = () => {
    return (
        <div className="mb-10">
            { nav1 }
            { nav2 }
            { nav3 }
        </div>
    )
}


const nav1 = (
    <div className="nav1 make-fit">
        <div className="nav1__logo">Crystal</div>
        <nav>
            <ul className="nav1__links">
                <li><a href="#">Services</a> </li>
                <li><a href="#">Projects</a> </li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
        <a href="#" className="nav1__button">Contact</a>
    </div>
)


const nav2 = (
    <div className="nav2 make-fit">
        <div className="nav2__logo">Crystal</div>
        <nav>
            <ul className="nav2__links">
                <li><a href="#">Services</a> </li>
                <li><a href="#">Projects</a> </li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
        <a href="#" className="nav2__button">Contact</a>
    </div>
)

const nav3 = (
    <div className="nav3 make-fit">
        <div className="nav3__logo">Crystal</div>
        <nav>
            <ul className="nav3__links">
                <li><a href="#">Services</a> </li>
                <li><a href="#">Projects</a> </li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
        <a href="#" className="nav3__button">Contact</a>
    </div>
)

export default Nav;
