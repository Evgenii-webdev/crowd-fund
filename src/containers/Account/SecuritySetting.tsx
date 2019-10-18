import * as React from 'react';
import { List, Input, Button } from 'antd';

import '../../assets/css/custom.css';
import '../../assets/css/listitems.scss';

export interface SecItemContent {
    key: string;
    title: string;
    desc: string;
    button?: string;
    editor?: Function;
    onEdit?: (item: SecItemContent) => void;
}

export interface ISecuritySettingProps {
    data: SecItemContent[];
}

interface ISecuritySettingState {
    [key: string]: boolean;
}

export default class SecuritySetting extends React.Component<ISecuritySettingProps, ISecuritySettingState> {

    constructor(props: Readonly<ISecuritySettingProps>) {
        super(props);

        this.state = props.data.reduce((prev, item) => ({ ...prev, [item.key]: false }), {});
        console.log(this.state);
    }

    public render() {
        const { data } = this.props;
        return (
            <List
                bordered={false}
                dataSource={data}
                renderItem={item => (
                    <List.Item className='list-item'>
                        <div className='list-item-wrapper'>
                            <div className='list-item-grow'>
                                <div className='list-item-title'>{item.title}</div>
                                <div className='list-item-desc'>
                                    {item.desc}
                                </div>
                                {this.state[item.key] && this.state[item.key] && item.editor && item.editor()}
                            </div>
                            <div className='center-wrapper'>
                                <Button
                                    type='link'
                                    onClick={item.onEdit ?
                                        () => item.onEdit && item.onEdit(item) :
                                        () => { this.setState({ [item.key]: true }) }}>
                                    {item.button ? item.button : 'Modify'}
                                </Button>
                            </div>
                        </div>
                    </List.Item >
                )}
            />
        );
    }
}
