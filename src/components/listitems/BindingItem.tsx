import * as React from 'react';

import { Button, Icon } from 'antd';
import '../../assets/css/listitems.scss';
import '../../assets/css/global.css';

export interface IBindingItem {
    type: string;
    color: string;
    size?: number
    bgColor?: string;
    title: string;
    desc: string;
}

interface IBindingItemProps extends IBindingItem {
    index: number;
    onBind: (key: number) => void;
}

const BindingItem: React.SFC<IBindingItemProps> = (props: IBindingItemProps) => {
    return (
        <div className='list-item-wrapper'>
            <div className='list-item-fixed center-wrapper'>
                <Icon
                    type={props.type}
                    style={{
                        color: props.color,
                        backgroundColor: props.bgColor ? props.bgColor : '#FFF',
                        fontSize: props.size ? props.size : 48,
                        marginRight: '16px',
                        borderRadius: 6,
                        padding: props.size ? 22 - props.size / 2 : 0
                    }} />
            </div>
            <div className='list-item-grow'>
                <div className='list-item-title'>{props.title}</div>
                <div className='list-props-desc'>
                    {props.desc}
                </div>
            </div>
            <div className='center-wrapper'>
                <Button type='link' onClick={() => props.onBind(props.index)}>
                    Bind
                </Button>
            </div>
        </div>
    )
}

export default BindingItem;