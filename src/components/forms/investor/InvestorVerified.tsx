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

import { DOMICILES, STATES } from '../DataService';
import { validateNumber } from '../../../utils/validators';

const Date2Moment: (date: Date) => moment.Moment = (date: Date) => moment(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, 'YYYY-MM-DD');
interface StepContent {
    title: string;
    content: React.ReactNode;
}

export interface IInvestorVerFormProps extends FormComponentProps {
}

export interface IInvestorVerFormState {
    busy: boolean;
    curStep: number;
    goneStep: number;
    firstName: string;
    middleName: string;
    lastName: string;
    socialSecNumber: string;
    birthday: Date;
    domicile: number;
    address1: string;
    address2: string;
    city: string;
    state?: string;
    zipCode: string;
    country: string;
    email: string;
    altEmail: string;
    phone: string;
    altPhone: string;
    occupation: string;
    associated: boolean;
    empName: string;
    addressEmployer1: string;
    addressEmployer2: string;
    cityEmployer: string;
    stateEmployer: string;
    zipEmployer: string;
    countryEmployer: string;
}

class InvestorVerForm extends React.Component<IInvestorVerFormProps, IInvestorVerFormState> {
    constructor(props: IInvestorVerFormProps) {
        super(props);

        this.state = {
            busy: false,
            curStep: 0,
            goneStep: 0,
            firstName: '',
            middleName: '',
            lastName: '',
            socialSecNumber: '',
            birthday: new Date(),
            domicile: 0,
            address1: '',
            address2: '',
            city: '',
            state: undefined,
            zipCode: '',
            country: '',
            email: '',
            altEmail: '',
            phone: '',
            altPhone: '',
            occupation: '',
            associated: true,
            empName: '',
            addressEmployer1: '',
            addressEmployer2: '',
            cityEmployer: '',
            stateEmployer: '',
            zipEmployer: '',
            countryEmployer: '',
        }
    }

    handleUpdate = async (values: any) => {
        console.log('InvestorVerForm: ', values);
        console.log('InvestorVerForm: ', this.state);
    }

