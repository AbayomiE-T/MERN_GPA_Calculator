import React from 'react'
import { Link } from "react-router-dom"

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
                    <Link to="/">Add Course</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Courses">Courses</Link>
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
