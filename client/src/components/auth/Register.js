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
                {msg ? <p>{msg}</p> : ''}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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
                    <button>Register</button>
                    <p>Already have an account?
                <Link to="/login">Login</Link></p>
                </form>
            </>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(Register);
