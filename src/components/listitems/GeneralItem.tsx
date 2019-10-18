import * as React from 'react';


import { Button, Icon } from 'antd';
import '../../assets/css/listitems.scss';
import '../../assets/css/global.css';


export interface IGeneralItem {
    preItem?: string | React.ReactNode;
    title: string;
    desc: string;
    postItem: string | React.ReactNode;
}

export interface IGeneralItemProps extends IGeneralItem {
}

export default function GeneralItem(props: IGeneralItemProps) {
    return (
        <div className='list-item-wrapper'>
            {props.preItem && (
                <div className='list-item-fixed center-wrapper'>
                    {props.preItem}
                </div>
            )}
            <div className='list-item-grow'>
                <div className='list-item-title'>{props.title}</div>
                <div className='list-props-desc'>
                    {props.desc}
                </div>
            </div>
            <div className='center-wrapper'>
                {props.postItem}
            </div>
        </div>
    );
}
