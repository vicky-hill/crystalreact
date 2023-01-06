import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/prism.css'
import { store } from './store';
import { loginCheck, getUser } from './actions/auth';

import Basic from './pages/Basic';
import PrivateRoute from './styles/basic/elements/PrivateRoute';
import Styles from './pages/Styles';

import './main.scss';
// import './main.css';

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
    // store.dispatch(loginCheck());
    // store.dispatch(getUser());
    loadScrollSpy();
  }, [])

  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Basic} />
          <Route exact path='/styles' component={Styles} />
          <Route exact path='/basic' component={Basic} />
        </Switch>
    </Router>
  );
}

export default App;
