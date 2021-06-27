import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { login, getUser } from 'actions/auth';
import { setError } from 'actions/alerts';

const Login = (props) => {

    // higher component
    const { history } = props;

    // mapStateToProps
    const { isAuthenticated, user, error } = props;

    // actions
    const { login, getUser, setError } = props;

    
    // Check user isn't logged out
    useEffect(() => {
        if (user !== 'loggedOut') {
            getUser();
        }

    }, [getUser, user, history]);

    // If logged in, redirect to home
    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        }
    }, [isAuthenticated, history])

    // Form Data
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    })

    const { name, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();

        if(name === '' || password === '') {
            return setError('Please fill out all fields');
        }

        login(name, password);
    }

    return (
			<>
			  <Heading>Sign into your account</Heading>
              { error && <p> { error } </p> }
			    <form onSubmit={onSubmit}>
			      <input name="name" placeholder="Username" value={name} onChange={onChange} />
		        <input name="password" placeholder="Password" value={password} onChange={onChange} type='password'  />
		        <button>Sign In</button>
		      </form>
			</>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.alerts.error
})

export default connect(mapStateToProps, { login, getUser, setError })(Login);