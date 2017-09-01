import React from 'react';
import { Route,  Switch } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage';
import Layout from './components/Layout';
import HomePage from './containers/HomePage';

const App = () => (
  <div>
    <main>   
      <Route component={Layout}/>   
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  </div>
)

export default App