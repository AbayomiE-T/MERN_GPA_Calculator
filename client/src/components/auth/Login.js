import React, { useState, useEffect } from 'react';

import { Link, Redirect } from 'react-router-dom'

import { connect } from 'react-redux';
import { login } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'

const Login = ({ isAuthenticated, error, login, clearErrors }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        if (error.id === 'LOGIN_FAIL') {
            setMsg(error.msg.msg);
        }
        else {
            setMsg('')
        }

    }, [error])

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = { email, password }
        login(user);
    }

    return (
        isAuthenticated ? <Redirect to="/" /> :
            <>
                {msg ? <p>{msg}</p> : ''}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button>Login</button>
                    <p>Don't have an account?
                <Link to="/register">Register</Link></p>
                </form>
            </>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { clearErrors, login })(Login);