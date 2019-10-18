import React, { Fragment } from 'react';
import queryString from 'query-string';
import * as api from '../api/ApiClient';
import { Form, Checkbox, Button, Input, Row, Col, Radio } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { NavLink } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';

interface IRegisterProps extends FormComponentProps {

}

interface IRegisterState {
    confirmDirty: boolean;
}

class RegisterForm extends React.Component<IRegisterProps, IRegisterState> {
    constructor(props: Readonly<IRegisterProps>) {
        super(props);
    }

    public state = {
        confirmDirty: false
    };

    private getReturnUrl = (): string => {
        let props = queryString.parse(window.location.search);
        return props.returnUrl as string;
    }

    private handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                let client = new api.AccountClient();
                try {
                    let response;
                    let accountType = this.props.form.getFieldValue("accountType");
                    if (accountType == 'investor') {
                        response = await client.registerInvestor({
                            userName: this.props.form.getFieldValue("userName"),
                            password: this.props.form.getFieldValue("password"),
                            returnUrl: this.getReturnUrl()
                        });
                    } else {
                        response = await client.registerIssuer({
                            userName: this.props.form.getFieldValue("userName"),
                            password: this.props.form.getFieldValue("password"),
                            returnUrl: this.getReturnUrl()
                        });
                    }
                    window.location.href = response.result.returnUrl;
                } catch (e) {
                    let apiError = e as api.SwaggerException;
                    let message = JSON.parse(apiError.response);
                    this.props.form.setFields({
                        message: {
                            errors: [new Error(message.errors.join(" "))]
                        }
                    });
                }
            }
        });
    };

    private handleConfirmBlur = (e: React.FocusEvent<HTMLElement>) => {
        const value = (e.target as HTMLInputElement).value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    private compareToFirstPassword = (rule: any, value: any, callback: Function) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback("Passwords don't match");
        } else {
            callback();
        }
    };

    private validateToNextPassword = (rule: any, value: any, callback: Function) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };

        const termsItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 24,
                    offset: 0,
                },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <div className="align-center">
                <div>
                    <Row>
                        <Col>
                            <Title level={2}>Create an Account</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('message', {
                                    })(
                                        <Fragment></Fragment>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('accountType', {
                                        initialValue: 'investor'
                                    })(
                                        <Radio.Group buttonStyle="solid">
                                            <Radio.Button value={'investor'}>Investor</Radio.Button>
                                            <Radio.Button value={'issuer'}>Issuer</Radio.Button>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item label="Username">
                                    {getFieldDecorator('userName', {
                                        rules: [{ required: true, message: 'Please input username' }]
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="Password" hasFeedback>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input password' },
                                        { validator: this.validateToNextPassword }]
                                    })(<Input.Password />)}
                                </Form.Item>
                                <Form.Item label="Confirm Password" hasFeedback>
                                    {getFieldDecorator('confirm', {
                                        rules: [{ required: true, message: 'Please confirm password' },
                                        { validator: this.compareToFirstPassword }]
                                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                                </Form.Item>
                                <Form.Item {...termsItemLayout}>
                                    {getFieldDecorator('agreement', {
                                        rules: [{ required: true, message: 'Please agree to the terms and conditions' }],
                                        valuePropName: 'checked',
                                    })(
                                        <Checkbox>
                                            I agree to the <NavLink to="/terms">terms and conditions</NavLink>
                                        </Checkbox>,
                                    )}
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Register
                                        </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export let Register = Form.create<IRegisterProps>()(RegisterForm);