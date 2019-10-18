import React, { Fragment } from 'react';
import Auth from '../api/ApiAuth';
import Title from 'antd/lib/typography/Title';
import { Row, Col } from 'antd';

interface ILogoutProps {

}

export class Logout extends React.Component<ILogoutProps> {
    constructor(props: Readonly<ILogoutProps>) {
        super(props);
        Auth.logout();
        window.location.href = "/";
    }

    render() {
        return (
            <div className="align-center">
                <div>
                    <Row>
                        <Col>
                            <Title level={2}>Logged out</Title>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}