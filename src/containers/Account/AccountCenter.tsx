import * as React from 'react';

import { Row, Col } from 'antd';
import AccountLeftPane from './AccountLeftPane';
import AccountRightPane from './AccountRightPane';

import '../../assets/css/global.css';

export interface IAccountCenterProps {
}

interface IAccountCenterState {
}

export default class AccountCenter extends React.Component<IAccountCenterProps, IAccountCenterState> {
    constructor(props: Readonly<IAccountCenterProps>) {
        super(props);

        this.state = {
        }
    }

    public render() {

        return (
            <Row>
                <Col xs={24} lg={7} style={{ padding: '0 12px' }}>
                    <div style={{ backgroundColor: 'white' }}>
                        <AccountLeftPane />
                    </div>
                </Col>
                <Col xs={24} lg={17} style={{ padding: '0 12px' }}>
                    <div style={{ backgroundColor: 'white' }}>
                        <AccountRightPane />
                    </div>
                </Col>
            </Row>
        );
    }
}
