import * as React from 'react';

import { AreaChart, Area, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import CustomTooltip from './ChartTooltip';

export interface ChartData {
    date: string;
    value: number;
}

export interface ICustomChartProps {
    area?: boolean;
    bgColor: string;
    color: string;
    fillColor: string;
    data?: ChartData[];
    label?: boolean;
    title?: string;
}

const CustomChart: React.SFC<ICustomChartProps> = (props) => {
    const { color, fillColor, data, area, label, title } = props;

    if (area) {
        return (
            <div className='chart-wrapper'>
                {title && <h4 style={{ fontSize: '16px', marginBottom: '20px', fontWeight: 500 }}>{title}</h4>}
                <ResponsiveContainer>
                    <AreaChart data={data} margin={{ top: 5, right: 0, bottom: 0, left: 0 }}>
                        {label && <XAxis dataKey="date" />}
                        {label && <YAxis />}
                        {label && <CartesianGrid strokeDasharray="3 3" />}
                        <Tooltip content={<CustomTooltip />} />
                        <Area type='monotone' dataKey='value' stroke={color} fill={fillColor} strokeWidth={3} fillOpacity={1} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    } else {
        return (
            <div className='chart-wrapper'>
                {title && <h4 style={{ fontSize: '16px', marginBottom: '20px', fontWeight: 500 }}>{title}</h4>}
                <ResponsiveContainer>
                    <BarChart data={data} margin={{ top: 5, right: 0, bottom: 0, left: 0 }}>
                        {label && <XAxis dataKey="date" />}
                        {label && <YAxis />}
                        {label && <CartesianGrid strokeDasharray="3 3" />}
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey='value' stroke={color} fill={fillColor} fillOpacity={1} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

CustomChart.defaultProps = {
    area: true
};

export default CustomChart;