
import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import { Row, Col, PageHeader } from 'antd';

import RegisterForm from './register';
import AddBankForm from './investor/AddBankForm';
import CreditCardForm from './investor/CreditCardForm';
import InvestorVerified from './investor/InvestorVerified';
import Questionary from './investor/Questionary';
import NewOfferForm from './issuer/NewOfferForm';
import IssuerVerified from './issuer/IssuerVerified';

import { OFFER_TYPES } from '../../constants/offer-types';

const Forms: React.SFC<RouteComponentProps> = (props) => {
    const { match, history } = props;
    console.log(match);
    return (
        <Row gutter={24} className='row' align="top" style={{ margin: "auto" }}>
            <Col xs={0} md={4}>
                <div className='sidebar center'>
                    <p>Page Left Sidebar</p>
                </div>
            </Col>

            <Col xs={24} md={16}>
                <PageHeader onBack={history.goBack} title='Forms' />
                <Switch>
                    <Route path={`${match.url}/register`} component={RegisterForm}></Route>
                    <Route path={`${match.url}/investor/bank`} component={AddBankForm}></Route>
                    <Route path={`${match.url}/investor/credit`} component={CreditCardForm}></Route>
                    <Route path={`${match.url}/investor/verified`} component={InvestorVerified}></Route>
                    <Route path={`${match.url}/investor/questionary`} component={Questionary}></Route>
                    <Route path={`${match.url}/issuer/offer`} render={(props) => <NewOfferForm {...props} offerTypes={OFFER_TYPES} />}></Route>
                    <Route path={`${match.url}/issuer/verified`} component={IssuerVerified}></Route>
                </Switch>
            </Col>

            <Col xs={0} md={4}>
                <div className='sidebar center'>
                    <p>Page Right Sidebar</p>
                </div>
            </Col>
        </Row >
    )
}

export default Forms;
