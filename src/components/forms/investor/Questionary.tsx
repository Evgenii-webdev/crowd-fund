import * as React from 'react';

import {
    Form,
    Input,
    Icon,
    Select,
    Button,
    Radio,
    Spin,
    Typography
} from 'antd';

import { FormComponentProps } from 'antd/lib/form/Form';

import 'antd/dist/antd.css';
import '../../../assets/css/global.css';

import { INVEST_OBJECTIVE, LEVELS, EDUCATIONS } from '../DataService';

export interface IQuestionaryFormProps extends FormComponentProps {
}

export interface IQuestionaryFormState {
    busy: boolean;
}

class QuestionaryForm extends React.Component<IQuestionaryFormProps, IQuestionaryFormState> {
    constructor(props: IQuestionaryFormProps) {
        super(props);

        this.state = {
            busy: false
        }
    }

    add = async (values: any) => {
        console.log('CreditCardForm: ', values);
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.add(values);
            }
        });
    }

    public render() {

        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                lg: { span: 24 },
                xl: { span: 12 },
                xxl: { span: 10 }
            },
            wrapperCol: {
                lg: { span: 24 },
                xl: { span: 12 },
                xxl: { span: 14 }
            }
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
            <section id='questionary-form'>
                <Typography.Title level={2} className='center'>Questionary</Typography.Title>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label='Account Id' hasFeedback>
                        {getFieldDecorator('accountId', {
                            initialValue: '',
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input an Account Id'
                                }
                            ]
                        })(<Input placeholder='Account Id' />)}
                    </Form.Item>

                    <Form.Item label='Illiquid Securities'>
                        {getFieldDecorator('illSec')(<Input placeholder='Illiquid Securities' />)}
                    </Form.Item>

                    <Form.Item label='Private Securities'>
                        {getFieldDecorator('privSec')(<Input placeholder='Private Securities' />)}
                    </Form.Item>

                    <Form.Item label='Overall time horizon for your investment portfolio'>
                        {getFieldDecorator('timeHorizon')(<Input placeholder='Overall time horizon for your investment portfolio' />)}
                    </Form.Item>

                    <Form.Item label='Investment Objective' hasFeedback>
                        {getFieldDecorator('investObj')(
                            <Select placeholder='------------- Select ---------------'>
                                {
                                    INVEST_OBJECTIVE.map((item, index) => (
                                        <Select.Option key={index} value={index}>{item}</Select.Option>
                                    ))
                                }
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item label="Rate your risk tolerance on a scale of 1 to 5" className='group-item'>
                        {getFieldDecorator('riskTol', {
                            initialValue: 0,
                        })(
                            <Radio.Group>
                                {
                                    LEVELS.map((level, index) => (
                                        <Radio key={level} value={index}>{level}</Radio>
                                    ))
                                }
                            </Radio.Group>
                        )}
                    </Form.Item>

                    <Form.Item label="Rate your investment experience on a scale of 1 to 5" className='group-item'>
                        {getFieldDecorator('investExp', {
                            initialValue: 0,
                        })(
                            <Radio.Group>
                                {
                                    LEVELS.map((level, index) => (
                                        <Radio key={level} value={index}>{level}</Radio>
                                    ))
                                }
                            </Radio.Group>
                        )}
                    </Form.Item>

                    <Form.Item label="Rate your experience in private offerings on a scale of 1 to 5" className='group-item'>
                        {getFieldDecorator('privOffExp', {
                            initialValue: 0,
                        })(
                            <Radio.Group>
                                {
                                    LEVELS.map((level, index) => (
                                        <Radio key={level} value={index}>{level}</Radio>
                                    ))
                                }
                            </Radio.Group>
                        )}
                    </Form.Item>

                    <Form.Item label='Highest level of education' hasFeedback>
                        {getFieldDecorator('education')(
                            <Select placeholder='------------- Select ---------------'>
                                {
                                    EDUCATIONS.map((item, index) => (
                                        <Select.Option key={index} value={index}>{item}</Select.Option>
                                    ))
                                }
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item label="Do you have a financial advisor?">
                        {getFieldDecorator('financialAd', {
                            initialValue: true
                        })(
                            <Radio.Group>
                                <Radio value={true}>Yes</Radio>
                                <Radio value={false}>No</Radio>
                            </Radio.Group>
                        )}
                    </Form.Item>

                    <Form.Item {...formBtnLayout} className={'text-center'}>
                        <Button type="primary" htmlType="submit" className='submit-btn' disabled={this.state.busy}>
                            Add Suitability {this.state.busy && <Spin size='small' tip='Processing ...' style={{ position: 'absolute' }} />}
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        );
    }
}

const WrappedQuestionaryForm = Form.create({ name: 'questionary-form' })(QuestionaryForm);
export default WrappedQuestionaryForm;
