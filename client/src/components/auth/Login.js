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
                <section className="login-box">
                    <div className="vertical-box">
                        <h1>Welcome Back!</h1>
                        <p>Sign in and take a look at your current GPA and course history, or update your record.</p>
                    </div>

                    <div className="signup-content">
                        <div className="form-wrapper">
                            <h1 className="highlight">Sign in</h1>
                            <p>Don't have an account?&nbsp;
                <Link className="highlight" to="/register">Register</Link>
                            </p>
                            {msg ? <p>{msg}</p> : ''}
                            <form onSubmit={handleSubmit}>
                                <div className="form-item">
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-item">

                                    <input
                                        type="text"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="form-item">
                                    <button>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { clearErrors, login })(Login);