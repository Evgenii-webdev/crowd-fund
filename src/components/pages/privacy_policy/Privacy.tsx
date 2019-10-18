import React, { Component } from "react";
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
import "../../../assets/css/legal.css";
import { Link, animateScroll as scroll } from "react-scroll";
const { Title, Paragraph, Text } = Typography;
interface table_of_content {
  list_item_title: string;
  list_item_section_id: string;
  list_item_content_id: number;
}
const table_of_contents = [
  {
    list_item_title: "WHAT INFORMATION DO WE COLLECT?",
    list_item_section_id: "#collect_section",
    list_item_content_id: 0
  },
  {
    list_item_title: "HOW DO WE USE YOUR INFORMATION?",
    list_item_section_id: "#information_section",
    list_item_content_id: 1
  },
  {
    list_item_title: "WILL YOUR INFORMATION BE SHARED WITH ANYONE?",
    list_item_section_id: "#shared_section",
    list_item_content_id: 2
  },
  {
    list_item_title: "WHO WILL YOUR INFORMATION BE SHARED WITH?",
    list_item_section_id: "#be_shared_section",
    list_item_content_id: 3
  },
  {
    list_item_title: "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
    list_item_section_id: "#technologies_section",
    list_item_content_id: 4
  },
  {
    list_item_title: "DO WE USE GOOGLE MAPS?",
    list_item_section_id: "#map_section",
    list_item_content_id: 5
  },
  {
    list_item_title: "HOW DO WE HANDLE YOUR SOCIAL LOGINS?",
    list_item_section_id: "#handle_section",
    list_item_content_id: 6
  },
  {
    list_item_title: "IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?",
    list_item_section_id: "#transferred_section",
    list_item_content_id: 7
  },
  {
    list_item_title: "HOW LONG DO WE KEEP YOUR INFORMATION?",
    list_item_section_id: "#keep_section",
    list_item_content_id: 8
  },
  {
    list_item_title: "HOW DO WE KEEP YOUR INFORMATION SAFE?",
    list_item_section_id: "#safe_section",
    list_item_content_id: 9
  },
  {
    list_item_title: "DO WE COLLECT INFORMATION FROM MINORS?",
    list_item_section_id: "#minors_section",
    list_item_content_id: 10
  },
  {
    list_item_title: "WHAT ARE YOUR PRIVACY RIGHTS?",
    list_item_section_id: "#privacy_section",
    list_item_content_id: 11
  },
  {
    list_item_title: "CONTROLS FOR DO-NOT-TRACK FEATURES",
    list_item_section_id: "#feature_section",
    list_item_content_id: 12
  },
  {
    list_item_title: "DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
    list_item_section_id: "#specific_section",
    list_item_content_id: 13
  },
  {
    list_item_title: "DO WE MAKE UPDATES TO THIS POLICY?",
    list_item_section_id: "#updates_section",
    list_item_content_id: 14
  },
  {
    list_item_title: "HOW CAN YOU CONTACT US ABOUT THIS POLICY?",
    list_item_section_id: "#policy_section",
    list_item_content_id: 15
  }
];
export class Privacy extends Component {
  render() {
    return (
      <>
        <section id="top" className="top-menu">
          <Paragraph className={"legal-image-title legal-privacy"} />
        </section>
        <div className="container">
          <section id="privacy" className="privacy_list_view center">
            <Row>
              <Col>
                <div className="privacy_content_view">
                  <span className="title">PRIVACY POLICY</span>
                  <span className="sub-title">Last updated June 16, 2019</span>
                  <span className="description">
                    Thank you for choosing to be part of our community at BRITE
                    Investments, Inc., doing business as <strong>BRITE</strong>,
                    we, us, or our. We are committed to protecting your personal
                    information and your right to privacy. If you have any
                    questions or concerns about our policy, or our practices
                    with regards to your personal information, please contact us
                    at web@brite.us. When you visit our website brite.us, mobile
                    application, and use our services, you trust us with your
                    personal information. We take your privacy very seriously.
                    In this privacy notice, we describe our privacy policy. We
                    seek to explain to you in the clearest way possible what
                    information we collect, how we use it and what rights you
                    have in relation to it. We hope you take some time to read
                    through it carefully, as it is important. If there are any
                    terms in this privacy policy that you do not agree with,
                    please discontinue use of our Sites or Apps and our
                    services. This privacy policy applies to all information
                    collected through our website (such as brite.us), mobile
                    application, ("Apps"), and/or any related services, sales,
                    marketing or events (we refer to them collectively in this
                    privacy policy as the "Sites").{" "}
                  </span>
                  <span className="sub-description">
                    Please read this privacy policy carefully as it will help
                    you make informed decisions about sharing your personal
                    information with us.
                  </span>
                </div>
                <div className="table_of_contents">
                  <span className="policy_item_title">Table Of Contents</span>
                  <ul className="privacy-list-bar">
                    {table_of_contents.map(
                      (item: table_of_content, key: any) => (
                        <li className="list-bar-item" key={key}>
                          <Link
                            activeClass="active"
                            to={item.list_item_section_id}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                          >
                            {item.list_item_title}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <section className="policy_list_section" id="#collect_section">
                  <span className="policy_item_title">
                    WHAT INFORMATION DO WE COLLECT?{" "}
                  </span>
                  <span className="policy_item_sub_title">
                    Personal information you disclose to us{" "}
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short:</strong> We collect personal information
                    that you provide to us such as name, address, contact
                    information, passwords and security data, payment
                    information, and social media login data. We collect
                    personal information that you voluntarily provide to us when
                    registering at the Sites or Apps, expressing an interest in
                    obtaining information about us or our products and services,
                    when participating in activities on the Sites or Apps (such
                    as posting messages in our online forums or entering
                    competitions, contests or giveaways) or otherwise contacting
                    us. The personal information that we collect depends on the
                    context of your interactions with us and the Sites or Apps,
                    the choices you make and the products and features you use.
                    The personal information we collect can include the
                    following: Name and Contact Data. We collect your first and
                    last name, email address, postal address, phone number, and
                    other similar contact data. Credentials. We collect
                    passwords, password hints, and similar security information
                    used for authentication and account access. Payment Data. We
                    collect data necessary to process your payment if you make
                    purchases, such as your payment instrument number (such as a
                    credit card number), and the security code associated with
                    your payment instrument. All payment data is stored by our
                    payment processor and you should review its privacy policies
                    and contact the payment processor directly to respond to
                    your questions. Social Media Login Data. We provide you with
                    the option to register using social media account details,
                    like your Facebook, Twitter or other social media account.
                    If you choose to register in this way, we will collect the
                    Information described in the section called{" "}
                    <Link
                      activeClass="active"
                      to="#handle_section"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      style={{ color: "#f1592a" }}
                    >
                      "HOW DO WE HANDLE YOUR SOCIAL LOGINS"
                    </Link>{" "}
                    below. All personal information
                    that you provide to us must be true, complete and accurate,
                    and you must notify us of any changes to such personal
                    information.
                  </span>
                  <span className="policy_item_sub_title">
                    Information automatically collected
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short:</strong> Some information such as IP
                    address and/or browser and device characteristics is
                    collected automatically when you visit our Sites or Apps. We
                    automatically collect certain information when you visit,
                    use or navigate the Sites or Apps. This information does not
                    reveal your specific identity (like your name or contact
                    information) but may include device and usage information,
                    such as your IP address, browser and device characteristics,
                    operating system, language preferences, referring URLs,
                    device name, country, location, information about how and
                    when you use our Sites or Apps and other technical
                    information. This information is primarily needed to
                    maintain the security and operation of our Sites or Apps,
                    and for our internal analytics and reporting purposes. Like
                    many businesses, we also collect information through cookies
                    and similar technologies.
                  </span>
                  <span className="policy_item_sub_title">
                    Information collected through our Apps
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short:</strong> We may collect information
                    regarding your geo-location, mobile device, push
                    notifications, when you use our apps.
                  </span>
                  <span className="policy_item_description">
                    If you use our Apps, we may also collect the following
                    information:
                  </span>
                  <ul className="policy_ul_bar">
                    <li className="policy_li_item">
                      <span>
                        Geo-Location Information. We may request access or
                        permission to and track location-based information from
                        your mobile device, either continuously or while you are
                        using our mobile application, to provide location-based
                        services. If you wish to change our access or
                        permissions, you may do so in your devices settings.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        Mobile Device Access. We may request access or
                        permission to certain features from your mobile device,
                        including your mobile devices contacts, social media
                        accounts, reminders, and other features. If you wish to
                        change our access or permissions, you may do so in your
                        devices settings.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        Mobile Device Data. We may automatically collect device
                        information (such as your mobile device ID, model and
                        manufacturer), operating system, version information and
                        IP address.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        Push Notifications. We may request to send you push
                        notifications regarding your account or the mobile
                        application. If you wish to opt-out from receiving these
                        types of communications, you may turn them off in your
                        devices settings.
                      </span>
                    </li>
                  </ul>

                  <span className="policy_item_sub_title">
                    Information collected from other sources
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short:</strong> We may collect limited data from
                    public databases, marketing partners, social media
                    platforms, and other outside sources. We may obtain
                    information about you from other sources, such as public
                    databases, joint marketing partners, social media platforms
                    (such as Facebook), as well as from other third parties.
                    Examples of the information we receive from other sources
                    include: social media profile information (your name,
                    gender, birthday, email, current city, state and country,
                    user identification numbers for your contacts, profile
                    picture URL and any other information that you choose to
                    make public); marketing leads and search results and links,
                    including paid listings (such as sponsored links).
                  </span>
                </section>
                <section
                  className="policy_list_section"
                  id="#information_section"
                >
                  <span className="policy_item_title">
                    HOW DO WE USE YOUR INFORMATION?
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short:</strong> We process your information for
                    purposes based on legitimate business interests, the
                    fulfillment of our contract with you, compliance with our
                    legal obligations, and/or your consent.
                  </span>
                  <span className="policy_item_description">
                    We use personal information collected via our Sites or Apps
                    for a variety of business purposes described below. We
                    process your personal information for these purposes in
                    reliance on our legitimate business interests, in order to
                    enter into or perform a contract with you, with your
                    consent, and/or for compliance with our legal obligations.
                    We indicate the specific processing grounds we rely on next
                    to each purpose listed below.
                  </span>
                  <span className="policy_item_description">
                    We use the information we collect or receive:
                  </span>
                  <ul className="policy_ul_bar">
                    <li className="policy_li_item">
                      <span>
                        <strong>
                          To facilitate account creation and logon process.
                        </strong>{" "}
                        If you choose to link your account with us to a third
                        party account *(such as your Google or Facebook
                        account), we use the information you allowed us to
                        collect from those third parties to facilitate account
                        creation and logon process. See the section below headed{" "}
                        <Link
                          activeClass="active"
                          to="#handle_section"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}
                          style={{ color: "#f1592a" }}
                        >
                          "HOW DO WE HANDLE YOUR SOCIAL LOGINS"
                        </Link>{" "}
                        for further information.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>
                          To send you marketing and promotional communications.
                        </strong>{" "}
                        We and/or our third party marketing partners may use the
                        personal information you send to us for our marketing
                        purposes, if this is in accordance with your marketing
                        preferences. You can opt-out of our marketing emails at
                        any time (see the{" "}
                        <Link
                          activeClass="active"
                          to="#handle_section"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}
                          style={{ color: "#f1592a" }}
                        >
                          "WHAT ARE YOUR PRIVACY RIGHTS"
                        </Link>{" "}
                        below).
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>
                          To send administrative information to you.
                        </strong>{" "}
                        We may use your personal information to send you
                        product, service and new feature information and/or
                        information about changes to our terms, conditions, and
                        policies.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>Fulfill and manage your orders.</strong> We may
                        use your information to fulfill and manage your orders,
                        payments, returns, and exchanges made through the Sites
                        or Apps.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>To post testimonials.</strong> We post
                        testimonials on our Sites or Apps that may contain
                        personal information. Prior to posting a testimonial, we
                        will obtain your consent to use your name and
                        testimonial. If you wish to update, or delete your
                        testimonial, please contact us at dpo@brite.us and be
                        sure to include your name, testimonial location, and
                        contact information.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>Request Feedback.</strong> We may use your
                        information to request feedback and to contact you about
                        your use of our Sites or Apps.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>To protect our Sites.</strong> We may use your
                        information as part of our efforts to keep our Sites or
                        Apps safe and secure (for example, for fraud monitoring
                        and prevention).
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>To enable user-to-user communications.</strong>{" "}
                        We may use your information in order to enable
                        user-to-user communications with each user's consent.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>
                          To enforce our terms, conditions and policies.
                        </strong>
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>
                          To respond to legal requests and prevent harm.{" "}
                        </strong>{" "}
                        If we receive a subpoena or other legal request, we may
                        need to inspect the data we hold to determine how to
                        respond.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>For other Business Purposes. </strong> We may
                        use your information for other Business Purposes, such
                        as data analysis, identifying usage trends, determining
                        the effectiveness of our promotional campaigns and to
                        evaluate and improve our Sites or Apps, products,
                        services, marketing and your experience.
                      </span>
                    </li>
                  </ul>
                </section>
                <section className="policy_list_section" id="#shared_section">
                  <span className="policy_item_title">
                    WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short:</strong> We only share information with
                    your consent, to comply with laws, to protect your rights,
                    or to fulfill business obligations.
                  </span>
                  <span className="policy_item_description">
                    We may process or share data based on the following legal
                    basis:
                  </span>

                  <ul className="policy_ul_bar">
                    <li className="policy_li_item">
                      <span>
                        <strong>Consent:</strong> We may process your data if
                        you have given us specific consent to use your personal
                        information in a specific purpose.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>Legitimate Interests:</strong> We may process
                        your data when it is reasonably necessary to achieve our
                        legitimate business interests.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>Performance of a Contract:</strong> Where we
                        have entered into a contract with you, we may process
                        your personal information to fulfill the terms of our
                        contract.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>Legal Obligations: </strong> We may disclose
                        your information where we are legally required to do so
                        in order to comply with applicable law, governmental
                        requests, a judicial proceeding, court order, or legal
                        process, such as in response to a court order or a
                        subpoena (including in response to public authorities to
                        meet national security or law enforcement requirements).
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>Vital Interests: </strong> We may disclose your
                        information where we believe it is necessary to
                        investigate, prevent, or take action regarding potential
                        violations of our policies, suspected fraud, situations
                        involving potential threats to the safety of any person
                        and illegal activities, or as evidence in litigation in
                        which we are involved.
                      </span>
                    </li>
                  </ul>
                  <span className="policy_item_description">
                    More specifically, we may need to process your data or share
                    your personal information in the following situations:
                  </span>
                  <ul className="policy_ul_bar">
                    <li className="policy_li_item">
                      <span>
                        <strong>
                          Vendors, Consultants and Other Third-Party Service
                          Providers.
                        </strong>{" "}
                        We may share your data with third party vendors, service
                        providers, contractors or agents who perform services
                        for us or on our behalf and require access to such
                        information to do that work. Examples include: payment
                        processing, data analysis, email delivery, hosting
                        services, customer service and marketing efforts. We may
                        allow selected third parties to use tracking technology
                        on the Sites or Apps, which will enable them to collect
                        data about how you interact with the Sites or Apps over
                        time. This information may be used to, among other
                        things, analyze and track data, determine the popularity
                        of certain content and better understand online
                        activity. Unless described in this Policy, we do not
                        share, sell, rent or trade any of your information with
                        third parties for their promotional purposes.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>Business Transfers.</strong> We may share or
                        transfer your information in connection with, or during
                        negotiations of, any merger, sale of company assets,
                        financing, or acquisition of all or a portion of our
                        business to another company.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>Business Partners.</strong> We may share your
                        information with our business partners to offer you
                        certain products, services or promotions.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>Legal Obligations: </strong> We may disclose
                        your information where we are legally required to do so
                        in order to comply with applicable law, governmental
                        requests, a judicial proceeding, court order, or legal
                        process, such as in response to a court order or a
                        subpoena (including in response to public authorities to
                        meet national security or law enforcement requirements).
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        <strong>Other Users. </strong> When you share personal
                        information (for example, by posting comments,
                        contributions or other content to the Sites or Apps) or
                        otherwise interact with public areas of the Sites or
                        Apps, such personal information may be viewed by all
                        users and may be publicly distributed outside the Sites
                        or Apps in perpetuity. If you interact with other users
                        of our Sites or Apps and register through a social
                        network (such as Facebook), your contacts on the social
                        network will see your name, profile photo, and
                        descriptions of your activity. Similarly, other users
                        will be able to view descriptions of your activity,
                        communicate with you within our Sites or Apps, and view
                        your profile.
                      </span>
                    </li>
                  </ul>
                </section>
                <section
                  className="policy_list_section"
                  id="#be_shared_section"
                >
                  <span className="policy_item_title">
                    WHO WILL YOUR INFORMATION BE SHARED WITH?
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short:</strong> We only share information with
                    the following third parties.
                  </span>
                  <span className="policy_item_description">
                    We only share and disclose your information with the
                    following third parties. We have categorized each party so
                    that you may be easily understand the purpose of our data
                    collection and processing practices. If we have processed
                    your data based on your consent and you wish to revoke your
                    consent, please contact us.
                  </span>

                  <ul className="policy_ul_bar">
                    <li className="policy_li_item">
                      <div className="li_section">
                        <strong>Invoice and Billing</strong>{" "}
                        <span>Square, PayPal, Stripe and Coinbase</span>
                      </div>
                    </li>
                    <li className="policy_li_item">
                      <div className="li_section">
                        <strong>
                          User Account Registration and Authentication
                        </strong>{" "}
                        <span>
                          Facebook Login, Google OAuth 2.0, LinkedIn OAuth 2.0,
                          Windows Live Connect and Twitter OAuth
                        </span>
                      </div>
                    </li>
                    <li className="policy_li_item">
                      <div className="li_section">
                        <strong>Web and Mobile Analytics</strong>{" "}
                        <span>Google Analytics.</span>
                      </div>
                    </li>
                    <li className="policy_li_item">
                      <div className="li_section">
                        <strong>Website Testing</strong>{" "}
                        <span>Cloudflare.</span>
                      </div>
                    </li>
                  </ul>
                </section>
                <section
                  className="policy_list_section"
                  id="#technologies_section"
                >
                  <span className="policy_item_title">
                    DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short:</strong> We may use cookies and other
                    tracking technologies to collect and store your information.
                  </span>
                  <span className="policy_item_description">
                    We may use cookies and similar tracking technologies (like
                    web beacons and pixels) to access or store information.
                    Specific information about how we use such technologies and
                    how you can refuse certain cookies is set out in our Cookie
                    Policy.
                  </span>
                </section>
                <section className="policy_list_section" id="#map_section">
                  <span className="policy_item_title">
                    DO WE USE GOOGLE MAPS?
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short:</strong> Yes, we use Google Maps for the
                    purpose of providing better service.
                  </span>
                  <span className="policy_item_description">
                    This website, mobile application, or Facebook application
                    uses Google Maps APIs. You may find the Google Maps APIs
                    Terms of Service{" "}
                    <span
                      onClick={() => {
                        window.location.href =
                          "https://developers.google.com/maps/terms";
                      }}
                      style={{ color: "#f1592a", cursor: "pointer" }}
                    >
                      here
                    </span>
                    . To better understand Google Privacy Policy, please refer
                    to this{" "}
                    <span
                      onClick={() => {
                        window.location.href =
                          "https://policies.google.com/privacy";
                      }}
                      style={{ color: "#f1592a", cursor: "pointer" }}
                    >
                      link
                    </span>
                    .
                  </span>
                </section>
                <section className="policy_list_section" id="#handle_section">
                  <span className="policy_item_title">
                    HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short:</strong> If you choose to register or log
                    in to our websites using a social media account, we may have
                    access to certain information about you.
                  </span>
                  <span className="policy_item_description">
                    Our Sites or Apps offer you the ability to register and
                    login using your third party social media account details
                    (like your Facebook or Twitter logins). Where you choose to
                    do this, we will receive certain profile information about
                    you from your social media provider. The profile Information
                    we receive may vary depending on the social media provider
                    concerned, but will often include your name, e-mail address,
                    friends list, profile picture as well as other information
                    you choose to make public.
                  </span>
                  <span className="policy_item_description">
                    We will use the information we receive only for the purposes
                    that are described in this privacy policy or that are
                    otherwise made clear to you on the Sites or Apps. Please
                    note that we do not control, and are not responsible for,
                    other uses of your personal information by your third party
                    social media provider. We recommend that you review their
                    privacy policy to understand how they collect, use and share
                    your personal information, and how you can set your privacy
                    preferences on their sites and apps.
                  </span>
                </section>
                <section
                  className="policy_list_section"
                  id="transferred_section"
                >
                  <span className="policy_item_title">
                    IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short:</strong> We may transfer, store, and
                    process your information in countries other than your own.
                  </span>
                  <span className="policy_item_description">
                    Our servers are located in United States. If you are
                    accessing our Sites or Apps from outside United States,
                    please be aware that your information may be transferred to,
                    stored, and processed by us in our facilities and by those
                    third parties with whom we may share your personal
                    information (see{" "}
                    <Link
                      activeClass="active"
                      to="#shared_section"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      style={{ color: "#f1592a" }}
                    >
                      "WILL YOUR INFORMATION BE SHARED WITH ANYONE?"
                    </Link>{" "}
                    above), in United States, and other countries.
                  </span>
                  <span className="policy_item_description">
                    If you are a resident in the European Economic Area, then
                    these countries may not have data protection or other laws
                    as comprehensive as those in your country. We will however
                    take all necessary measures to protect your personal
                    information in accordance with this privacy policy and
                    applicable law.
                  </span>
                  <span className="policy_item_description">
                    EU-U.S. Privacy Shield Framework:
                  </span>
                  <span className="policy_item_description">
                    In particular Company complies with the EU-U.S. Privacy
                    Shield Framework as set forth by the U.S. Department of
                    Commerce regarding the collection, use, and retention of
                    personal information transferred from the European Union to
                    the United States and has certified its compliance with it.
                    As such, Company is committed to subjecting all personal
                    information received from European Union (EU) member
                    countries, in reliance on the Privacy Shield Framework, to
                    the Frameworks applicable Principles. To learn more about
                    the Privacy Shield Framework, visit the{" "}
                    <Link
                      style={{ color: "#f1592a" }}
                      to="https://www.privacyshield.gov/list"
                    >
                      U.S. Department of Commerces Privacy Shield List
                    </Link>
                    .
                  </span>
                  <span className="policy_item_description">
                    Company is responsible for the processing of personal
                    information it receives, under the Privacy Shield Framework,
                    and subsequently transfers to a third party acting as an
                    agent on its behalf.
                  </span>
                  <span className="policy_item_description">
                    With respect to personal information received or transferred
                    pursuant to the Privacy Shield Framework, Company is subject
                    to the regulatory enforcement powers of the U.S. FTC. In
                    certain situations, we may be required to disclose personal
                    information in response to lawful requests by public
                    authorities, including to meet national security or law
                    enforcement requirements.
                  </span>
                </section>
                <section className="policy_list_section" id="#keep_section">
                  <span className="policy_item_title">
                    HOW LONG DO WE KEEP YOUR INFORMATION?
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short:</strong> We keep your information for as
                    long as necessary to fulfill the purposes outlined in this
                    privacy policy unless otherwise required by law.
                  </span>
                  <span className="policy_item_description">
                    We will only keep your personal information for as long as
                    it is necessary for the purposes set out in this privacy
                    policy, unless a longer retention period is required or
                    permitted by law (such as tax, accounting or other legal
                    requirements). No purpose in this policy will require us
                    keeping your personal information for longer than 1 year
                    past the termination of the user's account.
                  </span>
                  <span className="policy_item_description">
                    When we have no ongoing legitimate business need to process
                    your personal information, we will either delete or
                    anonymize it, or, if this is not possible (for example,
                    because your personal information has been stored in backup
                    archives), then we will securely store your personal
                    information and isolate it from any further processing until
                    deletion is possible.
                  </span>
                </section>
                <section className="policy_list_section" id="#safe_section">
                  <span className="policy_item_title">
                    HOW DO WE KEEP YOUR INFORMATION SAFE?
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short:</strong> We aim to protect your personal
                    information through a system of organizational and technical
                    security measures.
                  </span>
                  <span className="policy_item_description">
                    We have implemented appropriate technical and organizational
                    security measures designed to protect the security of any
                    personal information we process. However, please also
                    remember that we cannot guarantee that the internet itself
                    is 100% secure. Although we will do our best to protect your
                    personal information, transmission of personal information
                    to and from our Sites or Apps is at your own risk. You
                    should only access the services within a secure environment.
                  </span>
                </section>
                <section className="policy_list_section" id="#minors_section">
                  <span className="policy_item_title">
                    DO WE COLLECT INFORMATION FROM MINORS?
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short:</strong> We do not knowingly collect data
                    from or market to children under 18 years of age.
                  </span>
                  <span className="policy_item_description">
                    We do not knowingly solicit data from or market to children
                    under 18 years of age. By using the Sites or Apps, you
                    represent that you are at least 18 or that you are the
                    parent or guardian of such a minor and consent to such minor
                    dependents use of the Sites or Apps. If we learn that
                    personal information from users less than 18 years of age
                    has been collected, we will deactivate the account and take
                    reasonable measures to promptly delete such data from our
                    records. If you become aware of any data we have collected
                    from children under age 18, please contact us at
                    dpo@brite.us.
                  </span>
                </section>
                <section className="policy_list_section" id="#privacy_section">
                  <span className="policy_item_title">
                    WHAT ARE YOUR PRIVACY RIGHTS?
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short:</strong> In some regions, such as the
                    European Economic Area, you have rights that allow you
                    greater access to and control over your personal
                    information. You may review, change, or terminate your
                    account at any time.
                  </span>
                  <span className="policy_item_description">
                    In some regions (like the European Economic Area), you have
                    certain rights under applicable data protection laws. These
                    may include the right (i) to request access and obtain a
                    copy of your personal information, (ii) to request
                    rectification or erasure; (iii) to restrict the processing
                    of your personal information; and (iv) if applicable, to
                    data portability. In certain circumstances, you may also
                    have the right to object to the processing of your personal
                    information. To make such a request, please use the{" "}
                    <Link
                      activeClass="active"
                      to="#specific_section"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      style={{ color: "#f1592a" }}
                    >
                      contact details
                    </Link>{" "}
                    provided below. We will consider and act upon any request in
                    accordance with applicable data protection laws.
                  </span>
                  <span className="policy_item_description">
                    If we are relying on your consent to process your personal
                    information, you have the right to withdraw your consent at
                    any time. Please note however that this will not affect the
                    lawfulness of the processing before its withdrawal.
                  </span>
                  <span className="policy_item_description">
                    If you are resident in the European Economic Area and you
                    believe we are unlawfully processing your personal
                    information, you also have the right to complain to your
                    local data protection supervisory authority. You can find
                    their contact details{" "}
                    <span
                      onClick={() => {
                        window.location.href =
                          "https://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080";
                      }}
                      style={{ color: "#f1592a", cursor: "pointer" }}
                    >
                      here
                    </span>
                    .
                  </span>
                  <span className="policy_item_sub_title">
                    Account Information
                  </span>
                  <span className="policy_item_description">
                    If you would at any time like to review or change the
                    information in your account or terminate your account, you
                    can:
                  </span>
                  <ul className="policy_ul_bar">
                    <li className="policy_li_item">
                      <span>
                        Contact us using the contact information provided.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        Log into your account settings and update your user
                        account.
                      </span>
                    </li>
                  </ul>
                  <span className="policy_item_description">
                    Upon your request to terminate your account, we will
                    deactivate or delete your account and information from our
                    active databases. However, some information may be retained
                    in our files to prevent fraud, troubleshoot problems, assist
                    with any investigations, enforce our Terms of Use and/or
                    comply with legal requirements.
                  </span>
                  <span className="policy_item_description">
                    <strong style={{ textDecoration: "underline" }}>
                      Opting out of email marketing:
                    </strong>{" "}
                    You can unsubscribe from our marketing email list at any
                    time by clicking on the unsubscribe link in the emails that
                    we send or by contacting us using the details provided
                    below. You will then be removed from the marketing email
                    list however, we will still need to send you service-related
                    emails that are necessary for the administration and use of
                    your account. To otherwise opt-out, you may:
                  </span>
                  <ul className="policy_ul_bar">
                    <li className="policy_li_item">
                      <span>
                        Access your account settings and update preferences.
                      </span>
                    </li>
                    <li className="policy_li_item">
                      <span>
                        Contact us using the contact information provided.
                      </span>
                    </li>
                  </ul>
                </section>
                <section className="policy_list_section" id="#feature_section">
                  <span className="policy_item_title">
                    CONTROLS FOR DO-NOT-TRACK FEATURES
                  </span>
                  <span className="policy_item_description">
                    Most web browsers and some mobile operating systems and
                    mobile applications include a Do-Not-Track (DNT) feature or
                    setting you can activate to signal your privacy preference
                    not to have data about your online browsing activities
                    monitored and collected. No uniform technology standard for
                    recognizing and implementing DNT signals has been finalized.
                    As such, we do not currently respond to DNT browser signals
                    or any other mechanism that automatically communicates your
                    choice not to be tracked online. If a standard for online
                    tracking is adopted that we must follow in the future, we
                    will inform you about that practice in a revised version of
                    this Privacy Policy.
                  </span>
                </section>
                <section className="policy_list_section" id="#specific_section">
                  <span className="policy_item_title">
                    DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short: </strong> Yes, if you are a resident of
                    California, you are granted specific rights regarding access
                    to your personal information.
                  </span>
                  <span className="policy_item_description">
                    California Civil Code Section 1798.83, also known as the
                    Shine The Light law, permits our users who are California
                    residents to request and obtain from us, once a year and
                    free of charge, information about categories of personal
                    information (if any) we disclosed to third parties for
                    direct marketing purposes and the names and addresses of all
                    third parties with which we shared personal information in
                    the immediately preceding calendar year. If you are a
                    California resident and would like to make such a request,
                    please submit your request in writing to us using the
                    contact information provided below.
                  </span>
                  <span className="policy_item_description">
                    If you are under 18 years of age, reside in California, and
                    have a registered account with the Sites or Apps, you have
                    the right to request removal of unwanted data that you
                    publicly post on the Sites or Apps. To request removal of
                    such data, please contact us using the contact information
                    provided below, and include the email address associated
                    with your account and a statement that you reside in
                    California. We will make sure the data is not publicly
                    displayed on the Sites or Apps, but please be aware that the
                    data may not be completely or comprehensively removed from
                    our systems.
                  </span>
                </section>
                <section className="policy_list_section" id="#updates_section">
                  <span className="policy_item_title">
                    DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                  </span>
                  <span className="policy_item_description">
                    <strong>In Short: </strong> Yes, we will update this policy
                    as necessary to stay compliant with relevant laws.
                  </span>
                  <span className="policy_item_description">
                    We may update this privacy policy from time to time. The
                    updated version will be indicated by an updated Revised date
                    and the updated version will be effective as soon as it is
                    accessible. If we make material changes to this privacy
                    policy, we may notify you either by prominently posting a
                    notice of such changes or by directly sending you a
                    notification. We encourage you to review this privacy policy
                    frequently to be informed of how we are protecting your
                    information.
                  </span>
                </section>
                <section className="policy_list_section" id="#policy_section">
                  <span className="policy_item_title">
                    HOW CAN YOU CONTACT US ABOUT THIS POLICY?
                  </span>
                  <span className="policy_item_description">
                    If you have questions or comments about this policy, you may
                    contact our Data Protection Officer (DPO) by phone or by
                    post:
                  </span>
                  <span className="policy_item_description">
                    BRITE Investments, Inc.
                    <br />
                    1762 Big Oak Ln Kissimmee, FL 34746
                    <br />
                    United States
                    <br />
                    Phone: +1-321-558-6868
                  </span>
                </section>
              </Col>
            </Row>
          </section>
        </div>
      </>
    );
  }
}
