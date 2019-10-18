import React, { Component } from "react";
import {
  Typography,
  Tree,
  Button,
  Row,
  Col,
  Card,
  Divider,
  Form,
  Input,
  Popover
} from "antd";
import "../../../assets/css/education.css";
import { Link, animateScroll as scroll } from "react-scroll";
import marked from "marked";
const { Title, Paragraph, Text } = Typography;
const { TreeNode } = Tree;
const table_of_contents = [
  {
    parent_title: "Overview",
    site_url: "/education/overview",
    sub_items: [
      {
        sub_title: "Regulation Crowdfunding",
        section_id: "regulation-crowdfunding"
      },
      {
        sub_title: "About BRITE",
        section_id: "about-brite"
      },
      {
        sub_title: "The DO's and DON'Ts of BRITE",
        section_id: "the-dos-and-donts-of-brite"
      },
      {
        sub_title: "Before You Start: First Things First",
        section_id: "before-you-start-first-things-first"
      }
    ]
  },
  {
    parent_title: "Investor Registration Process",
    site_url: "/education/investor-registration-process",
    sub_items: [
      {
        sub_title: "Investor Registration Process",
        section_id: "investor-registration-process"
      },
      {
        sub_title: "Opening an Account",
        section_id: "opening-an-account"
      },
      {
        sub_title: "Charges and Fees",
        section_id: "charges-and-fees"
      },
      {
        sub_title: "Conditions and Process",
        section_id: "conditions-and-process"
      },
      {
        sub_title: "Electronic Communications",
        section_id: "electronic-communications"
      }
    ]
  },
  {
    parent_title: "Types of Investments Offered on BRITE",
    site_url: "/education/types-of-investments-offered-on-brite",
    sub_items: [
      {
        sub_title: "Types of Investments Offered on BRITE",
        section_id: "types-of-investments-offered-on-brite"
      },
      {
        sub_title: "Common Stock",
        section_id: "common-stock"
      },
      {
        sub_title: "Preferred Stock",
        section_id: "preferred-stock"
      },
      {
        sub_title: "Convertible Notes",
        section_id: "convertible-notes"
      },
      {
        sub_title: "Debt Promissory Note",
        section_id: "debt-promissory-note"
      },
      {
        sub_title: "Corporate Bond",
        section_id: "corporate-bond"
      },
      {
        sub_title: "Revenue Sharing Notes",
        section_id: "revenue-sharing-notes"
      },
      {
        sub_title: "SAFE Agreements Simple Agreement for Future Equity",
        section_id: "safe-agreements-simple-agreement-for-future-equity"
      },
      {
        sub_title:
          "SAFE+REV Simple Agreement for Future Equity AND Revenue Participation Rights",
        section_id:
          "saferev-simple-agreement-for-future-equity-and-revenue-participation-rights"
      }
    ]
  },
  {
    parent_title: "Risks of Investing",
    site_url: "/education/risks-of-inveseting",
    sub_items: [
      {
        sub_title: "Risks of Investing",
        section_id: "risks-of-investing"
      },
      {
        sub_title: "Risk of Illiquidity",
        section_id: "risk-of-illiquidity"
      },
      {
        sub_title: "Risk of Speculative Investment",
        section_id: "risk-of-speculative-investment"
      },
      {
        sub_title: "Risk of Cancellation Restrictions",
        section_id: "risk-of-cancellation-restrictions"
      },
      {
        sub_title:
          "Risk of Lack of Information for Company/Startup Valuation & Capitalization",
        section_id:
          "risk-of-lack-of-information-for-companystartup-valuation--capitalization"
      },
      {
        sub_title:
          "Risk of Limited Disclosure Requirements for Companies and Ventures",
        section_id:
          "risk-of-limited-disclosure-requirements-for-companies-and-ventures"
      },
      {
        sub_title: "Risk of Investment in Personnel",
        section_id: "risk-of-investment-in-personnel"
      },
      {
        sub_title: "Risk of Crowdfunding Scams and Fraud",
        section_id: "risk-of-crowdfunding-scams-and-fraud"
      },
      {
        sub_title: "Possibility of Share Dilution",
        section_id: "possibility-of-share-dilution"
      },
      {
        sub_title: "Challenges of Annual Filings with SEC",
        section_id: "challenges-of-annual-filings-with-sec"
      },
      {
        sub_title: "Risk of Very Limited or No Revenue Generation",
        section_id: "risk-of-very-limited-or-no-revenue-generation"
      },
      {
        sub_title:
          "Risk of Legal Disputes and Regulatory Risks Associated with Crowdfunding",
        section_id:
          "risk-of-legal-disputes-and-regulatory-risks-associated-with-crowdfunding"
      },
      {
        sub_title:
          "Risks Associated with Changes in Economic Conditions, Laws, and Technology",
        section_id:
          "risks-associated-with-changes-in-economic-conditions-laws-and-technology"
      },
      {
        sub_title:
          "Uncertainty of a Company's Financial Planning and Forecasts",
        section_id: "uncertainty-of-a-companys-financial-planning-and-forecasts"
      },
      {
        sub_title:
          "Lack of Implementing Adequate Accounting Systems, Financial Controls and Procedures",
        section_id:
          "lack-of-implementing-adequate-accounting-systems-financial-controls-and-procedures"
      },
      {
        sub_title:
          "Uncertainties of Future Funding Rounds for Raising Additional Capital",
        section_id:
          "uncertainties-of-future-funding-rounds-for-raising-additional-capital"
      },
      {
        sub_title:
          "Lack of Issuer's Financial Audits by Qualified Third Parties",
        section_id:
          "lack-of-issuers-financial-audits-by-qualified-third-parties"
      },
      {
        sub_title: "Taxation and Accounting Implications",
        section_id: "taxation-and-accounting-implications"
      },
      {
        sub_title: "Minority Investments and Lack of Investor Control",
        section_id: "minority-investments-and-lack-of-investor-control"
      },
      {
        sub_title: "Diverse Investor Portfolios",
        section_id: "diverse-investor-portfolios"
      },
      {
        sub_title:
          "Successful Completion of Offering and Relationship between Issuer and BRITE",
        section_id:
          "successful-completion-of-offering-and-relationship-between-issuer-and-brite"
      },
      {
        sub_title: "Use of Funds Raised is Subject to Company Discretion",
        section_id: "use-of-funds-raised-is-subject-to-company-discretion"
      },
      {
        sub_title: "Lack of Professional Management and Guidance",
        section_id: "lack-of-professional-management-and-guidance"
      },
      {
        sub_title: "Intellectual Property Risks",
        section_id: "intellectual-property-risks"
      },
      {
        sub_title: "Limited Voting Rights",
        section_id: "limited-voting-rights"
      },
      {
        sub_title:
          "Risks Associated with Each Type of Security Being Offered on BRITE Platform",
        section_id:
          "risks-associated-with-each-type-of-security-being-offered-on-brite-platform"
      },
      {
        sub_title:
          "Risks Associated with Each Type of Security Being Offered on BRITE Platform",
        section_id:
          "risks-associated-with-each-type-of-security-being-offered-on-brite-platform"
      }
    ]
  },
  {
    parent_title: "Investor Limitations",
    site_url: "/education/investor-limitations",
    sub_items: [
      {
        sub_title: "Investor Limitations",
        section_id: "investor-limitations"
      },
      {
        sub_title: "Specific Investment Limits",
        section_id: "specific-investment-limits"
      },
      {
        sub_title: "Who is an Accredited Investor?",
        section_id: "who-is-an-accredited-investor"
      },
      {
        sub_title: "Calculation of Net Worth",
        section_id: "calculation-of-net-worth"
      },
      {
        sub_title: "Investor Requirements and Acknowledgments",
        section_id: "investor-requirements-and-acknowledgments"
      },
      {
        sub_title: "Making an Investment",
        section_id: "making-an-investment"
      },
      {
        sub_title: "Target Offering Amount and Offering Deadline",
        section_id: "target-offering-amount-and-offering-deadline"
      },
      {
        sub_title: "Paying for Your Investment",
        section_id: "paying-for-your-investment"
      },
      {
        sub_title: "Confirmation of Your Transaction",
        section_id: "confirmation-of-your-transaction"
      }
    ]
  },
  {
    parent_title: "Securities Transfer and Resale Limitations",
    site_url: "/education/securities-transfer-and-resale-limitations",
    sub_items: []
  },
  {
    parent_title: "Investment Limitation and Refund Policy",
    site_url: "/education/invesetment-limitation-and-refund-policy",
    sub_items: [
      {
        sub_title: "Earlier Completion of Offering Offering Funded",
        section_id: "earlier-completion-of-offering-offering-funded"
      },
      {
        sub_title:
          "Cancellations and Reconfirmations Based on Material Changes",
        section_id:
          "cancellations-and-reconfirmations-based-on-material-changes"
      },
      {
        sub_title: "Return of Funds if Offering is Not Completed",
        section_id: "return-of-funds-if-offering-is-not-completed"
      }
    ]
  },
  {
    parent_title: "Initiating an Offering",
    site_url: "/education/initiating-an-offering",
    sub_items: [
      {
        sub_title: "Disclosure Requirements",
        section_id: "disclosure-requirements"
      },
      {
        sub_title: "Annual Filing Obligation of Issuers",
        section_id: "annual-filing-obligation-of-issuers"
      },
      {
        sub_title: "Financial Statement Requirements",
        section_id: "financial-statement-requirements"
      },
      {
        sub_title: "Business Plan",
        section_id: "business-plan"
      },
      {
        sub_title: "Limits on Advertising and Promoters",
        section_id: "limits-on-advertising-and-promoters"
      },
      {
        sub_title: "Due Diligence",
        section_id: "due-diligence"
      },
      {
        sub_title: "Disqualification of Issuers",
        section_id: "disqualification-of-issuers"
      },
      {
        sub_title: "Posting an Offering",
        section_id: "posting-an-offering"
      }
    ]
  },
  {
    parent_title: "Issuer Registration Process",
    site_url: "/education/issuer-registration-process",
    sub_items: [
      {
        sub_title: "Opening an Account",
        section_id: "opening-an-account"
      },
      {
        sub_title: "Charges and Fees",
        section_id: "charges-and-fees"
      },
      {
        sub_title: "Conditions and Process",
        section_id: "conditions-and-process"
      },
      {
        sub_title: "Limitation on Issuers",
        section_id: "limitation-on-issuers"
      },
      {
        sub_title: "Communications",
        section_id: "communications"
      }
    ]
  },
  {
    parent_title: "Relationships Between BRITE and Issuers",
    site_url: "/education/relationships-between-brite-and-issuers",
    sub_items: []
  }
];

