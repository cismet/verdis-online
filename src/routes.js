import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout.jsx';
import HomePage from './containers/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage}/>
    <Route path="verdis-html5" component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
