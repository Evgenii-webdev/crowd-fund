import * as React from 'react';
import { List } from 'antd';

import BindingItem, { IBindingItem } from '../../components/listitems/BindingItem';
export interface IAccBindingProps {
    data: IBindingItem[];
}

export default class AccBinding extends React.Component<IAccBindingProps, any> {

    handleBind = (index: number) => {
        console.log(index);
    }

    public render() {
        const { data } = this.props;
        return (
            <List
                bordered={false}
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item className='list-item'>
                        <BindingItem index={index} onBind={this.handleBind} {...item} />
                    </List.Item >
                )}
            />
        );
    }
}
