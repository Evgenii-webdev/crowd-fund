import React from 'react';
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router';
import { connect } from 'react-redux';

import PrivateLayout from '../components/layout/PrivateLayout';
import { UserRoleProps } from '../containers/PrivateRoute';
import Dashboard from './Dashboard';
import AccountSetting from './Account/AccountSetting';
import AccountCenter from './Account/AccountCenter';
import OfferPage from './Offer';

const PrivatePage: React.SFC<UserRoleProps> = (props) => {
    const { match, role } = props;
    // console.log('Private Page', role);
    return (
        <PrivateLayout {...props}>
            <Switch>
                <Route path={`${match.url}/:role/setting`} component={AccountSetting} />
                <Route path={`${match.url}/:role/center`} component={AccountCenter} />
                <Route path={`${match.url}/:role/offer`} component={OfferPage} />
                <Route path={`${match.url}/:role`} component={Dashboard} />
                <Route path={`${match.url}/`} component={() => <Redirect to={`${match.url}/${role}`} />} />
            </Switch>
        </PrivateLayout>
    )
}

export default PrivatePage;