import React from "react";
import { persistStore } from "redux-persist";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import Layout from "./components/Layout";
import RedirectVersiegelteFlaechen from "./components/RedirectVersiegelteFlaechen";
//import HomePage from './containers/HomePage';
import ModeVersiegelteFlaechen from "./containers/ModeVersiegelteFlaechen";
import ModeESW from "./containers/ModeESW";
import ModeInfo from "./containers/ModeInfo";
import store from "./redux/store";
import ReactLoading from "react-loading";
import Landing from "./containers/VerdisOnlineLanding";
import KassenzeichenViewer from "./containers/KassenzeichenViewer";
import VerdisOnlineHelp from "./containers/VerdisOnlineHelp";
export default class App extends React.Component {
    constructor() {
        super();
        this.state = { rehydrated: false };
    }

    componentWillMount() {
        persistStore(store, { whitelist: ["auth"] }, () => {
            let thisHere = this;
            setTimeout(() => {
                thisHere.setState({ rehydrated: true });
            }, 1);
        });

        fetch("/conf/verdis.json").then(function(response) {
            if (response.status === 200) {
                response.text().then(function(content) {
                    const data = JSON.parse(content);
                    store.dispatch({
                        type: "UI_STATE/SET_CONF_DATA",
                        confData: data
                    });
                });
            } else {
                console.log("xxx error", response);
            }
        });
    }

    render() {
        if (!this.state.rehydrated) {
            return (
                <div>
                    <main>
                        <ReactLoading
                            style={{ margin: "auto", width: "30%", height: "60%", padding: "50px" }}
                            type="spin"
                            color="#444"
                        />
                    </main>
                </div>
            );
        } else {
            return (
                <div>
                    <main>
                        <Route component={Layout} />
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route
                                exact
                                path="/meinkassenzeichen/:layers?"
                                component={KassenzeichenViewer}
                            />
                            <Route exact path="/verdisOnlineHilfe" component={VerdisOnlineHelp} />
                            <Route exact path="/2go" component={RedirectVersiegelteFlaechen} />
                            <Route
                                exact
                                path="/2go/versiegelteflaechen/:kassenzeichen?"
                                component={ModeVersiegelteFlaechen}
                            />
                            <Route exact path="/2go/esw/:kassenzeichen?" component={ModeESW} />
                            <Route exact path="/2go/info/:kassenzeichen?" component={ModeInfo} />
                            <Route
                                exact
                                path="/2go/versickerung/:kassenzeichen?"
                                component={ModeVersiegelteFlaechen}
                            />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </main>
                </div>
            );
        }
    }
}
