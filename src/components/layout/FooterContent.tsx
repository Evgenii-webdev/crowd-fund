import React from 'react';
import { Row, Col, Typography } from "antd";
import { faRedditAlien, faMediumM, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/css/layout.css";

const { Paragraph } = Typography;

const FooterContent: React.SFC = () => {
    return (
        <Row>
            <Col xs={24} md={8}>
                <Paragraph className='desc'>
                    BRITE Investments, Delaware USA
                {/* Contact: <a href="mailto:info@brite.us">info@brite.us</a> */}
                </Paragraph>
            </Col>
            <Col xs={24} md={8} className='center'>
                <Paragraph className='iconbar'>
                    <Paragraph className='footer-wrapper'>
                        <a href='https://www.reddit.com/user/brite-us' target='_blank' rel='noopener noreferrer' className='footer-outer'>
                            <FontAwesomeIcon icon={faRedditAlien} className='footer-fa-image footer-inner' />
                        </a>
                    </Paragraph>
                    <Paragraph className='footer-wrapper'>
                        <a href='https://medium.com/@brite' target='_blank' rel='noopener noreferrer' className='footer-outer'>
                            <FontAwesomeIcon icon={faMediumM} className='footer-fa-image footer-inner' />
                        </a>
                    </Paragraph>
                    <Paragraph className='footer-wrapper'>
                        <a href='https://t.me/brite_investments' target='_blank' rel='noopener noreferrer' className='footer-outer'>
                            <FontAwesomeIcon icon={faTelegramPlane} className='footer-fa-image footer-inner' />
                        </a>
                    </Paragraph>
                </Paragraph>
            </Col>
        </Row>

    )
}

export default FooterContent;