import * as React from 'react';
import { Tabs, Switch } from 'antd';

import BasicSetting from './BasicSetting';
import SecuritySetting, { SecItemContent } from './SecuritySetting';
import AccountBinding from './AccountBinding';
import AccountMessage from './AccountMessage';
import { IBindingItem } from '../../components/listitems/BindingItem';

import '../../assets/css/account.css';
import { IGeneralItem } from '../../components/listitems/GeneralItem';
import { number } from 'prop-types';

export interface IAccountSettingProps {
}

interface IAccountSettingState {
    tabPos: 'top' | 'left';
}

export default class AccountSetting extends React.Component<IAccountSettingProps, IAccountSettingState> {

    constructor(props: Readonly<IAccountSettingProps>) {
        super(props);

        this.state = {
            tabPos: 'left'
        }
    }

    componentDidMount() {
        window.addEventListener('resize', (ev: Event) => {
            const tabPos: 'top' | 'left' = (window.innerWidth < 768) ? 'top' : 'left';
            this.setState({ tabPos });
        });
    }

    handleBind = (item: SecItemContent) => {
        console.log(item);
    }

    handleChange = (checked: boolean, index: number) => {
        console.log(checked, index);
    }

    public render() {
        const PostItem = (index: number) => {
            return (
                <Switch
                    checkedChildren="open"
                    unCheckedChildren="close"
                    defaultChecked
                    onChange={(checked, event) => this.handleChange(checked, index)} />
            );
        }

        const msgData: IGeneralItem[] = [
            { title: 'Account Password', desc: 'Messages from other users will be notified in the form of a station letter', postItem: PostItem(0) },
            { title: 'System Messages', desc: 'System messages will be notified in the form of a station letter', postItem: PostItem(1) },
            { title: 'To-do Notification', desc: 'The to-do list will be notified in the form of a letter from the station', postItem: PostItem(2) },
        ];
        const bindData: IBindingItem[] = [
            { type: 'taobao', color: '#ff4000', title: 'Binding Taobao', desc: 'Currently unbound Taobao account' },
            { type: 'alipay', color: '#2eabff', title: 'Binding Alipay', desc: 'Currently unbound Alipay account' },
            { type: 'dingding', color: '#FFF', bgColor: '#2eabff', size: 32, title: 'Binding DingTalk', desc: 'Currently unbound DingTalk account' },
        ];
        const secSettings: SecItemContent[] = [
            { key: 'password', title: 'Account Password', desc: 'Current password strength: Strong', editor: () => (<div>editor</div>) },
            { key: 'phone', title: 'Security Phone', desc: 'Bound phone: 138****8293', editor: () => (<div>editor</div>) },
            { key: 'question', title: 'Security Question', desc: 'The security quesiton is not set, and the security policy can effectively protect the account security', button: 'Set', editor: () => (<div>editor</div>) },
            { key: 'backup', title: 'Backup Email', desc: 'Bound Email: : ant***sign.com', editor: () => (<div>editor</div>) },
            { key: 'device', title: 'MFA Device', desc: 'Unbound MFA device, after binding, can be confrimed twice', button: 'Bind', onEdit: this.handleBind, editor: () => (<div>editor</div>) },
        ];
        const tabs = [
            { key: 'basic', tab: 'Basic Settings', content: () => (<BasicSetting />) },
            { key: 'security', tab: 'Security Settings', content: () => (<SecuritySetting data={secSettings} />) },
            { key: 'binding', tab: 'Account Binding', content: () => (<AccountBinding data={bindData} />) },
            { key: 'message', tab: 'New Message Notification', content: () => (<AccountMessage data={msgData} />) }
        ];

        console.log(window.innerWidth);
        return (
            <Tabs tabPosition={this.state.tabPos} style={{ backgroundColor: 'white' }}>
                {tabs.map(tab => (
                    <Tabs.TabPane tab={tab.tab} key={tab.key}>
                        <div className='account-container'>
                            <h2 className='account-title'>{tab.tab}</h2>
                            {tab.content()}
                        </div>
                    </Tabs.TabPane>
                ))}
            </Tabs>
        );
    }
}
