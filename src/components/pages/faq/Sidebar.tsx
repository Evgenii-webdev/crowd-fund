import React, { Component } from "react";
import { Typography, Button } from "antd";
import { Link, animateScroll as scroll } from "react-scroll";
interface faqInfoItem {
  list_item_title: string;
  faq_section_id: string;
}
const { Paragraph } = Typography;
const faqItemLists = [
  {
    list_item_title: "Investing on YieldStreet",
    faq_section_id: "#invest_section"
  },
  {
    list_item_title: "Investing with an IRA",
    faq_section_id: "#ira_section"
  },
  {
    list_item_title: "Investor Accreditation",
    faq_section_id: "#accreditation_section"
  },
  {
    list_item_title: "My Portfolio",
    faq_section_id: "#portfolio_section"
  },
  {
    list_item_title: "Risk Management",
    faq_section_id: "#risk_section"
  },
  {
    list_item_title: "YieldStreet Wallet",
    faq_section_id: "#wallet_section"
  },
  {
    list_item_title: "Investment Structures",
    faq_section_id: "#structures_section"
  },
  {
    list_item_title: "Others",
    faq_section_id: "#others_section"
  }
];
export default class Sidebar extends Component {
  // scrollToTop = () => {
  //   scroll.scrollToTop();
  // };
  private createPost = (event: React.MouseEvent<HTMLButtonElement>) => {
    // this.setState({
    //   postVisible: true
    // });
  };
  render() {
    return (
      <ul className="faq-side-bar">
        {faqItemLists.map((faqList: faqInfoItem) => (
          <li className="faq-side-bar-item">
            <Link
              activeClass="active"
              to={faqList.faq_section_id}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {faqList.list_item_title}
            </Link>
          </li>
        ))}
        <div className="faq-side-footer">
          <span>
            If you have any additional questions please feel free to reach out
            to us.
          </span>
          <Paragraph style={{ width: "100%" }}>
            <Button className="card-btn" onClick={this.createPost}>
              Contact Us
            </Button>
          </Paragraph>
        </div>
      </ul>
    );
  }
}
