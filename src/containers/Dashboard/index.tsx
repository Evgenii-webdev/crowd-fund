
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import Analysis from './Analysis';
import Projects from './Projects';

import { UserRouteProps } from '../../containers/PrivateRoute';

export default class Dashboard extends React.Component<UserRouteProps> {

    constructor(props: Readonly<UserRouteProps>) {
        super(props);

        this.state = {

        }
    }

    render() {
        const { match } = this.props;
        const role = match.params.role;
        console.log('Dashboard', role);
        return (
            <>
                {role === 'admin' && <Analysis />}
                {role === 'investor' && <Analysis />}
                {role === 'issuer' && <Analysis />}
            </>
            // <Switch>
            //     <Route path={`${match.url}/analysis`} component={Analysis} />
            //     <Route path={`${match.url}/projects`} component={Projects} />
            //     <Route path={`/`} component={() => <Redirect to={`${match.url}/analysis`} />} />
            // </Switch >
        )
    }
}