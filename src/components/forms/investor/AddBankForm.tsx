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
import '../../../assets/css/global.css';

import { validateNumber } from '../../../utils/validators';

export interface IAddBankFormProps extends FormComponentProps {
}

export interface IAddBankFormState {
    busy: boolean;
}

const ACCOUNT_TYPES: string[] = ['Checking', 'Saving'];

class AddBankForm extends React.Component<IAddBankFormProps, IAddBankFormState> {
    constructor(props: IAddBankFormProps) {
        super(props);

        this.state = {
            busy: false,
        }
    }

    handleAdd = async (values: any) => {
        console.log('AddBankForm: ', values);
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.handleAdd(values);
            }
        });
    }

    public render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
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
            <section id='add-bank-form'>
                <Typography.Title level={2} className='center'>Add Bank</Typography.Title>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label='Account Holder Name' hasFeedback>
                        {getFieldDecorator('holderName', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input the account holder name'
                                }
                            ]
                        })(<Input placeholder='Account Holder Name' />)}
                    </Form.Item>

                    <Form.Item label='Nick Name'>
                        {getFieldDecorator('nickName', {
                        })(<Input placeholder='Nick Name' />)}
                    </Form.Item>

                    <Form.Item label='Routing Number' hasFeedback>
                        {getFieldDecorator('routingNumber', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input the routing number'
                                },
                                {
                                    validator: validateNumber
                                }
                            ]
                        })(<Input placeholder='Routing Number' />)}
                    </Form.Item>

                    <Form.Item label='Account Number' hasFeedback>
                        {getFieldDecorator('accountNumber', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input the account number'
                                },
                                {
                                    validator: validateNumber
                                }
                            ]
                        })(<Input placeholder='Account Number' />)}
                    </Form.Item>

                    <Form.Item label='Account Type' hasFeedback>
                        {getFieldDecorator('accountType', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please select the account type'
                                }
                            ]
                        })(
                            <Select placeholder='------------- Select ---------------'>
                                {
                                    ACCOUNT_TYPES.map(type => (
                                        <Select.Option value={type}>{type}</Select.Option>
                                    ))
                                }
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item {...formBtnLayout} className={'text-center'}>
                        <Button type="primary" htmlType="submit" className='submit-btn' disabled={this.state.busy}>
                            Add {this.state.busy && <Spin size='small' tip='Processing ...' style={{ position: 'absolute' }} />}
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        );
    }
}

const WrappedAddBankForm = Form.create({ name: 'add-bank-form' })(AddBankForm);
export default WrappedAddBankForm;
