import React from 'react';
import {
  persistStore  
} from 'redux-persist';
import { Route,  Switch } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import Layout from './components/Layout';
import RedirectVersiegelteFlaechen from './components/RedirectVersiegelteFlaechen';
//import HomePage from './containers/HomePage';
import VersiegelteFlaechen from './containers/VersiegelteFlaechen';
import ESW from './containers/ESW';
import store from './redux/store';
import ReactLoading from 'react-loading';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { rehydrated: false };
  }

  componentWillMount(){
    persistStore(store,{whitelist: ['auth']}, () => {
      let thisHere=this;
      setTimeout(()=>{
        thisHere.setState({ rehydrated: true });
      },1);
    }); 
  }

  render() {
    if (!this.state.rehydrated){
     return (
        <div>
          <main>   
            <ReactLoading style={{margin: "auto",width: "30%" , height: "60%", padding: "50px"}} type="spin" color="#444" />
          </main>
        </div>
      );
    } else {
      return (
        <div>
            <main>   
              <Route component={Layout}/>   
              <Switch>
                <Route  exact path="/" component={RedirectVersiegelteFlaechen} />  
                <Route exact path="/versiegelteflaechen/:kassenzeichen?" component={VersiegelteFlaechen} />
                <Route exact path="/esw/:kassenzeichen?" component={ESW} />
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
  



