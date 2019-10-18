

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
    Upload,
    Modal
} from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import { UploadFile, UploadChangeParam } from 'antd/lib/upload/interface';
import moment, { Moment } from 'moment';

import 'antd/dist/antd.css';
import '../../../assets/css/global.css';

import { validateNumber, validateFixedNumber } from '../../../utils/validators';
import { IOfferContent } from '../../../constants/offer-types';

export interface INewOfferFormProps extends FormComponentProps {
    offerTypes: string[];
    handleSubmit?: (info: IOfferContent) => void;
}

export interface INewOfferFormState {
    busy: boolean;
    coverImage?: UploadFile;
    coverPreviewURL?: string;
    coverPreview: boolean;
    coverError: boolean;
    coverHelp: string;
}

class NewOfferForm extends React.Component<INewOfferFormProps, INewOfferFormState> {
    constructor(props: INewOfferFormProps) {
        super(props);

        this.state = {
            busy: false,
            coverImage: undefined,
            coverPreview: false,
            coverPreviewURL: '',
            coverError: false,
            coverHelp: 'Please upload a cover image',
        }
    }

    addOffer = async (values: IOfferContent) => {
        this.props.handleSubmit && await this.props.handleSubmit(values);
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        this.setState({ coverError: !this.state.coverImage });
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const duration = values.duration as [Moment, Moment];
                let info: IOfferContent = {
                    cover: this.state.coverPreviewURL as string,
                    title: values.offerName,
                    type: values.offerType,
                    amount: values.targetAmount,
                    minAmount: values.minAmount,
                    maxAmount: values.maxAmount,
                    price: values.price,
                    duration: [duration[0], duration[1]],
                    description: values.offerText,
                    watermark: values.offerWatermark
                }
                this.addOffer(info);
            }
        });
    }

    handleCoverPreview = async (file: UploadFile) => {
        this.setState({
            coverPreviewURL: file.url || file.thumbUrl,
            coverPreview: true,
        });
    }

    handleCoverChange = (info: UploadChangeParam) => {
        this.setState({ coverImage: info.fileList[0] });
    }

    handleCancel = () => this.setState({ coverPreview: false });

    public render() {
        const { offerTypes } = this.props;
        const { getFieldDecorator } = this.props.form;
        const { coverImage, coverError, coverHelp, coverPreviewURL, coverPreview } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 10 },
                md: { span: 12 },
                lg: { span: 10 },
                xl: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
                md: { span: 12 },
                lg: { span: 14 },
                xl: { span: 16 }
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
            <section id='new-offer-form'>
                <Typography.Title level={2} className='center'>New Offer</Typography.Title>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label='Issuer Name' hasFeedback className='group-item'>
                        {getFieldDecorator('issuerName', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your issuer name'
                                }
                            ]
                        })(<Input placeholder='Issuer Name' />)}
                    </Form.Item>

                    <Form.Item label='Offering Name'>
                        {getFieldDecorator('offerName', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input the offering name'
                                }
                            ]
                        })(<Input placeholder='Offering Name' />)}
                    </Form.Item>

                    <Form.Item label="Cover Photo" required className='group-item' validateStatus={coverError ? 'error' : ''} help={coverHelp}>
                        <Upload
                            fileList={coverImage ? [coverImage] : []}
                            listType='picture-card'
                            onPreview={this.handleCoverPreview}
                            onChange={this.handleCoverChange}
                            accept='.png,.jpg,.svg,.jpeg,.bmp,.tiff,.gif'
                        >
                            {!this.state.coverImage && (
                                <>
                                    <Icon type="plus" />
                                    <div className="ant-upload-text">Upload</div>
                                </>
                            )}
                        </Upload>
                        <Modal visible={coverPreview} footer={null} onCancel={this.handleCancel}>
                            <img src={coverPreviewURL} alt='cover' style={{ width: '100%' }} />
                        </Modal>
                    </Form.Item>

                    <Form.Item label='Offering Type'>
                        {getFieldDecorator('offerType', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please select the offering type'
                                }
                            ]
                        })(
                            <Select placeholder='------------- Select ---------------'>
                                {
                                    offerTypes.map((item, index) => (
                                        <Select.Option key={index} value={index}>{item}</Select.Option>
                                    ))
                                }
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item label='Target Amount'>
                        {getFieldDecorator('targetAmount', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input the target amount'
                                },
                                {
                                    validator: validateNumber
                                }
                            ]
                        })(<Input placeholder='Target Amount' />)}
                    </Form.Item>

                    <Form.Item label='Min. Amount'>
                        {getFieldDecorator('minAmount', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input the minimum amount'
                                },
                                {
                                    validator: validateNumber
                                }
                            ]
                        })(<Input placeholder='Min Amount' />)}
                    </Form.Item>

                    <Form.Item label='Max. Amount'>
                        {getFieldDecorator('maxAmount', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input the maximum amount'
                                },
                                {
                                    validator: validateNumber
                                }
                            ]
                        })(<Input placeholder='Max Amount' />)}
                    </Form.Item>

                    <Form.Item label='Price Per Unit'>
                        {getFieldDecorator('price', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input the price per unit'
                                },
                                {
                                    validator: validateFixedNumber
                                }
                            ]
                        })(<Input placeholder='Price Per Unit' />)}
                    </Form.Item>

                    <Form.Item label='Offer Duration' hasFeedback>
                        {getFieldDecorator('duration', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please select the offer duration'
                                }
                            ]
                        })(
                            <DatePicker.RangePicker showTime={false} placeholder={['MM-DD-YYYY', 'MM-DD-YYYY']} format="MM-DD-YYYY" />,
                        )}
                    </Form.Item>

                    <Form.Item label='Offering Text'>
                        {getFieldDecorator('offerText', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Type Your Offering Text Here ...'
                                }
                            ]
                        })(<Input.TextArea placeholder='Type Your Offering Text Here ...' autosize={{ minRows: 2 }} />)}
                    </Form.Item>

                    <Form.Item label='Offering Document Watermark'>
                        {getFieldDecorator('offerWatermark', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Type Your Offering Document Watermark Here ...'
                                }
                            ]
                        })(<Input.TextArea placeholder='Type Your Offering Document Watermark Here ...' autosize={{ minRows: 2 }} />)}
                    </Form.Item>

                    <Form.Item {...formBtnLayout} className={'text-center'}>
                        <Button type="primary" htmlType="submit" className='submit-btn' disabled={this.state.busy}>
                            Add Offering {this.state.busy && <Spin size='small' tip='Processing ...' style={{ position: 'absolute' }} />}
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        );
    }
}

export default Form.create<INewOfferFormProps>({ name: 'new-offer-form' })(NewOfferForm);