// npm install axios node-sass react-router-dom redux react-redux redux-devtools-extension redux-thunk axios

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './main.scss';
import { store } from './store';
import { loginCheck, getUser } from './actions/auth';

import Home from './components/pages/Home';
import Posts from './components/pages/Posts';
import PrivateRoute from './components/elements/PrivateRoute';

let sections, navLinks;

const loadScrollSpy = () => {
        sections = document.querySelectorAll('section');
        navLinks = document.querySelectorAll('.sidebar a');    
}

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 110;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.sidebar a[href*="#' + id + '"]').classList.add('active');
            })
        }
    })
}

function App() {
  useEffect(() => {
    store.dispatch(loginCheck());
    store.dispatch(getUser());
    loadScrollSpy();
  }, [])

  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute exact path='/' component={Posts} />
        </Switch>
    </Router>
  );
}

export default App;
