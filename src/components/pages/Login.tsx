import React, { Fragment } from 'react';
import Auth from '../api/ApiAuth';
import { Form, Button, Input, Icon, Row, Col } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { NavLink, Redirect } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';

import { connect } from 'react-redux';
import { Login } from '../../actions/user';

interface ILoginProps extends FormComponentProps {
    login: any;
}

interface ILoginState {
    loginOK: boolean;
}

class LoginForm extends React.Component<ILoginProps, ILoginState> {
    constructor(props: Readonly<ILoginProps>) {
        super(props);
        this.state = {
            loginOK: false
        }
    }

    private handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                let userName = this.props.form.getFieldValue("userName");
                let password = this.props.form.getFieldValue("password");
                let ok = await Auth.login(userName, password);
                if (ok) {
                    await this.props.login(userName, password);
                    this.setState({ loginOK: true });
                } else {
                    this.props.form.setFields({
                        message: {
                            errors: [new Error("Invalid credentials")]
                        }
                    });
                }
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        if (this.state.loginOK) {
            return <Redirect to='/dash' />
        }

        return (
            <div className="align-center">
                <div>
                    <Row>
                        <Col>
                            <Title level={2}>Log In</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('message', {
                                    })(
                                        <Fragment></Fragment>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('userName', {

                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input password' }]
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                        Log In
                                     </Button>
                                    Or <NavLink to={'/account/register'}>Create an Account Now!</NavLink>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}


const LoginnForm = Form.create<ILoginProps>()(LoginForm);


const mapDispatchToProps = (dispatch: any) => ({
    login: (user: string, pass: string) => dispatch(Login(user, pass))
})


const ConnectedLogin = connect(null, mapDispatchToProps)(LoginnForm);
export default ConnectedLogin;