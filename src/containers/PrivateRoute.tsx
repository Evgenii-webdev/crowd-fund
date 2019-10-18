
import React from 'react';
import { RouteProps, Route, Redirect, RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { UserLevel } from '../constants/types';

interface RoleParam {
    role: string;
}
export type UserRouteProps = RouteComponentProps<RoleParam>;
export interface UserRoleProps extends RouteComponentProps {
    role: string;
}

interface PrivateRouteProps extends RouteProps {
    user: any;
}

const PrivateRoute: React.SFC<PrivateRouteProps> = (props) => {
    const { component, user, ...rest } = props;
    if (!user) {
        return <Redirect to={{ pathname: '/account/login', state: { referrer: props.path } }} />;
    }

    const Component = component as React.ComponentClass<UserRoleProps>;
    const role = (user.type == UserLevel.Admin) ? 'admin' : (user.type == UserLevel.Investor) ? 'investor' : 'issuer';
    return <Route {...rest} render={(props: RouteComponentProps) => <Component {...props} role={role} />} />
}

const mapStateToProps = (state: any) => ({
    user: state.user.user
})

export default connect(mapStateToProps)(PrivateRoute);