import React from 'react';

interface TooltipProps {
    active?: boolean;
    payload?: any[];
    label?: string;
}

const CustomTooltip: React.SFC<TooltipProps> = (props) => {
    const { active, payload } = props;

    if (active) {
        return (
            <div className='area-tooltip'>
                <span>{payload && payload[0].payload.date}</span>
                <span>{payload && payload[0].payload.value}</span>
            </div>
        );
    }

    return null;
}

export default CustomTooltip;