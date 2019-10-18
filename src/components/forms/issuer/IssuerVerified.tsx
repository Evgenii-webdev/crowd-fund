import * as React from 'react';
import {
    Form,
    Input,
    Icon,
    Select,
    Button,
    Typography,
    Spin,
    DatePicker,
    Radio,
    Steps
} from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import moment from 'moment';

import 'antd/dist/antd.css';
import '../../../assets/css/global.css';

import { STATES, ENTITY_TYPES, ACC_TYPES } from '../DataService';

const Date2Moment: (date: Date) => moment.Moment = (date: Date) => moment(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, 'YYYY-MM-DD');
interface StepContent {
    title: string;
    content: React.ReactNode;
}

export interface IIssuerVerFormProps extends FormComponentProps {
}

export interface IIssuerVerFormState {
    busy: boolean;
    curStep: number;
    goneStep: number;
    companyName: string;
    companyState?: string;
    entityType?: string;
    accountType?: string;
    companyTax: string;
}

class IssuerVerForm extends React.Component<IIssuerVerFormProps, IIssuerVerFormState> {
    constructor(props: IIssuerVerFormProps) {
        super(props);

        this.state = {
            busy: false,
            curStep: 0,
            goneStep: 0,
            companyName: '',
            companyState: undefined,
            entityType: undefined,
            accountType: undefined,
            companyTax: '',
        }
    }

    add = async (values: any) => {
        console.log('InvestorVerForm: ', values);
    }

