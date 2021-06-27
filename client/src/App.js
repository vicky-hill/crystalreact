// npm install axios node-sass react-router-dom redux react-redux redux-devtools-extension redux-thunk axios

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './main.scss';
import { store } from './store';

import Home from './components/pages/Home';
import Home from './components/pages/Posts';

useEffect(() => {
  store.dispatch(loginCheck());
  store.dispatch(getUser());
}, [])

function App() {
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
