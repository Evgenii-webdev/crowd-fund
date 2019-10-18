

import * as React from 'react';
import { Card, Tabs, Row, Col, List, Typography } from 'antd';

import DateRangeBar, { DateRange } from '../../components/DateRangeBar';
import CustomChart from '../../components/charts/CustomChart';

import '../../assets/css/custom.css';

interface IRankingData {
  rank: number;
  name: string;
  value: string;
}

interface IRankingListProps {
  data: IRankingData[];
  title: string;
}
const RankingList: React.SFC<IRankingListProps> = (props) => {

  return (
    <>
      <h4 style={{ fontSize: '16px', margin: '0 8px 8px 16px' }}>{props.title + ' Ranking'}</h4>
      <List
        bordered={false}
        dataSource={props.data}
        renderItem={item => (
          <List.Item style={{ padding: '8px', border: 'none' }}>
            <Row gutter={12} style={{ width: '100%' }}>
              <Col xs={4} sm={3}>
                <div className={(item.rank <= 3) ? 'circle-number rank-em' : 'circle-number'} style={{ marginLeft: '4px' }}>{item.rank}</div>
              </Col>
              <Col xs={14} sm={15}>
                <div className='ellipsis'>{item.name}</div>
              </Col>
              <Col xs={6}>
                <div className='ellipsis' style={{ textAlign: 'right' }}>{item.value}</div>
              </Col>
            </Row>
            <Typography.Text></Typography.Text>
          </List.Item >
        )}
      />
    </>
  )
}




export interface ISalesCardProps {
}

export interface ISalesCardState {
  currentTab: string;
}

export default class SalesCard extends React.Component<ISalesCardProps, ISalesCardState> {
  constructor(props: Readonly<ISalesCardProps>) {
    super(props);
    this.state = {
      currentTab: 'sales'
    };
  }

  handleTabChange: (key: string) => void = (key) => {
    this.setState({ currentTab: key });
  }

  handleRangeChange = (range: DateRange) => {
    console.log(range.from.toDateString(), range.to.toDateString());
  }

  render() {
    const tabs = [
      { key: 'sales', tab: 'Sales' },
      { key: 'visits', tab: 'Visits' }
    ];

    const mock1 = [
      { date: '2019-06-16', value: 700 },
      { date: '2019-06-17', value: 400 },
      { date: '2019-06-18', value: 500 },
      { date: '2019-06-19', value: 200 },
      { date: '2019-06-20', value: 400 },
      { date: '2019-06-21', value: 500 },
      { date: '2019-06-22', value: 300 },
      { date: '2019-06-23', value: 700 },
      { date: '2019-06-24', value: 600 },
      { date: '2019-06-25', value: 700 },
      { date: '2019-06-26', value: 800 },
      { date: '2019-06-27', value: 200 },
      { date: '2019-06-28', value: 300 },
      { date: '2019-06-29', value: 600 },
      { date: '2019-06-30', value: 300 },
      { date: '2019-07-01', value: 400 },
      { date: '2019-07-02', value: 500 },
    ];

    const mock2 = [
      { rank: 1, name: 'Gongzhuan No.1 shop', value: '323,234' },
      { rank: 2, name: 'Gongzhuan No.2 shop', value: '323,234' },
      { rank: 3, name: 'Gongzhuan No.3 shop', value: '323,234' },
      { rank: 4, name: 'Gongzhuan No.4 shop', value: '323,234' },
      { rank: 5, name: 'Gongzhuan No.5 shop', value: '323,234' },
      { rank: 6, name: 'Gongzhuan No.6 shop', value: '323,234' },
      { rank: 7, name: 'Gongzhuan No.7 shop', value: '323,234' },
    ]

    return (
      <Card>
        <Tabs tabBarExtraContent={<DateRangeBar onRangeChanged={this.handleRangeChange} />}>
          {tabs.map(tab => (
            <Tabs.TabPane tab={tab.tab} key={tab.key}>
              <Row>
                <Col sm={24} md={12} xl={16} style={{ height: '295px', minHeight: '295px', padding: '0 48px 0 0' }}>
                  <CustomChart
                    area={false}
                    data={mock1}
                    fillColor='#1890ff'
                    color='#1890ff'
                    bgColor='#FFF'
                    label={true}
                    title={tab.tab + ' Trend'} />
                </Col>
                <Col sm={24} md={12} xl={8}>
                  <RankingList title={tab.tab} data={mock2} />
                </Col>
              </Row>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </Card >
    )
  }
}



