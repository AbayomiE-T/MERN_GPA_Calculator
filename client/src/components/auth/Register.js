import React, { useState, useEffect } from 'react';

import { Link, Redirect } from 'react-router-dom'

import { connect } from 'react-redux';
import { register } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'

const Register = ({ isAuthenticated, error, register, clearErrors }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        if (error.id === 'REGISTER_FAIL') {
            setMsg(error.msg.msg);
        }
        else {
            setMsg('')
        }

    }, [error])

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = { name, email, password }

        register(newUser);
    }

    return (
        isAuthenticated ? <Redirect to="/" /> :
            <>
                <section className="sign-up-box">
                    <div className="vertical-box">
                        <h1>Let's get you all set up</h1>
                        <p>In just a few moments, you'll be able to add your courses and see your GPA with ease.</p>
                    </div>
                    <div className="signup-content">

                        <div className="form-wrapper">
                            <h1 className="highlight">Create Account</h1>
                            <p>Already have an account?&nbsp;
                <Link className="highlight" to="/login">Login</Link></p>
                            {msg ? <p>{msg}</p> : ''}
                            <form onSubmit={handleSubmit}>
                                <div className="form-item">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
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
                                    <button>Sign up</button>
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

export default connect(mapStateToProps, { register, clearErrors })(Register);
