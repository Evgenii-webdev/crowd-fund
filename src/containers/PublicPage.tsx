import "../App.css";
import React from "react";
import { Route, Switch, RouteComponentProps } from "react-router";
import PublicLayout from "../components/layout/PublicLayout";
import { Home } from "../components/pages/Home";
// wen code start
import { Comments } from "../components/pages/Comments";
import { Feedback } from "../components/pages/Feedback";
import { OfferList } from "../components/pages/offerings/OfferList";
import { OfferDetailed } from "../components/pages/offerings/OfferDetailed";
import { Faq } from "../components/pages/faq/Faq";
import { Overview } from "../components/pages/education/Overview";
import { InvestorRegistrationProcess } from "../components/pages/education/InvestorRegistrationProcess";
import { TypesofInvestmentsOfferedonBRITE } from "../components/pages/education/TypesofInvestmentsOfferedonBRITE";
import { RisksofInvesting } from "../components/pages/education/RisksofInvesting";
import { InvestorLimitations } from "../components/pages/education/InvestorLimitations";
import { SecuritiesTransferandResaleLimitations } from "../components/pages/education/SecuritiesTransferandResaleLimitations";
import { InvestmentLimitationandRefundPolicy } from "../components/pages/education/InvestmentLimitationandRefundPolicy";
import { InitiatinganOffering } from "../components/pages/education/InitiatinganOffering";
import { IssuerRegistrationProcess } from "../components/pages/education/IssuerRegistrationProcess";
import { RelationshipsBriteandIssuers } from "../components/pages/education/RelationshipsBriteandIssuers";
import { Privacy } from "../components/pages/privacy_policy/Privacy";
import { Terms } from "../components/pages/terms_of_service/Terms";
import { Disclaimer } from "../components/pages/disclaimer/Disclaimer";
// wen code end
import Login from "../components/pages/Login";
import { Logout } from "../components/pages/Logout";
import { Register } from "../components/pages/Register";
import { Account } from "../components/pages/Account";
import { FetchData } from "../components/pages/FetchData";
import { Counter } from "../components/pages/Counter";
import Articles from "../components/pages/articles";
import Forms from "../components/forms";

const PublicPage: React.SFC<RouteComponentProps> = props => {
  const { match } = props;
  return (
    <PublicLayout>
      <Switch>
        <Route exact path={`${match.url}home`} component={Home} />
        {/* wen code start */}
        <Route
          path={`${match.url}comments`}
          hidevalue={true}
          component={Comments}
        />
        <Route path={`${match.url}feedback`} component={Feedback} />
        <Route path={`${match.url}offers`} component={OfferList} />
        <Route path={`${match.url}offer/item/:id`} component={OfferDetailed} />
        <Route path="/faq" component={Faq} />
        <Route path="/education/overview" component={Overview} />
        <Route
          path="/education/investor-registration-process"
          component={InvestorRegistrationProcess}
        />
        <Route
          path="/education/types-of-investments-offered-on-brite"
          component={TypesofInvestmentsOfferedonBRITE}
        />
        <Route
          path="/education/risks-of-inveseting"
          component={RisksofInvesting}
        />
        <Route
          path="/education/investor-limitations"
          component={InvestorLimitations}
        />
        <Route
          path="/education/securities-transfer-and-resale-limitations"
          component={SecuritiesTransferandResaleLimitations}
        />
        <Route
          path="/education/invesetment-limitation-and-refund-policy"
          component={InvestmentLimitationandRefundPolicy}
        />
        <Route
          path="/education/initiating-an-offering"
          component={InitiatinganOffering}
        />
        <Route
          path="/education/issuer-registration-process"
          component={IssuerRegistrationProcess}
        />
        <Route
          path="/education/relationships-between-brite-and-issuers"
          component={RelationshipsBriteandIssuers}
        />
        <Route path="/legal/privacy" component={Privacy} />
        <Route path="/legal/terms" component={Terms} />
        <Route path="/legal/disclaimer" component={Disclaimer} />
        {/* wen code end */}
        <Route path={`${match.url}account/login`} component={Login} />
        <Route path={`${match.url}account/logout`} component={Logout} />
        <Route path={`${match.url}account/register`} component={Register} />
        <Route path={`${match.url}account/profile`} component={Account} />
        <Route path={`${match.url}terms`} component={Terms} />
        <Route path={`${match.url}counter`} component={Counter} />
        <Route path={`${match.url}fetch-data`} component={FetchData} />
        <Route path={`${match.url}articles`} component={Articles} />
        <Route path={`${match.url}forms`} component={Forms} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={() => <div>Not Found</div>} />
      </Switch>
    </PublicLayout>
  );
};

export default PublicPage;