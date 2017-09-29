import React from 'react';
import {
  persistStore  
} from 'redux-persist';
import { Route,  Switch } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage';
import Layout from './components/Layout';
//import HomePage from './containers/HomePage';
import VersiegelteFlaechen from './containers/VersiegelteFlaechen';
import store from './redux/store';
import ReactLoading from 'react-loading';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { rehydrated: false }
  }
  componentWillMount(){
    persistStore(store,{whitelist: ['auth']}, () => {
      this.setState({ rehydrated: true });
    }); 
  }
  render() {
    if (!this.state.rehydrated){
     return (
        <div>
          <main>   
            <Route component={Layout}/>  
            <ReactLoading style={{margin: "auto",width: "20%", padding: "50px"}} type="spin" color="#444" />
          </main>
        </div>
      );
    } else {
      return (
        <div>
            <main>   
              <Route component={Layout}/>   
              <Switch>
                <Route exact path="/versiegelteflaechen/:kassenzeichen?" component={VersiegelteFlaechen} />
                <Route exact path="/esw/:kassenzeichen?" component={VersiegelteFlaechen} />
                <Route exact path="/info/:kassenzeichen?" component={VersiegelteFlaechen} />
                <Route exact path="/versickerung/:kassenzeichen?" component={VersiegelteFlaechen} />
                <Route component={NotFoundPage} />
              </Switch>
            </main>
          </div>
      );
    }
  }
}
  



