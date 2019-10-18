import * as React from 'react';
import { Route, Switch, RouteComponentProps, Redirect } from 'react-router-dom'

import { UserRouteProps } from '../PrivateRoute';
import NewOfferPage from './NewOfferPage';
import ActiveOffersPage from './ActiveOffersPage';
import OfferListPage from './OfferListPage';
import OfferDetailsPage from './OfferDetailsPage';

export interface IOfferPageProps extends UserRouteProps {
}

const OfferPage: React.SFC<IOfferPageProps> = (props) => {
    const { match } = props;
    const role = match.params.role;

    return (
        <Switch>
            <Route path={`${match.url}/active`} component={ActiveOffersPage} />
            <Route path={`${match.url}/new`} component={NewOfferPage} />
            <Route path={`${match.url}/detail/:id`} component={OfferDetailsPage} />
            <Route exact path={`${match.url}`} component={OfferListPage} />
            <Route render={() => <Redirect to={`${match.url}/list`} />} />
        </Switch>
    )
}

export default OfferPage;