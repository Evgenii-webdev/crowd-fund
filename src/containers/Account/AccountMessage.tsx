import * as React from 'react';
import { List } from 'antd';

import BindingItem, { IBindingItem } from '../../components/listitems/BindingItem';
import GeneralItem, { IGeneralItem } from '../../components/listitems/GeneralItem';
export interface IAccMessageProps {
    data: IGeneralItem[];
}

export default class AccMessage extends React.Component<IAccMessageProps, any> {

    handleBind = (index: number) => {
        console.log(index);
    }

    public render() {
        const { data } = this.props;
        return (
            <List
                bordered={false}
                dataSource={data}
                renderItem={item => (
                    <List.Item className='list-item'>
                        <GeneralItem {...item} />
                    </List.Item >
                )}
            />
        );
    }
}
