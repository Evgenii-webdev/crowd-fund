import React from "react";

import {
  Typography,
  Button,
  Row,
  Col,
  Card,
  List,
  Avatar,
  Divider,
  Form,
  Input,
  Popover
} from "antd";
import {
  faCircle,
  faAddressCard,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../../assets/css/offerings.css";

const { Title, Paragraph, Text } = Typography;
interface IFetchDataState {
  openOfferings: any;
  pastOfferings: any;
}
export class OfferDetailed extends React.Component<{}, IFetchDataState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      openOfferings: [
        {
          type: "ART",
          photo:
            "https://va4l.imgeng.in/https://ysdocs.s3.amazonaws.com/prod/NOTES/l-XC-w/HXUKrzc7IBz9A4KtZnD4ORny.jpg",
          name: "United Hatzalah Ambulance",
          originated: "YieldStreet Foundation",
          fundraising_goal: 250000,
          left_raise_amount: 29,
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3",
          description:
            "United Hatzalah medics are the fastest voluteer response fleet in the world. They are on the scene within seconds of any incident, which is critial to saving lives. To date, the organization has saved 3.5M lives and counting."
        }
      ],
      pastOfferings: [
        {
          type: "ART",
          photo:
            "https://va4l.imgeng.in/https://ysdocs.s3.amazonaws.com/prod/NOTES/l-XC-w/HXUKrzc7IBz9A4KtZnD4ORny.jpg",
          name: "Impressionist and Modern Art Portfolio",
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3"
        },
        {
          type: "ART",
          photo:
            "https://va4l.imgeng.in/https://ysdocs.s3.amazonaws.com/prod/NOTES/lxcl-g/vSbWLxVoQMjKfbeCK_NnMSWh.png",
          name: "Impressionist and Modern Art Portfolio",
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3"
        },
        {
          type: "ART",
          photo:
            "https://va4l.imgeng.in/https://ysdocs.s3.amazonaws.com/prod/NOTES/2ZmJhA/yWk17IZVmqgp6Qabevb9cEoG.png",
          name: "Impressionist and Modern Art Portfolio",
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3"
        },
        {
          type: "ART",
          photo:
            "https://va4l.imgeng.in/https://ysdocs.s3.amazonaws.com/prod/NOTES/NKqMKw/h59Ojm7JH0GeEBMKpy_zKf2Q.png",
          name: "Impressionist and Modern Art Portfolio",
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3"
        },
        {
          type: "ART",
          photo:
            "https://va4l.imgeng.in/https://ysdocs.s3.amazonaws.com/prod/NOTES/5ZJ19Q/a3zwXUqcjIVO1DPUbzaLKjt1.png",
          name: "Impressionist and Modern Art Portfolio",
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3"
        },
        {
          type: "ART",
          photo:
            "https://va4l.imgeng.in/https://ysdocs.s3.amazonaws.com/prod/NOTES/m6xVcg/XxG5NyaptHG3Qylw9hOUt7S1.jpg",
          name: "Impressionist and Modern Art Portfolio",
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3"
        },
        {
          type: "ART",
          photo:
            "https://va4l.imgeng.in/https://ysdocs.s3.amazonaws.com/prod/NOTES/agQ47Q/V_blAtAEnrVzD3BocbgN8UGO.png",
          name: "Impressionist and Modern Art Portfolio",
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3"
        },
        {
          type: "ART",
          photo:
            "https://va4l.imgeng.in/https://ysdocs.s3.amazonaws.com/prod/NOTES/GVOgHA/Xms974jEgd87mvovKcLkjNrH.png",
          name: "Impressionist and Modern Art Portfolio",
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3"
        }
      ]
    };
  }

  private _renderOpenOffering = (data: any) => {
    return (
      <Card className={"border-none"}>
        <Row>
          <Col md={5}>
            <div
              className="offer-img image-bg"
              style={{
                backgroundImage: `url(${data.photo})`,
                height: "300px"
              }}
            />
          </Col>
          <Col md={13} style={{ textAlign: "left", padding: "20px" }}>
            <Text
              className={"offer-type"}
              style={{ color: "grey", fontSize: 16 }}
            >
              {data.type}
            </Text>
            <Title className={"offer-item-name title-bg"} level={4}>
              {data.name}
            </Title>
            <p style={{ fontSize: 18, fontWeight: 500 }}>
              {"Originated by " + data.originated}
            </p>
            <div className="launch_part">
              Launching for first-time investors who completed account set-up
              Friday, June 7 at 3PM EDT
            </div>
            <p>{data.description}</p>
            <Row gutter={8}>
              <Col xs={24} md={9}>
                <div className={"percent-view"}>
                  <Text className={"c-color"}>{`${data.annual}%`}</Text>
                  <br />
                  <Text>Annual Interest</Text>
                </div>
              </Col>
              <Col xs={24} md={9}>
                <div className={"percent-view"}>
                  <Text className={"c-color"}>{`${data.term} Mo.`}</Text>
                  <br />
                  <Text>Term Remaining</Text>
                </div>
              </Col>
            </Row>
            <div className={"offer-type-divider"}>
              <span />
              <p>Recently Funded</p>
              <span />
            </div>
            <div className="funded-content">
              This offering was recently closed. Metrics are expected in 40
              days.
            </div>
          </Col>
          <Col md={6} style={{ textAlign: "center" }}>
            <div
              style={{
                borderRadius: "100%",
                border: "solid 2px rgb(223, 227, 228)",
                width: 200,
                height: 200,
                paddingTop: 50,
                margin: "auto"
              }}
            >
              <Title style={{ color: "#f1592a" }} level={2}>
                {data.left_raise_amount + "k"}
              </Title>
              <Text>AMOUNT LEFT TO RAISE</Text>
            </div>
            <div style={{ marginTop: 20 }}>
              <Title level={4}>{"$" + data.fundraising_goal}</Title>
              <Text>Fundraising Goal</Text>
            </div>
          </Col>
        </Row>
      </Card>
    );
  };

  render() {
    const opportunityData = [
      {
        title: "Moderate Leverage",
        description:
          "The Loan represents 75.0% of the “As-Is” value of the Property, which consists of a Class C, 90-unit apartment complex located in Houston, Texas. The value of the collateral securing the Loan would have to decrease by over 25.0% from its “As-Is” value for the collateral to no longer fully secure the Loan.",
        src: "https://www.yieldstreet.com/static/media/assetBased.cd41a966.svg"
      },
      {
        title: "High Occupancy Rate",
        description:
          "The Property’s occupancy rate has been 90% or greater over the last two years.",
        src: "https://www.yieldstreet.com/static/media/borrower.e940f805.svg"
      },
      {
        title: "Experienced Borrower",
        description:
          "The Borrower is an established owner, investor and manager of multifamily commercial real estate assets in Texas with over 30 years of experience. The Borrower’s real estate portfolio contains over 7,500 units, of which 5,400 are in the Houston metropolitan statistical area.",
        src:
          "https://www.yieldstreet.com/static/media/originator-borrower.f5b9234c.svg"
      },
      {
        title: "Borrower Relationship",
        description:
          "Over the last five years, the Originator has maintained a successful working relationship with the Borrower, having originated nine loans, six of which have been fully repaid. There have been no delinquencies on any of the loans.",
        src:
          "https://www.yieldstreet.com/static/media/provenAssetManagers.e6003873.svg"
      },
      {
        title: "Experienced Originator",
        description:
          "The Originator has closed on more than $620M of loans since its inception in 2003. In the past 10 years, the Originator has originated nearly $270M with zero principal loss and a default rate of 1.3%.",
        src: "https://www.yieldstreet.com/static/media/lock-icon.1791c282.svg"
      }
    ];
    return (
      <>
        <div className="container">
          <section
            id="offer-detail"
            className="offer_list_view center padding-zero"
          >
            <Row>
              <Col>
                <Card bordered={false}>
                  {this.state.openOfferings.map((cursor: any) => {
                    return this._renderOpenOffering(cursor);
                  })}
                </Card>
                <div className="card-content-section">
                  <div className="opportunity-part">
                    <h2 className="opportunity__title text__left">
                      Why We Like This Opportunity
                    </h2>
                    <p className="opportunity__text">
                      All investment offerings are guided by our{" "}
                      <a
                        className="offering-opportunity-philosophy"
                        href="/investment-philosophy"
                      >
                        Investment Philosophy.
                      </a>
                    </p>
                  </div>
                  <List
                    className="text__left"
                    itemLayout="horizontal"
                    dataSource={opportunityData}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <img
                              className="opportunity__image"
                              src={item.src}
                            />
                          }
                          title={
                            <span className="opportunity__item-title">
                              {item.title}
                            </span>
                          }
                          description={
                            <span className="opportunity__item-text">
                              {item.description}
                            </span>
                          }
                        />
                      </List.Item>
                    )}
                  />

                  <div className="opportunity-part">
                    <h2 className="opportunity__title text__center">
                      What Should I Consider?
                    </h2>
                    <Card
                      className="consider__card"
                      style={{ width: "100%" }}
                      bordered={false}
                    >
                      <div className="consider_card_body">
                        <div className="risk__part__c">
                          <p className="risk_title">Market Risk</p>
                          <p className="risk_description">
                            The Property may be adversely impacted by a decline
                            in occupancy rate, deterioration in general economic
                            environment, or excess market supply.
                          </p>
                        </div>
                        <div className="mitigation__part_c">
                          <div className="mitigation_back_c" />
                          <p className="mitigation_title">Risk Mitigation</p>
                          <ul className="mitigation_ul_description">
                            <li className="desc-item__desc">
                              The Borrower has 30 years of experience owning,
                              investing in, and managing real estate properties
                              in the greater Houston market with experience in
                              attracting quality tenants. The Borrower has
                              operated the Property at an occupancy rate in
                              excess of 90% over the last two years.
                            </li>
                            <li className="desc-item__desc">
                              The occupancy rate in the Interloop/South Houston
                              submarket has been above 90% for the past five
                              years with minimal new units scheduled for
                              development.
                            </li>
                            <li className="desc-item__desc">
                              The Property’s asking rent is on the lower end of
                              the range for its submarket, making the Property’s
                              rent appealing to cost-conscious renters.
                              Additionally, multifamily housing is considered
                              one of the more stable real estate asset classes
                              through economic cycles.
                            </li>
                            <li className="desc-item__desc">
                              The Houston area was second in the U.S. for the
                              largest number of jobs added over the last 12
                              months as of December 31, 2018. Per the Appraiser,
                              Houston added nearly 130,000 new jobs in 2018.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                    <Card
                      className="consider__card"
                      style={{ width: "100%" }}
                      bordered={false}
                    >
                      <div className="consider_card_body">
                        <div className="risk__part__c">
                          <p className="risk_title">Default Risk</p>
                          <p className="risk_description">
                            The Borrower may default on its financial
                            obligations.
                          </p>
                        </div>
                        <div className="mitigation__part_c">
                          <div className="mitigation_back_c" />
                          <p className="mitigation_title">Risk Mitigation</p>
                          <ul className="mitigation_ul_description">
                            <li className="desc-item__desc">
                              The Originator has a successful five-year working
                              relationship with the Borrower, who has never been
                              delinquent on loan payments.
                            </li>
                            <li className="desc-item__desc">
                              The Property’s current net operating income covers
                              92.7% of the debt service payments on the Loan.
                            </li>
                            <li className="desc-item__desc">
                              The Borrower has personally guaranteed the Loan,
                              which means the Borrower is personally liable for
                              the Loan’s full repayment.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                    <Card
                      className="consider__card"
                      style={{ width: "100%" }}
                      bordered={false}
                    >
                      <div className="consider_card_body">
                        <div className="risk__part__c">
                          <p className="risk_title">Borrower Risk</p>
                          <p className="risk_description">
                            The Borrower may not have represented itself
                            accurately.
                          </p>
                        </div>
                        <div className="mitigation__part_c">
                          <div className="mitigation_back_c" />
                          <p className="mitigation_title">Risk Mitigation</p>
                          <ul className="mitigation_ul_description">
                            <li className="desc-item__desc">
                              The Borrower is personally liable for the Loan and
                              is financially responsible for any
                              misrepresentation.
                            </li>
                            <li className="desc-item__desc">
                              The Borrower has a successful five-year working
                              relationship with the Originator.
                            </li>
                            <li className="desc-item__desc">
                              The Originator considers the underlying asset to
                              be the primary source of security.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                    <Card
                      className="consider__card"
                      style={{ width: "100%" }}
                      bordered={false}
                    >
                      <div className="consider_card_body">
                        <div className="risk__part__c">
                          <p className="risk_title">Additional Debt Risk</p>
                          <p className="risk_description">
                            The Property has a 2nd lien in addition to
                            YieldStreet’s and the Originator’s loan.
                          </p>
                        </div>
                        <div className="mitigation__part_c">
                          <div className="mitigation_back_c" />
                          <p className="mitigation_title">Risk Mitigation</p>
                          <ul className="mitigation_ul_description">
                            <li className="desc-item__desc">
                              The 2nd lien is subordinated to YieldStreet and is
                              not repaid until the 1st lien has been fully
                              repaid.
                            </li>
                            <li className="desc-item__desc">
                              The 2nd lien contains cross-default provision
                              which triggers a default on the 1st lien if there
                              is any repayment deficiency on either loan.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                    <Card
                      className=" c-card border-weight"
                      title={
                        <span className="c-title">Investment Summary</span>
                      }
                      style={{ width: "100%" }}
                      bordered={false}
                    >
                      <div
                        className="c-dec-o"
                        style={{ display: "inline-block" }}
                      >
                        <p>
                          Avatar Financial Group (“Originator”) recently closed
                          and funded a $4.6M first mortgage loan (“Loan”) to a
                          Texas-based owner, investor and operator of
                          multifamily investment properties (“Borrower”). The
                          Loan is secured by a Class C multifamily property in
                          Houston, Texas and was primarily used to refinance
                          $2.8M of existing indebtedness and distribute $1.6M to
                          the Borrower. YieldStreet is participating in $4.0M,
                          or 87.9%, of the Loan. The remaining $0.6M, or 12.1%
                          of the Loan, will be held by the Originator’s
                          syndicate. The Loan has a 9-month term with a 9-month
                          extension at the Borrower’s option so long as the loan
                          is in good standing. YieldStreet investors are
                          scheduled to receive monthly interest payments at an
                          annualized target rate of 8.0% over the Loan’s term.
                          Principal is expected to be repaid at Loan maturity.
                        </p>
                        <p>
                          For more information on this opportunity, please
                          download the Series Note Supplement.
                        </p>
                      </div>
                      <Divider />
                      <div
                        className="c-dec-o"
                        style={{ display: "inline-block" }}
                      >
                        <span className="c-title">
                          What Secures My Investment?
                        </span>
                        <p style={{ marginTop: "20px" }}>
                          The Loan is secured by a first mortgage lien on the
                          Property, which is the highest priority capital
                          structure position. The Property consists of six,
                          two-story, composition shingled apartment buildings
                          with brick façade located in Houston, Texas. The
                          Property contains 144 parking spaces on-site with
                          walking paths, a courtyard garden, and laundry
                          facilities. Each apartment is furnished with general
                          amenities such as a central HVAC, walk-in closets,
                          dishwasher, refrigerator, and ceramic tile floorings.
                          In aggregate, the Property contains 69,770 square feet
                          in rentable area across 90 apartment units on a
                          2.1-acre lot. During 2018, the Property generated net
                          operating income of $324K and ended the year with an
                          average occupancy rate of 99.0%.
                          <br />
                          The Property was valued at $6.1M on an “As-Is” basis,
                          equating to a loan-to-value (LTV) of 75.0% based on
                          the $4.6M funded to the Borrower at Loan closing. The
                          LTV is a comparison of the loan amount outstanding and
                          the Property’s diligenced value. The value of the
                          Property would have to recover less than 25.0% of the
                          expected “As-Is” value for principal to be at risk.
                          <br />
                          Additionally, the Loan is fully guaranteed by the
                          Borrower, an experienced Texas-based real estate
                          investor, owner, and operator with a net worth of
                          $193.4M and a real estate portfolio containing over
                          7,500 multifamily units. The Borrower’s current real
                          estate holdings, all of which are in Texas, are valued
                          at over $472.0M and generate annual net operating
                          income in excess of $30M. Any repayment shortfall of
                          the Loan is required to be satisfied by the Borrower’s
                          personal assets.
                        </p>
                      </div>
                      <Divider />
                      <div
                        className="c-dec-o"
                        style={{ display: "inline-block" }}
                      >
                        <span className="c-title">How Do I Get Paid?</span>
                        <p style={{ marginTop: "20px" }}>
                          YieldStreet investors are scheduled to receive monthly
                          interest payments at an annualized target rate of 8.0%
                          over the investment’s expected term of 18 months.
                          Principal is expected to be repaid upon loan maturity.
                        </p>
                      </div>
                    </Card>
                  </div>
                  <Row>
                    <Col xs={24} sm={12} md={8} style={{ padding: "20px" }}>
                      <Card
                        className="c-border c-card"
                        title={<span className="c-title">Yield</span>}
                        style={{ width: "100%" }}
                        bordered={false}
                      >
                        <div className="c-dec-o">
                          <p>Gross Yield</p>
                          <p>9%</p>
                        </div>
                        <div className="c-dec-o">
                          <p>YieldStreet Fee</p>
                          <p>1%</p>
                        </div>
                        <div className="c-dec-o">
                          <p>Target Yield</p>
                          <p>8%</p>
                        </div>
                        <div className="c-dec-o">
                          <p>Interest Type</p>
                          <p>Monthly 30/360</p>
                        </div>
                      </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} style={{ padding: "20px" }}>
                      <Card
                        className="c-border c-card"
                        title={<span className="c-title">Schedule</span>}
                        style={{ width: "100%" }}
                        bordered={false}
                      >
                        <div className="c-dec-o">
                          <p>Payment Schedule</p>
                          <p>Monthly Payments</p>
                        </div>
                        <div className="c-dec-o">
                          <p>Prefunded</p>
                          <p style={{ color: "#f1592a" }}>Yes</p>
                        </div>
                        <div className="c-dec-o">
                          <p>Maturity</p>
                          <p>Date</p>
                        </div>
                        <div className="c-dec-o">
                          <p>Initial Maturity</p>
                          <p>2020-02-29</p>
                        </div>
                        <div className="c-dec-o">
                          <p>Extended Maturity</p>
                          <p>2020-11-30</p>
                        </div>
                      </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} style={{ padding: "20px" }}>
                      <Card
                        className="c-border c-card"
                        title={<span className="c-title">Structure</span>}
                        style={{ width: "100%" }}
                        bordered={false}
                      >
                        <div className="c-dec-o">
                          <p>Tax Document</p>
                          <p>1099-INT</p>
                        </div>
                        <div className="c-dec-o">
                          <p>Offering Structure</p>
                          <p style={{ color: "#f1592a" }}>BPDN</p>
                        </div>
                        <div className="c-dec-o">
                          <p>Expenses</p>
                        </div>
                        <div className="c-dec-o">
                          <p>1st Year Expense</p>
                          <p>$100</p>
                        </div>
                        <div className="c-dec-o">
                          <p>Annual Flat Expense</p>
                          <p>$100</p>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <div className="more__questions">
              <Title
                className="question_title"
                style={{ color: "black" }}
                level={2}
              >
                More Questions
              </Title>
              <p className="question_text">
                Feel free to call or email us directly.
              </p>
              <div className="question_part_faq">
                <a href="/offering/2ab4fQ/mailto:investments@yieldstreet.com">
                  Contact Us
                </a>
                <a href="/faq">View FAQ</a>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
