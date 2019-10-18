import React from "react";
import { Typography, Row, Col, Collapse } from "antd";
import "../../../assets/css/faq.scss";
import { FormComponentProps } from "antd/lib/form";
import Navbar from "./Sidebar";
import Section from "./Section";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import marked from "marked";
const { Paragraph } = Typography;

interface messageInfoItem {
  project_id: number;
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}

interface faqInfoItem {
  list_item_title: string;
  faq_section_id: string;
  faq_content_id: number;
}
const faqLists = [
  {
    list_item_title: "Investing on YieldStreet",
    faq_section_id: "#invest_section",
    faq_content_id: 0
  },
  {
    list_item_title: "Investing with an IRA",
    faq_section_id: "#ira_section",
    faq_content_id: 1
  },
  {
    list_item_title: "Investor Accreditation",
    faq_section_id: "#accreditation_section",
    faq_content_id: 2
  },
  {
    list_item_title: "My Portfolio",
    faq_section_id: "#portfolio_section",
    faq_content_id: 3
  },
  {
    list_item_title: "Risk Management",
    faq_section_id: "#risk_section",
    faq_content_id: 4
  },
  {
    list_item_title: "YieldStreet Wallet",
    faq_section_id: "#wallet_section",
    faq_content_id: 5
  },
  {
    list_item_title: "Investment Structures",
    faq_section_id: "#structures_section",
    faq_content_id: 6
  },
  {
    list_item_title: "Others",
    faq_section_id: "#others_section",
    faq_content_id: 7
  }
];

const commentsData: messageInfoItem[] = [];
for (let i = 0; i < 23; i++) {
  const item = {
    project_id: i,
    href: "http://ant.design",
    title: `WHAT SETS BRITE APART?`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  };
  commentsData.push(item);
}

interface ICommentFromProps extends FormComponentProps { }
interface IState {
  loading: boolean;
  visible: boolean;
  postVisible: boolean;
  active: null;
  markdown: string;
}
export class Faq extends React.Component<ICommentFromProps, IState> {
  constructor(props: Readonly<ICommentFromProps>) {
    super(props);
  }
  public readonly state = {
    loading: false,
    visible: false,
    postVisible: false,
    active: null,
    markdown: ""
  };
  componentDidMount() {
    const readmePath = require("./Types of Investments Offered on BRITE.md");

    fetch(readmePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: marked(text)
        });
      });
  }
  render() {
    const { markdown } = this.state;
    console.log(markdown.anchor("<h3>"));
    return (
      <>
        <div className="container">
          <article dangerouslySetInnerHTML={{ __html: markdown }} />
          <Row
            gutter={24}
            type="flex"
            justify="space-between"
            className="row"
            align="top"
            style={{ margin: "auto" }}
          >
            <Col
              offset={4}
              sm={24}
              md={16}
              style={{ marginTop: "18px", float: "left" }}
            >
              <Paragraph
                className="title-container"
                style={{ fontSize: "60px" }}
              >
                <span>Frequently Asked Questions</span>
              </Paragraph>
            </Col>
          </Row>
        </div>

        <section className="subject center">
          <Row
            gutter={24}
            type="flex"
            justify="space-between"
            className="row"
            align="top"
            style={{ margin: "auto" }}
          >
            <Col sm={24} md={16} style={{ marginTop: "18px" }}>
              {faqLists.map((item: faqInfoItem, key: any) => (
                <Section
                  title={item.list_item_title}
                  subtitle=""
                  dark={true}
                  section_id={item.faq_content_id}
                  id={item.faq_section_id}
                />
              ))}
            </Col>
            <Col
              sm={24}
              md={8}
              style={{ marginTop: "18px", position: "sticky", top: "60px" }}
            >
              <Navbar />
            </Col>
          </Row>
        </section>
      </>
    );
  }
}
