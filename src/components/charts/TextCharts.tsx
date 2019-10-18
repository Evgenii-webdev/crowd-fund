import * as React from 'react';
import { Icon } from 'antd';

export interface TextTrend {
    name: string;
    value: string;
    rising: boolean;
}

export interface ITextChartProps {
    infos: TextTrend[];
}

const TextChart: React.SFC<ITextChartProps> = (props) => {

    const { infos } = props;
    return (
        <div className='text-chart'>
            {infos.map((info, index) => (
                <div className='trend-info' key={index}>
                    <span className='name'>{info.name + ' Change'}</span>
                    <span className='value'>{info.value}</span>
                    <span className='rising'>{info.rising ?
                        <Icon type='caret-up' style={{ color: '#f5222d' }} /> :
                        <Icon type='caret-down' style={{ color: '#52c41a' }} />}</span>
                </div>
            ))}
        </div>
    )
}

export default TextChart;