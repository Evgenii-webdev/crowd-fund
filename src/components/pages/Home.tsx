import React from 'react';
import { RouteComponentProps } from 'react-router-dom'

import { Typography, Button, Row, Col, Card, Form, Input, Popover } from 'antd';
import { faCircle, faAddressCard, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HomeMenu } from '../layout/HomeMenu';
import { newsData, NewsItem, whatData, WhatItem, doItems, DoItem, SimpleCard, UrlCard, items1, items2, items3, items4, ProfileCard } from './Data';

import '../../assets/css/styles.css';

const { Title, Paragraph, Text } = Typography;

export class Home extends React.Component<RouteComponentProps> {

  componentDidMount() {
    console.log('Home', this.props.location.search)
  }

  render() {
    return (
      <>
        <section id='top' className='top-menu'>
          <HomeMenu />
          <Paragraph className={'image-title'}>
            <Title className={'desc1'}>Regulated Digital Securities</Title>
            <Title className={'desc2'}>RAISE FUNDS & INVEST<br />THE BRITE WAY</Title>
            <Button className='button'><a href='#services'>TELL ME MORE</a></Button>
          </Paragraph>
          <Paragraph className='logo-container'>
            <img src="https://brite.us/img/logos/brite-logo-lg.png" className="logo" alt='logo' />
          </Paragraph>
        </section>


        <section className='subject center' id='news'>
          <Title className='title'>NEWS AND EVENTS</Title>
          <Title level={3} className='description italic'>You can meet our team members at the following events.</Title>

          <Row gutter={24} type='flex' justify="space-between" className='row' align="top" style={{ margin: "auto" }}>
            {
              newsData.map((data: NewsItem) => (
                <Col sm={24} lg={8}>
                  <Card className='card' style={{ marginTop: "1rem" }} cover={
                    <img src={data.image} className='card-photo' alt={data.alt} />
                  }>
                    <Title level={4} className='card-title'>{data.title}</Title>
                    <Text className='card-took italic'>{data.took}</Text>
                    <Text className='card-desc'>{data.description}</Text>
                    <Text className='card-desc'>{data.suggestion}</Text>
                    <Paragraph style={{ width: "100%", margin: '0' }}>
                      <Button className='card-btn'><a rel='noopener noreferrer' href={data.url} target='_blank'>{data.button}</a></Button>
                    </Paragraph>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </section>


        <section className='subject center' id='services'>
          <Title className='title'>WHAT WE DO</Title>
          <Title level={3} className='description italic'>BRITE’S equity crowdfunding platform is designed to bring new possibilities to asset owners<br />
            as well as provide small investors access to asset classes previously reserved for the ultra-rich.</Title>

          <Row type='flex' gutter={24} justify="space-between" className='row' style={{ margin: "auto" }}>
            {
              whatData.map((data: WhatItem, idx: number) => (
                <Col sm={24} md={12}>
                  <Card className='card' style={{ marginTop: "1rem" }} bordered={false}>
                    <Title level={2} className='card-title font-h3'>{data.title}</Title>
                    {data.description.map((desc: string) => (
                      <Text className='card-desc'>
                        <p dangerouslySetInnerHTML={{ __html: desc }}></p>
                      </Text>
                    ))}
                  </Card>
                </Col>
              ))
            }
          </Row>

          <Row type='flex' gutter={24} justify="space-between" className='row' style={{ margin: "auto" }}>
            {
              doItems.map((data: DoItem) => (
                <Col sm={24} md={8}>
                  <Card className='card center' style={{ marginTop: "1rem" }} bordered={false}>
                    <div className='flex center'>
                      <div className='wrapper'>
                        <FontAwesomeIcon icon={faCircle} className='fa-image absolute outer' />
                        <FontAwesomeIcon icon={data.icon_inner} className='fa-image absolute inner' />
                      </div>
                    </div>
                    <Title level={2} className='card-title font-h4'>{data.title}</Title>
                    <Text className='card-desc'>
                      {data.description}
                    </Text>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </section>


        <section className='subject center' id='why-us'>
          <Title className='title'>WHAT SETS BRITE APART?</Title>
          <Title level={3} className='description italic'>
            BRITE combines the best of both worlds, blockchain and traditional banking, minimizing the risks and threats for our clients.
          </Title>

          <Text className='card-desc left'>
            Standing apart from community driven decentralized projects, BRITE Investments Inc. is incorporated in Delaware USA. We strictly follow existing securities regulations and AML/KYC best practices. The infrastructure is built on top of <Text strong={true}>Hyperledger Fabric</Text> - an enterprise grade, high-performance permissioned blockchain framework and Distributed Ledger Technology (DLT). This provides for greater transparency, privacy, reliability and security of the platform. Investor's funds are stored in a traditional financial institution, insured, off blockchain.
          </Text>

          <Row type='flex' gutter={24} justify="space-between" className='row' style={{ margin: "auto" }}>
            {
              items1.map((item: SimpleCard) => (
                <Col sm={24} md={12}>
                  <Card className='card center' style={{ marginTop: "1rem" }} bordered={false} cover={
                    <img src={item.cover} alt={item.alt} className='card-photo'></img>
                  }>
                    <Title level={2} className='card-title font-h4'>{item.title}</Title>
                    <Text className='card-desc'>
                      {item.description}
                    </Text>
                  </Card>
                </Col>

              ))
            }
          </Row>
        </section>


        <section className='subject center' id='research'>
          <Title className='title'>OUR RESEARCH ON DIGITAL SECURITIES</Title>
          <Title level={3} className='description italic'>
            Latest news about Digital Securities, Asset Tokenization, Fractional Ownership and technologies that use Distributed Ledgers
          </Title>

          <Row type='flex' gutter={24} justify="space-between" className='row' style={{ margin: "auto" }}>
            {
              items2.map((item: UrlCard) => (
                <Col sm={24} md={12}>
                  <Card className='card' style={{ marginTop: "1rem" }} cover={
                    <img src={item.cover} className='card-photo' alt={item.alt} />
                  }>
                    <Title level={4} className='card-title'>
                      {item.title}
                    </Title>
                    <Text className='card-desc'>
                      {item.description}
                    </Text>
                    <Paragraph style={{ width: "100%" }}>
                      <Button className='card-btn'><a rel='noopener noreferrer' href={item.readURL} target='_blank'>Read on Medium</a></Button>
                    </Paragraph>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </section>


        <section className='subject center' id='team'>
          <Title className='title'>BRITE TEAM</Title>
          <Title level={3} className='description italic'>
            Top Management and Key Personnel
          </Title>

          <Row type='flex' gutter={24} justify="space-between" className='row' style={{ margin: "auto" }}>
            {
              items3.map((item: ProfileCard) => (
                <Col sm={24} md={8}>
                  <Card className='card center' style={{ marginTop: "1rem" }} bordered={false}>
                    <div className='center'>
                      <img src={item.cover} alt={item.alt} className='avatar'></img>
                    </div>
                    <Title level={2} className='card-title font-h4'>{item.title}</Title>
                    <Text className='card-desc'>
                      <p dangerouslySetInnerHTML={{ __html: item.description }} style={{ margin: '0px' }}></p>
                    </Text>
                    {item.cardURL && <Button className='social-btn busicard' title='Open Business card'>
                      <a rel='noopener noreferrer' href={item.cardURL} target='_blank'><FontAwesomeIcon icon={faAddressCard} className='businesscard-fa' size="lg" /></a>
                    </Button>}
                    {item.bio && (
                      <Popover style={{ width: '400px' }} content={<p dangerouslySetInnerHTML={{ __html: item.bio }} style={{ margin: '0px' }}></p>} trigger='click'>
                        <Button className='social-btn showbio'>
                          <FontAwesomeIcon icon={faUser} className='businesscard-fa' size="lg" />
                          &nbsp;Show Bio
                      </Button>
                      </Popover>
                    )}
                    {item.linkedin && (
                      <Button className='social-btn linkedin' title='Open Linkedin Profile'>
                        <a rel='noopener noreferrer' href={item.linkedin} target='_blank'><FontAwesomeIcon icon={faUser} className='businesscard-fa' size="lg" />&nbsp;LinkedIn</a>
                      </Button>
                    )}
                  </Card>
                </Col>
              ))
            }
          </Row>
        </section>


        <section className='subject center' id='meet-the-team'>
          <Title className='title'>ADVISORY BOARD</Title>

          <Row type='flex' gutter={24} justify="space-between" className='row' style={{ margin: "auto" }}>
            {
              items4.map((item: ProfileCard) => (
                <Col sm={24} md={8}>
                  <Card className='card center' style={{ marginTop: "1rem" }} bordered={false}>
                    <div className='center'>
                      <img src={item.cover} alt={item.alt} className='avatar'></img>
                    </div>
                    <Title level={2} className='card-title font-h4'>{item.title}</Title>
                    <Text className='card-desc'>
                      <p dangerouslySetInnerHTML={{ __html: item.description }} style={{ margin: '0px' }}></p>
                    </Text>
                    {item.cardURL && <Button className='social-btn busicard' title='Open Business card'>
                      <a rel='noopener noreferrer' href={item.cardURL} target='_blank'><FontAwesomeIcon icon={faAddressCard} className='businesscard-fa' size="lg" /></a>
                    </Button>}
                    {item.bio && (
                      <Popover style={{ width: '400px' }} content={<p dangerouslySetInnerHTML={{ __html: item.bio }} style={{ margin: '0px' }}></p>} trigger='click'>
                        <Button className='social-btn showbio'>
                          <FontAwesomeIcon icon={faUser} className='businesscard-fa' size="lg" />
                          &nbsp;Show Bio
                                    </Button>
                      </Popover>
                    )}
                    {item.linkedin && (
                      <Button className='social-btn linkedin' title='Open Linkedin Profile'>
                        <a rel='noopener noreferrer' href={item.linkedin} target='_blank'><FontAwesomeIcon icon={faUser} className='businesscard-fa' size="lg" />&nbsp;LinkedIn</a>
                      </Button>
                    )}
                  </Card>
                </Col>
              ))
            }
          </Row>
        </section>


        <section id='contact' className={'contact-form center'}>
          <Paragraph className='contact-para'>
            <Title className='title white'>SEND A MESSAGE</Title>
            <Title level={3} className='description italic white'>
              Or call us +1 321-558-6868
            </Title>

            <Form style={{ width: '100%' }}>
              <Row gutter={24} justify="space-between" className='row' style={{ margin: "auto" }}>
                <Col sm={24} md={12}>
                  <Form.Item>
                    <Input className='form-input' placeholder='Your Name*'></Input>
                  </Form.Item>
                  <Form.Item style={{ width: '100%' }}>
                    <Input className='form-input' placeholder='Your Email*'></Input>
                  </Form.Item>
                  <Form.Item style={{ width: '100%' }}>
                    <Input className='form-input' placeholder='Your Phone*'></Input>
                  </Form.Item>
                </Col>
                <Col sm={24} md={12}>
                  <Form.Item style={{ width: '100%' }}>
                    <Input.TextArea style={{
                      padding: '20px', height: '240px', fontSize: '20px',
                      fontWeight: "bold"
                    }} placeholder='Your Message*'></Input.TextArea >
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item style={{ textAlign: 'center' }}>
                <Button style={{ backgroundColor: '#f1592a', border: 'none', padding: '16px 32px', height: 'auto', fontSize: '20px', fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>SEND MESSAGE</Button>
              </Form.Item>
            </Form>
          </Paragraph>
        </section>
      </>
    );
  }
}
