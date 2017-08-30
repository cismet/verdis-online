import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import XHome from '../example-home'
import XAbout from '../example-about'
import NotFoundPage from '../../components/NotFoundPage.jsx';
import Layout from '../../components/Layout.jsx';
import HomePage from '../HomePage.jsx';

const App = () => (
  <div>
    <main>   
      <Route component={Layout}/>   
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ex/" component={XHome} />
        <Route exact path="/ex/about-us" component={XAbout} />
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  </div>
)

export default App