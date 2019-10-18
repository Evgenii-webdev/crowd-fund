

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
import { validateNumber } from '../../utils/validators';
import 'antd/dist/antd.css';
import '../../assets/css/global.css';

export interface IRegisterFormProps extends FormComponentProps {
}

export interface IRegisterFormState {
    busy: boolean;
}

class RegisterForm extends React.Component<IRegisterFormProps, IRegisterFormState> {
    constructor(props: IRegisterFormProps) {
        super(props);

        this.state = {
            busy: false,
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

        const countries = ['China', 'USA'];
        const states = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]

        return (
            <section id='credit-card-form'>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label='Email' hasFeedback>
                        {getFieldDecorator('email', {
                            initialValue: 'antdesign@alipay.com',
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your email address'
                                }
                            ]
                        })(<Input placeholder='testuser@example.com' />)}
                    </Form.Item>

                    <Form.Item label='Nick Name' hasFeedback>
                        {getFieldDecorator('nickName', {
                            initialValue: 'Serati Ma'
                        })(<Input placeholder='Nick Name' />)}
                    </Form.Item>

                    <Form.Item label="Personal Profile">
                        {getFieldDecorator('profile', {
                            initialValue: '',
                        })(<Input.TextArea placeholder='Brief introduction to yourself' rows={5} />)}
                    </Form.Item>

                    <Form.Item label='Country/Region' hasFeedback>
                        {getFieldDecorator('country', {
                            initialValue: 'USA'
                        })(
                            <Select placeholder='------------- Select ---------------'>
                                {
                                    countries.map((country) => (
                                        <Select.Option key={country} value={country}>{country}</Select.Option>
                                    ))
                                }
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item label='Country/Region' hasFeedback>
                        <>
                            <span style={{ display: 'inline-block', width: 'calc(50% - 12px' }}>
                                <Select placeholder=' Select '>
                                    {
                                        states.map((state) => (
                                            <Select.Option key={state} value={state}>{state}</Select.Option>
                                        ))
                                    }
                                </Select>
                            </span>
                            <span style={{ marginLeft: '24px', display: 'inline-block', width: 'calc(50% - 12px' }}>
                                <Select placeholder=' Select '>
                                    {
                                        states.map((state) => (
                                            <Select.Option key={state} value={state}>{state}</Select.Option>
                                        ))
                                    }
                                </Select>
                            </span>
                        </>
                    </Form.Item>

                    <Form.Item label="Street Address">
                        {getFieldDecorator('address', {
                            initialValue: '',
                        })(<Input placeholder='Input your address please' />)}
                    </Form.Item>

                    <Form.Item label='Phone'>
                        {getFieldDecorator('phone', {
                            initialValue: '',
                            rules: [
                                {
                                    validator: validateNumber
                                }
                            ]
                        })(<Input placeholder='1234567890' />)}
                    </Form.Item>

                    <Form.Item {...formBtnLayout} className={'text-center'}>
                        <Button type="primary" htmlType="submit" className='submit-btn' disabled={this.state.busy}>
                            Update&nbsp;Information {this.state.busy && <Spin size='small' tip='Processing ...' style={{ position: 'absolute' }} />}
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        );
    }
}

const WrappedRegisterForm = Form.create({ name: 'profile-form' })(RegisterForm);
export default WrappedRegisterForm;
