import React from 'react'

const Navbar = () => {

    //Might want to remove the handleClick funtion on the navlinks
    return (
        <nav>
            <div className="logo">
                <h1><a href="/#home">CUgpa</a>
                </h1>
            </div>

            <ul className="nav-items">
                <li className="nav-item">
                    <a href="/#services">Services</a>
                </li>
                <li className="nav-item">
                    <a href="/#portfolio"> Portfolio</a>
                </li>
                <li className="nav-item">
                    <a href="/#about">About</a>
                </li>
                <li className="nav-item">
                    <a href="/#contact">Contact</a>
                </li>
            </ul>

            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navbar
