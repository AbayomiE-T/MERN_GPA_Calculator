import React from 'react'
import { Link } from "react-router-dom"

import { logout } from '../actions/authActions'
import { connect } from 'react-redux';

const Navbar = ({ isAuthenticated, user, logout }) => {

    const handleClick = () => {
        logout();
    }

    const authLinks = (
        <ul className="nav-items">
            <li className="nav-item">
                <span><strong>{user ? `Welcome ${user.name}` : ''}</strong></span>
            </li>
            <li className="nav-item">
                <Link to="/">Add Course</Link>
            </li>
            <li className="nav-item">
                <Link to="/courses">Courses</Link>
            </li>
            <li onClick={handleClick} className="nav-item">
                <span>Logout</span>
            </li>
        </ul>
    )

    const guestLinks = (
        <ul className="nav-items">
            <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
            </li>
        </ul>
    )

    return (
        <nav>
            <div className="logo">
                <h1><a href="/#home">CUgpa</a>
                </h1>
            </div>

            {isAuthenticated ? authLinks : guestLinks}

            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, { logout })(Navbar)
