import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Register from './Register';
import RegisterNin from './RegisterNin';
//import Welcome from './Welcome';
//import Home from './Home';
//import Login from './Login';
//import Dashboard from './Dashboard';

const Main = () => (
  <main>
    <Switch>
            <Route path='/RegisterNin' component={RegisterNin}/>

    </Switch>
  </main>
);

export default Main;
