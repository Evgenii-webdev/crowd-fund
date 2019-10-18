import * as React from 'react';
import { Card, Icon } from 'antd';

import '../assets/css/datacard.css';

export interface IDataCardProps {
    title: string;
    total: string;
    render?(): React.ReactNode;
    footer: string | Function;
}

const DataCard: React.SFC<IDataCardProps> = (props) => {

    const { title, total, render, footer } = props;

    return (
        <Card className='data-card' bodyStyle={{ padding: '24px 24px 8px' }}>
            <div className='header'>
                <div className='card-topic'>{title}</div>
                <div className='card-total'>{total}</div>
                <span className='card-info'>
                    <Icon type='info' className='info-icon' />
                </span>
            </div>
            <div className='card-content'>
                {render && render()}
            </div>
            <div className='card-footer'>
                {(typeof footer === 'string') ? footer : footer()}
            </div>
        </Card>
    )
}

export default DataCard;