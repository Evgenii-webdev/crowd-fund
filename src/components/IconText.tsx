
import React from 'react';

import { Icon } from 'antd';

export const Num2String: (num: number) => string = (num) => {
    if (num > 1000000) {
        return (Math.round((num * 10) / 1000000) / 10).toFixed(1) + 'M';
    } else if (num > 1000) {
        return (Math.round((num * 10) / 1000) / 10).toFixed(1) + 'K';
    } else {
        return num.toString();
    }
}

interface IconProps<T> {
    type?: string;
    style?: object;
    data: T;
    handleClick?: (e: React.MouseEvent) => void;
}

export const IconText: React.SFC<IconProps<string>> = (props: IconProps<string>) => (
    <span>
        {props.type && <Icon type={props.type} style={{ marginRight: 8 }} onClick={props.handleClick} />}
        {props.data}
    </span>
);

export const IconNumber: React.SFC<IconProps<number>> = (props: IconProps<number>) => (
    <span style={props.style || {}}>
        {props.type && <Icon type={props.type} style={{ marginRight: 8 }} onClick={props.handleClick} />}
        {Num2String(props.data)}
    </span>
)

