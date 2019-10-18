import * as React from 'react';
import {
    Form,
    Input,
    Icon,
    Select,
    Button,
    Typography,
    Spin,
    DatePicker
} from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

import 'antd/dist/antd.css';
import '../../../assets/css/global.css';

import { validateNumber } from '../../../utils/validators';

export interface ICreditCardFormProps extends FormComponentProps {
}

export interface ICreditCardFormState {
    busy: boolean;
}

// const CARD_TYPES = ['VI (VISA)', 'MC (Master Card)', 'DI (DI)', 'AX (Amex)'];
const CARD_TYPES = ['Discovery', 'American Express'];

class CreditCardForm extends React.Component<ICreditCardFormProps, ICreditCardFormState> {
    constructor(props: ICreditCardFormProps) {
        super(props);

        this.state = {
            busy: false
        }
    }

    handleUpdate = async (values: any) => {
        console.log('CreditCardForm: ', values);
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.handleUpdate(values);
            }
        });
    }

    public render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
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
                <Typography.Title level={2} className='center'>Add Credit Card</Typography.Title>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label='Credit Card Name' hasFeedback>
                        {getFieldDecorator('cardName', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input the credit card name'
                                }
                            ]
                        })(<Input placeholder='Credit Card Name' />)}
                    </Form.Item>

                    <Form.Item
                        label='Credit Card Number' hasFeedback>
                        {getFieldDecorator('creditNumber', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your credit card number'
                                },
                                {
                                    validator: validateNumber
                                }
                            ]
                        })(<Input placeholder='**3456' />)}
                    </Form.Item>

                    <Form.Item label="Expireation Date" required hasFeedback>
                        {getFieldDecorator('expireDate', {
                            rules: [
                                {
                                    type: 'object',
                                    required: true,
                                    message: 'Please select time'
                                }
                            ]
                        })(
                            <DatePicker.MonthPicker format="MM/YYYY" placeholder="Select a month" />,
                        )}
                    </Form.Item>

                    <Form.Item
                        label='CVV Number' hasFeedback>
                        {getFieldDecorator('cvvNumber', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input the CVV number'
                                },
                                {
                                    validator: validateNumber
                                },
                                {
                                    max: 4,
                                    message: 'You can input maximum 4 digits'
                                }
                            ]
                        })(<Input placeholder='6633' />)}
                    </Form.Item>

                    <Form.Item label='Card Type' hasFeedback>
                        {getFieldDecorator('cardType', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please select the card type'
                                }
                            ]
                        })(
                            <Select placeholder='------------- Select ---------------'>
                                {
                                    CARD_TYPES.map((type, index) => (
                                        <Select.Option key={index} value={type}>{type}</Select.Option>
                                    ))
                                }
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item {...formBtnLayout} className={'text-center'}>
                        <Button type="primary" htmlType="submit" className='submit-btn' disabled={this.state.busy}>
                            Update {this.state.busy && <Spin size='small' tip='Processing ...' style={{ position: 'absolute' }} />}
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        );
    }
}

const WrappedCreditCardForm = Form.create({ name: 'credit-card-form' })(CreditCardForm);
export default WrappedCreditCardForm;