interface IState {
  markdown: string;
  expended_key: string;
}
export class RelationshipsBriteandIssuers extends Component<IState> {
  public readonly state = {
    markdown: "",
    expended_key: ""
  };
  componentDidMount() {
    const full_url = window.location.href;
    const sub_url = full_url.split("/");

    console.log(this.state.expended_key);
    const readmePath = require("./doc/Relationships Between BRITE and Issuers.md");

    fetch(readmePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({ expended_key: "/" + sub_url[3] + "/" + sub_url[4] });

        this.setState({
          markdown: marked(text)
        });
      });
  }
  onSelect = (selectedKeys: any, info: any) => {
    console.log("selected", selectedKeys[0], info);
    window.location.href = selectedKeys[0];
    // selectedKeys.defaultExpandedKeys = {["0-0"]};
  };
  render() {
    const { markdown } = this.state;
    return (
      <>
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
              <article
                className="education_content"
                dangerouslySetInnerHTML={{ __html: markdown }}
              />
            </Col>
            <Col
              sm={24}
              md={8}
              style={{ marginTop: "18px", position: "sticky", top: "60px" }}
            >
              <Tree
                showLine
                defaultExpandedKeys={[
                  "/education/relationships-between-brite-and-issuers"
                ]}
                onSelect={this.onSelect}
                className="education_sidebar"
              >
                {table_of_contents.map(element => {
                  return (
                    <TreeNode
                      title={element.parent_title}
                      key={element.site_url}
                    >
                      {element.sub_items.map(item => {
                        return (
                          <TreeNode
                            title={
                              <Link
                                activeClass="active"
                                to={item.section_id}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                              >
                                {item.sub_title}
                              </Link>
                            }
                            key={item.sub_title}
                          />
                        );
                      })}
                    </TreeNode>
                  );
                })}
              </Tree>
            </Col>
          </Row>
        </section>
      </>
    );
  }
}
