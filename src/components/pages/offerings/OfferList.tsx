import React from "react";

import {
  Typography,
  Button,
  Row,
  Col,
  Card,
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
export class OfferList extends React.Component<{}, IFetchDataState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      openOfferings: [
        {
          offer_id: 1,
          type: "ART",
          photo: "https://brite.us/img/tmp/offer1.png",
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
          offer_id: 2,
          type: "ART",
          photo: "https://brite.us/img/tmp/offer2.png",
          name: "Impressionist and Modern Art Portfolio",
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3"
        },
        {
          offer_id: 3,
          type: "ART",
          photo: "https://brite.us/img/tmp/offer3.png",
          name: "Impressionist and Modern Art Portfolio",
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3"
        },
        {
          offer_id: 4,
          type: "ART",
          photo: "https://brite.us/img/tmp/offer4.png",
          name: "Impressionist and Modern Art Portfolio",
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3"
        },
        {
          offer_id: 5,
          type: "ART",
          photo: "https://brite.us/img/tmp/offer5.png",
          name: "Impressionist and Modern Art Portfolio",
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3"
        },
        {
          offer_id: 6,
          type: "ART",
          photo: "https://brite.us/img/tmp/offer6.png",
          name: "Impressionist and Modern Art Portfolio",
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3"
        },
        {
          offer_id: 7,
          type: "ART",
          photo: "https://brite.us/img/tmp/offer7.png",
          name: "Impressionist and Modern Art Portfolio",
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3"
        },
        {
          offer_id: 8,
          type: "ART",
          photo: "https://brite.us/img/tmp/offer8.jpg",
          name: "Impressionist and Modern Art Portfolio",
          annual: "10",
          term: "21",
          metrics: 38,
          size: "3.3"
        },
        {
          offer_id: 9,
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
  private gotoDetailItem = (item_id: any) => {
    window.location.href = "/offerings/item/" + item_id;
  };
  private _renderOpenOffering = (data: any) => {
    return (
      <Card style={{ boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .1)" }}>
        <Row>
          <Col md={5}>
            <div
              className="offer-img"
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
            <Title className={"offer-item-name"} level={4}>
              {data.name}
            </Title>
            <p style={{ fontSize: 18, fontWeight: 500 }}>
              {"Originated by " + data.originated}
            </p>
            <p>{data.description}</p>
            <Row gutter={8} style={{ marginTop: "50px" }}>
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
              <Col xs={24} md={6}>
                <Button
                  className="brite-btn"
                  onClick={() => {
                    window.location.href = "/offer/item/" + data.offer_id;
                  }}
                >
                  See More Details
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={6} style={{ textAlign: "center" }}>
            <div
              style={{
                borderRadius: "100%",
                border: "solid 2px #f1592a",
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

  private _renderPastOffering = (data: any) => {
    return (
      <Col md={12} sm={24} xs={24}>
        <Card
          style={{
            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .1)",
            marginBottom: "20px"
          }}
        >
          <Row>
            <Col md={24}>
              <div
                className="offer-img"
                style={{
                  backgroundImage: `url(${data.photo})`
                }}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "20px", padding: "10px" }}>
            <Col xs={24} sm={12} md={12} style={{ textAlign: "left" }}>
              <Text
                className={"offer-type"}
                style={{ color: "grey", fontSize: 16 }}
              >
                {data.type}
              </Text>
              <Title className={"offer-item-name"} level={4}>
                {data.name}
              </Title>
              <Row gutter={8}>
                <Col xs={24} md={12}>
                  <div className={"percent-view"}>
                    <Text className={"c-color"}>{`${data.annual}%`}</Text>
                    <br />
                    <Text>Annual Interest</Text>
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div className={"percent-view"}>
                    <Text className={"c-color"}>{`${data.term} Mo.`}</Text>
                    <br />
                    <Text>Term Remaining</Text>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={12} md={12} style={{ textAlign: "center" }}>
              <div className={"offering-size"} style={{}}>
                <Title className={"c-color"} level={3}>
                  {"$" + data.size + "M"}
                </Title>
                <Text>Offering Size</Text>
              </div>
            </Col>
          </Row>
          <div className={"offer-type-divider"}>
            <span />
            <p>Recently Funded</p>
            <span />
          </div>
          <Row>
            <Col>
              <div style={{ textAlign: "center" }}>
                <Text>This offering was recently closed. </Text>
                <br />
                <Text>{`Metrics are expected in ${data.metrics} days.`}</Text>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Button
              className="brite-btn"
              style={{ width: "100%" }}
              onClick={() => {
                window.location.href = "/offer/item/" + data.offer_id;
              }}
            >
              > See Details
            </Button>
          </Row>
        </Card>
      </Col>
    );
  };
  render() {
    return (
      <>
        <section id="top" className="top-menu">
          <Paragraph className={"offer-image-title"}>
            <Title className={"desc1"}>Investing built around you</Title>
            <Title className={"desc2"}>
              We know it’s important to get professional guidance you can trust.
              That’s why our experienced,
              <br />
              licensed reps are available by phone, email, chat, and in-person
              for one-on-one support – when you need it most.
            </Title>
            <Button className="button margin-t-4">
              <a href="#services">TELL ME MORE</a>
            </Button>
          </Paragraph>
        </section>
        <div className="container">
          <section id="offer" className="offer_list_view center">
            <Row>
              <Col>
                <Title className={"desc text-left"}>Open offerings</Title>
                <Card bordered={false}>
                  {this.state.openOfferings.map((cursor: any) => {
                    return this._renderOpenOffering(cursor);
                  })}
                </Card>
              </Col>
              <Col style={{ marginTop: 24 }}>
                <Title className={"desc text-left"}>Past offerings</Title>
                <Card bordered={false}>
                  <Row gutter={16}>
                    {this.state.pastOfferings.map((cursor: any) => {
                      return this._renderPastOffering(cursor);
                    })}
                  </Row>
                </Card>
              </Col>
            </Row>
          </section>
        </div>
      </>
    );
  }
}
