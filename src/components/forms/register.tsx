

import * as React from 'react';
import {
    Form,
    Input,
    Icon,
    Select,
    Button,
    Typography,
    Spin
} from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

import 'antd/dist/antd.css';
import '../../assets/css/global.css';

export interface IRegisterFormProps extends FormComponentProps {
}

export interface IRegisterFormState {
    busy: boolean;
    phone: string;
    phoneError: boolean;
    phoneHelp: string;
}

class RegisterForm extends React.Component<IRegisterFormProps, IRegisterFormState> {
    constructor(props: IRegisterFormProps) {
        super(props);

        this.state = {
            busy: false,
            phone: '',
            phoneError: false,
            phoneHelp: ''
        }
    }

    phoneChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const number = parseInt(e.target.value);
        if (Number.isNaN(number)) {
            this.setState({
                phoneError: true,
                phoneHelp: 'Please input a valid number',
                phone: e.target.value
            });
        } else {
            this.setState({
                phoneError: false,
                phoneHelp: '',
                phone: e.target.value
            });
        }

    }

    register = async (values: any) => {
        console.log('CreditCardForm: ', values);
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.register(values);
            }
        });
    }

    public render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 16 }
            },
        };

        const formBtnLayout = {
            labelCol: {
                xs: { span: 0 }
            },
            wrapperCol: {
                xs: { span: 24 }
            }
        }

        return (
            <section id='credit-card-form'>
                <Typography.Title level={2} className='center'>Register</Typography.Title>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label='First Name' hasFeedback>
                        {getFieldDecorator('firstName', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your first name'
                                }
                            ]
                        })(<Input placeholder='First Name' />)}
                    </Form.Item>

                    <Form.Item label='Last Name' hasFeedback>
                        {getFieldDecorator('lastName', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your last name'
                                }
                            ]
                        })(<Input placeholder='Last Name' />)}
                    </Form.Item>

                    <Form.Item label="Email">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'Please input a valid email address'
                                },
                                {
                                    required: true,
                                    message: 'Please input your email address!',
                                }
                            ],
                        })(<Input placeholder='Email' />)}
                    </Form.Item>

                    <Form.Item
                        label='Phone'
                        validateStatus={this.state.phoneError ? 'error' : ''}
                        help={this.state.phoneHelp} >
                        <Input
                            placeholder='Phone'
                            onChange={this.phoneChanged}
                            value={this.state.phone}
                        />
                    </Form.Item>

                    <Form.Item {...formBtnLayout} className={'text-center'}>
                        <Button type="primary" htmlType="submit" className='submit-btn' disabled={this.state.busy}>
                            Register {this.state.busy && <Spin size='small' tip='Processing ...' style={{ position: 'absolute' }} />}
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        );
    }
}

const WrappedRegisterForm = Form.create({ name: 'new-offer-form' })(RegisterForm);
export default WrappedRegisterForm;
