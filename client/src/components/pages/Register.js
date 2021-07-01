import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { register, getUser } from 'actions/auth';
import { setError } from 'actions/alerts';


const Register = (props) => {

    // higher component
    const { history } = props;

    // mapStateToProps
    const { isAuthenticated, error } = props;

    // actions
    const { register, getUser, setError } = props;


    // Check if there's a user to load
    useEffect(() => {
        getUser();

    }, [getUser]);

    // If authenticated, redirect to home
    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        }
    }, [isAuthenticated, history]);

    // Form Data
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        password2: ''
    });

    const { name, password, password2 } = formData;

    // OnChange
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // OnSubmit
    const onSubmit = async e => {
        e.preventDefault();

        if (name === '' || password === '' || password2 === '') {
            return setError('Please fill out all fields');
        }

        if (password !== password2) {
            return setError('Passwords don\'t match');
        }

        register(name, password);
        setFormData({ name: '', password: '', password2: '' })
    }


    return (
        <>
            <Heading>Create a new account</Heading>
            {error && <p> {error} </p>}
            <form onSubmit={onSubmit}>
                <input name="name" placeholder="Username" value={name} onChange={onChange} />
                <input name="password" placeholder="Password" value={password} onChange={onChange} type='password' />
                <input name="password2" placeholder="Confirm Password" value={password2} onChange={onChange} type='password' />
                <button>Sign Up</button>
            </form>
        </>
    )
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.alerts.error
})

export default connect(mapStateToProps, { register, getUser, setError })(Register);
