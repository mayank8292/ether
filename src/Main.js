import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Register from './Register';
import Register from './Register';
import Welcome from './Welcome';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Certify from './Certify';
import BankRegistration from './BankRegistration';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Login' component={Login}/>
      <Route path='/Welcome' component={Welcome}/>
      <Route path='/Dashboard' component={Dashboard}/>
      <Route path='/Register' component={Register}/>
      <Route path='/Certify' component={Certify}/>
      <Route path='/BankRegistration' component={BankRegistration}/>

    </Switch>
  </main>
);

export default Main;
