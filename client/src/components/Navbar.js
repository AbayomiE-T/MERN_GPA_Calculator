import React from 'react'
import { Link } from "react-router-dom"

import { logout } from '../actions/authActions'
import { clearCourses } from '../actions/courseActions'
import { connect } from 'react-redux';

const Navbar = ({ isAuthenticated, user, logout, clearCourses }) => {

    const handleClick = () => {
        logout();
        clearCourses();
    }

    const authLinks = (
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <span className="nav-link"><strong>{user ? `Welcome back ${user.name}` : ''}</strong></span>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Add Course</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/courses">Courses</Link>
                </li>
                <li className="nav-item" onClick={handleClick}>
                    <span className="nav-link logout">Logout</span>
                </li>
            </ul>
        </div>
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

        <nav className="navbar navbar-expand-md text-white">
            <span className="navbar-brand mb-0 h1">CUgpa <i class="fas fa-book"></i></span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars" style={{ color: '#fff' }}></i>
            </button>

            {isAuthenticated ? authLinks : guestLinks}
        </nav>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, { logout, clearCourses })(Navbar)
