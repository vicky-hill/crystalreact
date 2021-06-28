// npm install axios node-sass react-router-dom redux react-redux redux-devtools-extension redux-thunk axios

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './main.scss';
import { store } from './store';
import { loginCheck, getUser } from './actions/auth';

import Home from './components/pages/Home';
import Posts from './components/pages/Posts';
import PrivateRoute from './components/elements/PrivateRoute';


function App() {
  useEffect(() => {
    store.dispatch(loginCheck());
    store.dispatch(getUser());
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