    onNext = (stepLength: number) => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (this.state.curStep === (stepLength - 1)) {
                    this.add(values);
                }
            } else {
                const keys = Object.keys(err);
                console.log(keys);
                if (this.state.curStep === 0 && keys.length === 1 && keys[0] === 'issueCountry') {
                    this.setState((prevState, props) => (
                        {
                            companyName: values.companyName,
                            companyState: values.companyState,
                            entityType: values.entityType,
                            accountType: values.accountType,
                            companyTax: values.companyTax,
                            goneStep: prevState.curStep + 1,
                            curStep: prevState.curStep + 1
                        }
                    ));
                }
                console.log(err);
                return;
            }
        });
    }

    stepChange = (index: number, stepLength: number) => {
        if (index > this.state.goneStep) return;

        this.setState({
            curStep: index
        });
    }

    onPrev = () => {
        this.setState((prevState, props) => (
            {
                curStep: prevState.curStep - 1
            }
        ));
    }

    public render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
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

        const steps: StepContent[] = [
            {
                title: 'Basic',
                content: (
                    <>
                        <Form.Item label='Company Name' hasFeedback className='group-item'>
                            {getFieldDecorator('companyName', {
                                initialValue: this.state.companyName,
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your company name'
                                    }
                                ]
                            })(<Input placeholder='Company Name' />)}
                        </Form.Item>

                        <Form.Item label='Company State' hasFeedback>
                            {getFieldDecorator('companyState', {
                                initialValue: this.state.companyState,
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input the company state'
                                    }
                                ]
                            })(
                                <Select placeholder='------------- Select ---------------'>
                                    {
                                        Object.keys(STATES).map(key => (
                                            <Select.Option key={key} value={key}>{STATES[key]}</Select.Option>
                                        ))
                                    }
                                </Select>
                            )}
                        </Form.Item>

                        <Form.Item label='Entity Type'>
                            {getFieldDecorator('entityType', {
                                initialValue: this.state.entityType,
                            })(
                                <Select placeholder='------------- Select ---------------'>
                                    {
                                        ENTITY_TYPES.map((item, index) => (
                                            <Select.Option key={index} value={index}>{item}</Select.Option>
                                        ))
                                    }
                                </Select>
                            )}
                        </Form.Item>

                        <Form.Item label='Account Type'>
                            {getFieldDecorator('accountType', {
                                initialValue: this.state.accountType,
                            })(
                                <Select placeholder='------------- Select ---------------'>
                                    {
                                        ACC_TYPES.map((item, index) => (
                                            <Select.Option key={index} value={index}>{item}</Select.Option>
                                        ))
                                    }
                                </Select>
                            )}
                        </Form.Item>

                        <Form.Item label='Company Tax ID'>
                            {getFieldDecorator('companyTax', {
                                initialValue: this.state.companyTax,
                            })(<Input placeholder='Company Tax ID' />)}
                        </Form.Item>
                    </>
                )
            },
            {
                title: 'Issuer',
                content: (
                    <>
                        <Form.Item label='Middle Initial' className='group-item'>
                            {getFieldDecorator('middleInitial')(<Input placeholder='Middle Initial' />)}
                        </Form.Item>

                        <Form.Item label='SSN' className='group-item'>
                            {getFieldDecorator('ssn')(<Input placeholder='SSN' />)}
                        </Form.Item>

                        <Form.Item label="U.S. Resident?">
                            {getFieldDecorator('resident', {
                                initialValue: true
                            })(
                                <Radio.Group>
                                    <Radio value={true}>Yes</Radio>
                                    <Radio value={false}>No</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>

                        <Form.Item label="U.S. Citizen?">
                            {getFieldDecorator('citizen', {
                                initialValue: true
                            })(
                                <Radio.Group>
                                    <Radio value={true}>Yes</Radio>
                                    <Radio value={false}>No</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>

                        <Form.Item label='Date of Birth' hasFeedback>
                            {getFieldDecorator('birthday')(
                                <DatePicker showTime={false} format="MM-DD-YYYY" placeholder='Date of Birth' />,
                            )}
                        </Form.Item>

                        <Form.Item label='Address Line 1' hasFeedback>
                            {getFieldDecorator('address1')(<Input placeholder='Address Line 1' />)}
                        </Form.Item>

                        <Form.Item label='Address Line 2' hasFeedback>
                            {getFieldDecorator('address2')(<Input placeholder='Address Line 2' />)}
                        </Form.Item>


                        <Form.Item label='City' className='group-item'>
                            {getFieldDecorator('city')(<Input placeholder='City' />)}
                        </Form.Item>

                        <Form.Item label='State'>
                            {getFieldDecorator('state')(
                                <Select placeholder='------------- Select ---------------'>
                                    {
                                        Object.keys(STATES).map(key => (
                                            <Select.Option key={key} value={key}>{STATES[key]}</Select.Option>
                                        ))
                                    }
                                </Select>
                            )}
                        </Form.Item>

                        <Form.Item label='Zip' className='group-item'>
                            {getFieldDecorator('zip')(<Input placeholder='Zip' />)}
                        </Form.Item>

                        <Form.Item label='Country' hasFeedback>
                            {getFieldDecorator('country')(<Input placeholder='Country' />)}
                        </Form.Item>

                        <Form.Item label='Additional Info' hasFeedback>
                            {getFieldDecorator('addInfo')(<Input.TextArea placeholder='Type Your Information Here ...' autosize={{ minRows: 2 }} />)}
                        </Form.Item>

                        <Form.Item label='Issuing Country' hasFeedback className='group-item'>
                            {getFieldDecorator('issueCountry', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input the issuing country'
                                    }
                                ]
                            })(<Input placeholder='Issuing Country' />)}
                        </Form.Item>
                    </>
                )
            }
        ];

        const stepLength = steps.length;
        const { curStep } = this.state;
        const lastStep = curStep === (stepLength - 1);

        return (
            <section id='issuer-verify-form'>
                <Typography.Title level={2} className='center'>Get Verified</Typography.Title>
                <Form {...formItemLayout}>
                    {
                        <Steps current={curStep} style={{ marginBottom: '16px' }} onChange={(e: any) => this.stepChange(e, stepLength)}>
                            {
                                steps.map((step, index) => (
                                    <Steps.Step title={step.title} key={step.title} />
                                ))
                            }
                        </Steps>
                    }

                    {steps[curStep].content}
                </Form>
                <div className='actions'>
                    {
                        curStep > 0 && (
                            <Button
                                type="primary"
                                className='submit-btn left'
                                style={{ display: 'inline-block' }}
                                disabled={this.state.busy}
                                onClick={this.onPrev}>
                                Previous
                            </Button>
                        )
                    }
                    <Button
                        type="primary"
                        className='submit-btn right'
                        disabled={this.state.busy}
                        onClick={() => this.onNext(stepLength)}>
                        {lastStep ? 'Add' : 'Next'}
                        {this.state.busy && <Spin size='small' tip='Processing ...' style={{ position: 'absolute' }} />}
                    </Button>
                </div>
            </section>
        );
    }
}

const WrappedIssuerVerForm = Form.create({ name: 'issuer-verify-form' })(IssuerVerForm);
export default WrappedIssuerVerForm;
