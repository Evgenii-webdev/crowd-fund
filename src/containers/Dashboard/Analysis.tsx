import * as React from 'react';

import { Row, Col, Progress } from 'antd';
import DataCard from '../../components/DataCard';
import TextChart, { TextTrend } from '../../components/charts/TextCharts';
import CustomChart, { ChartData } from '../../components/charts/CustomChart';
import SalesCard from './SalesCard';

export default class Analysis extends React.Component<{}, any> {

    public render() {

        const trends1: TextTrend[] = [
            { name: 'Wow', value: '12%', rising: true },
            { name: 'DoD', value: '11%', rising: false }
        ]

        const mock1: ChartData[] = [
            { date: '2019-06-16', value: 7 },
            { date: '2019-06-17', value: 4 },
            { date: '2019-06-18', value: 5 },
            { date: '2019-06-19', value: 2 },
            { date: '2019-06-20', value: 4 },
            { date: '2019-06-21', value: 5 },
            { date: '2019-06-22', value: 3 },
            { date: '2019-06-23', value: 7 },
            { date: '2019-06-24', value: 6 },
            { date: '2019-06-25', value: 7 },
            { date: '2019-06-26', value: 8 },
            { date: '2019-06-27', value: 2 },
            { date: '2019-06-28', value: 3 },
            { date: '2019-06-29', value: 6 },
            { date: '2019-06-30', value: 3 },
            { date: '2019-07-01', value: 4 },
            { date: '2019-07-02', value: 5 },
        ];

        const percentage = 78;

        return (
            <Row>
                <Col xs={24} sm={12} xl={6}>
                    <div className='card-wrapper'>
                        <DataCard
                            title='Total Sales'
                            total='&yen; 126,560'
                            footer='Daily Sales &yen;12,423'
                            render={() => <TextChart infos={trends1} />} />
                    </div>
                </Col>
                <Col xs={24} sm={12} xl={6}>
                    <div className='card-wrapper'>
                        <DataCard
                            title='Visits'
                            total='8,846'
                            footer={() => <>{'Daily Visits 1,234'}</>}
                            render={() => <CustomChart data={mock1} fillColor='#A476E1' color='#A476E1' bgColor='#FFF' />} />
                    </div>
                </Col>
                <Col xs={24} sm={12} xl={6}>
                    <div className='card-wrapper'>
                        <DataCard
                            title='Payments'
                            total='8,846'
                            footer={() => <>{'Conversion Rate 60%'}</>}
                            render={() => <CustomChart area={false} data={mock1} fillColor='#1890ff' color='#1890ff' bgColor='#FFF' />} />
                    </div>
                </Col>
                <Col xs={24} sm={12} xl={6}>
                    <div className='card-wrapper'>
                        <DataCard
                            title='Operational Effect'
                            total='78%'
                            footer={() => <TextChart infos={trends1} />}
                            render={() => <Progress percent={percentage} style={{ paddingTop: '24px' }} />} />
                    </div>
                </Col>
                <Col xs={24}>
                    <SalesCard />
                </Col>
            </Row>
        );
    }
}