    onNext = (stepLength: number) => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (this.state.curStep === (stepLength - 1)) {
                    this.handleUpdate(values);
                } else {
                    switch (this.state.curStep) {
                        case 0:
                            this.setState((prevState, props) => (
                                {
                                    firstName: values.firstName,
                                    middleName: values.middleName,
                                    lastName: values.lastName,
                                    socialSecNumber: values.socialSecNumber,
                                    birthday: values.birthday.toDate(),
                                    domicile: values.domicile,
                                    address1: values.address1,
                                    address2: values.address2,
                                    city: values.city,
                                    state: values.state,
                                    zipCode: values.zipCode,
                                    country: values.country,
                                    email: values.email,
                                    altEmail: values.altEmail,
                                    phone: values.phone,
                                    altPhone: values.altPhone,
                                    goneStep: prevState.curStep + 1,
                                    curStep: prevState.curStep + 1
                                }
                            ));
                            break;
                        case 1:
                            this.setState((prevState, props) => (
                                {
                                    occupation: values.occupation,
                                    associated: values.associated,
                                    empName: values.empName,
                                    addressEmployer1: values.addressEmployer1,
                                    addressEmployer2: values.addressEmployer2,
                                    cityEmployer: values.cityEmployer,
                                    stateEmployer: values.stateEmployer,
                                    zipEmployer: values.zipEmployer,
                                    countryEmployer: values.countryEmployer,
                                    goneStep: prevState.curStep + 1,
                                    curStep: prevState.curStep + 1
                                }
                            ));
                            break;
                    }
                }
            } else {
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
                sm: { span: 8 },
                md: { span: 10 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
                md: { span: 14 },
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

        const curDate = Date2Moment(this.state.birthday);
        const steps: StepContent[] = [
            {
                title: 'Basic',
                content: (
                    <>
                        <Form.Item label='First Name' hasFeedback className='group-item'>
                            {getFieldDecorator('firstName', {
                                initialValue: this.state.firstName,
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your first name'
                                    }
                                ]
                            })(<Input placeholder='First Name' />)}
                        </Form.Item>
                        <Form.Item label='Middle Name' className='group-item'>
                            {getFieldDecorator('middleName', {
                                initialValue: this.state.middleName,
                            })(<Input placeholder='Middle Name' />)}
                        </Form.Item>
                        <Form.Item label='Last Name' hasFeedback>
                            {getFieldDecorator('lastName', {
                                initialValue: this.state.lastName,
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your last name'
                                    }
                                ]
                            })(<Input placeholder='Last Name' />)}
                        </Form.Item>
                        <Form.Item label='Social Security  Number' hasFeedback>
                            {getFieldDecorator('socialSecNumber', {
                                initialValue: this.state.socialSecNumber,
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input the social security  number',
                                    },
                                    {
                                        validator: validateNumber
                                    }
                                ]
                            })(<Input placeholder='XXX-XX-XXXX' />)}
                        </Form.Item>
                        <Form.Item label='Date of Birth' hasFeedback>
                            {getFieldDecorator('birthday', {
                                initialValue: curDate,
                                rules: [
                                    {
                                        type: 'object',
                                        required: true,
                                        message: 'Please select time'
                                    }
                                ]
                            })(
                                <DatePicker showTime={false} format="MM-DD-YYYY" placeholder='MM-DD-YYYY' />,
                            )}
                        </Form.Item>
                        <Form.Item label="Domicile" className='group-item'>
                            {getFieldDecorator('domicile', {
                                initialValue: this.state.domicile,
                                rules: [
                                    {
                                        required: true,
                                    }
                                ]
                            })(
                                <Radio.Group>
                                    {
                                        DOMICILES.map((item, idx) => (
                                            <Radio key={idx} value={idx}>{item}</Radio>
                                        ))
                                    }
                                </Radio.Group>
                            )}
                        </Form.Item>
                        <Form.Item label='Address Line 1' hasFeedback className='group-item'>
                            {getFieldDecorator('address1', {
                                initialValue: this.state.address1,
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your address line 1'
                                    }
                                ]
                            })(<Input placeholder='Address Line 1' />)}
                        </Form.Item>
                        <Form.Item label='Address Line 2' className='group-item'>
                            {getFieldDecorator('address2', {
                                initialValue: this.state.address2,
                            })(<Input placeholder='Address Line 2' />)}
                        </Form.Item>
                        <Form.Item label='City' hasFeedback className='group-item'>
                            {getFieldDecorator('city', {
                                initialValue: this.state.city,
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your city'
                                    }
                                ]
                            })(<Input placeholder='City' />)}
                        </Form.Item>
                        <Form.Item label='State' hasFeedback>
                            {getFieldDecorator('state', {
                                initialValue: this.state.state,
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your state'
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
                        <Form.Item label='Zip Code' hasFeedback className='group-item'>
                            {getFieldDecorator('zipCode', {
                                initialValue: this.state.zipCode,
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your zip code'
                                    }
                                ]
                            })(<Input placeholder='Zip Code' />)}
                        </Form.Item>
                        <Form.Item label='Country' hasFeedback>
                            {getFieldDecorator('country', {
                                initialValue: this.state.country,
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your country'
                                    }
                                ]
                            })(<Input placeholder='Country' />)}
                        </Form.Item>
                        <Form.Item label="Email" className='group-item'>
                            {getFieldDecorator('email', {
                                initialValue: this.state.email,
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
                        <Form.Item label="Alternate Email">
                            {getFieldDecorator('altEmail', {
                                initialValue: this.state.altEmail,
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'Please input a valid email address'
                                    }
                                ],
                            })(<Input placeholder='Alternate Email' />)}
                        </Form.Item>
                        <Form.Item label='Phone' className='group-item'>
                            {getFieldDecorator('phone', {
                                initialValue: this.state.phone,
                            })(<Input placeholder='Phone' />)}
                        </Form.Item>
                        <Form.Item label='Alternate Phone'>
                            {getFieldDecorator('altPhone', {
                                initialValue: this.state.altPhone,
                            })(<Input placeholder='Alternate Phone' />)}
                        </Form.Item>
                    </>
                )
            },
            {
                title: 'Employer',
                content: (
                    <>
                        <Form.Item label='Occupation'>
                            {getFieldDecorator('occupation', {
                                initialValue: this.state.occupation
                            })(<Input placeholder='Occupation' />)}
                        </Form.Item>

                        <Form.Item label="Associated Person">
                            {getFieldDecorator('associated', {
                                initialValue: this.state.associated
                            })(
                                <Radio.Group>
                                    <Radio value={true}>Yes</Radio>
                                    <Radio value={false}>No</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>

                        <Form.Item label='Employer Name' className='group-item'>
                            {getFieldDecorator('empName', {
                                initialValue: this.state.empName
                            })(<Input placeholder='Employer Name' />)}
                        </Form.Item>

                        <Form.Item label='Address Line 1' className='group-item'>
                            {getFieldDecorator('addressEmployer1', {
                                initialValue: this.state.addressEmployer1
                            })(<Input placeholder='Address Line 1' />)}
                        </Form.Item>

                        <Form.Item label='Address Line 2' className='group-item'>
                            {getFieldDecorator('addressEmployer2', {
                                initialValue: this.state.addressEmployer2
                            })(<Input placeholder='Address Line 2' />)}
                        </Form.Item>

                        <Form.Item label='City' className='group-item'>
                            {getFieldDecorator('cityEmployer', {
                                initialValue: this.state.cityEmployer
                            })(<Input placeholder='City' />)}
                        </Form.Item>

                        <Form.Item label='State' className='group-item'>
                            {getFieldDecorator('stateEmployer', {
                                initialValue: this.state.stateEmployer
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

                        <Form.Item label='Zip' className='group-item'>
                            {getFieldDecorator('zipEmployer', {
                                initialValue: this.state.zipEmployer
                            })(<Input placeholder='Zip' />)}
                        </Form.Item>

                        <Form.Item label='Country'>
                            {getFieldDecorator('countryEmployer', {
                                initialValue: this.state.countryEmployer
                            })(<Input placeholder='Country' />)}
                        </Form.Item>
                    </>
                )
            },
            {
                title: 'Financial',
                content: (
                    <>
                        <Form.Item label='Current Annual Income' hasFeedback>
                            {getFieldDecorator('annIncome')(<Input placeholder='Current Annual Income' />)}
                        </Form.Item>
                        <Form.Item label='Average Annual Income' hasFeedback>
                            {getFieldDecorator('avrAnnIncome')(<Input placeholder='Average Annual Income' />)}
                        </Form.Item>
                        <Form.Item label='Current Household Income' hasFeedback>
                            {getFieldDecorator('houseIncome')(<Input placeholder='Current Household Income' />)}
                        </Form.Item>
                        <Form.Item label='Average Household Income' hasFeedback>
                            {getFieldDecorator('avrHouseIncome')(<Input placeholder='Average Household Income' />)}
                        </Form.Item>
                        <Form.Item label='Household Net Worth' hasFeedback>
                            {getFieldDecorator('houseNetWorth')(<Input placeholder='Household Net Worth' />)}
                        </Form.Item>
                        <Form.Item label='Notes' hasFeedback>
                            {getFieldDecorator('notes')(<Input.TextArea placeholder='Notes' autosize={{ minRows: 2 }} />)}
                        </Form.Item>
                    </>
                )
            }
        ]
        const stepLength = steps.length;
        const { curStep } = this.state;
        const lastStep = curStep === (stepLength - 1);

        return (
            <section id='investor-verify-form'>
                <Typography.Title level={2} className='center'>Get Verified</Typography.Title>
                <Form {...formItemLayout}>
                    {
                        <Steps current={curStep} style={{ marginBottom: '16px' }} onChange={(index: any) => this.stepChange(index, stepLength)}>
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
                        {lastStep ? 'Submit' : 'Next'}
                        {this.state.busy && <Spin size='small' tip='Processing ...' style={{ position: 'absolute' }} />}
                    </Button>
                </div>
            </section>
        );
    }
}

const WrappedInvestorVerForm = Form.create({ name: 'investor-verify-form' })(InvestorVerForm);
export default WrappedInvestorVerForm;
