import "./App.css";
import React from "react";
import { Route, Switch, RouteProps } from "react-router";
import PrivateRoute from './containers/PrivateRoute';
import PublicPage from './containers/PublicPage';
import PrivatePage from './containers/PrivatePage';

export default class App extends React.Component<RouteProps> {
    render() {
        return (
            <Switch>
                <PrivateRoute path='/dash' component={PrivatePage} />
                <Route path='/' component={PublicPage} />
            </Switch>
        );
    }
}
