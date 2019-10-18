
import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css"

import {
    Form,
    Input,
    Icon,
    Select,
    Radio,
    Button,
    Upload,
    Modal,
    Spin
} from 'antd';

import { FormComponentProps } from 'antd/lib/form/Form';
import { CheckboxOptionType } from 'antd/lib/checkbox';
import { RadioChangeEvent } from 'antd/lib/radio';
import { UploadFile, UploadChangeParam } from 'antd/lib/upload/interface';

import 'antd/dist/antd.css';
import "../../../assets/css/articles.css";

import { IArticleContent } from './ArticleDef';
import { ArticleStore } from './data';

const { Option } = Select;

const VIDEO_MAX: number = 1;
const PHOTO_MAX: number = 3;

interface PostState {
    fullopt: string;
    photoList: UploadFile[];
    videoList: UploadFile[];
    coverImage?: UploadFile;
    coverPreviewURL?: string;
    coverPreview: boolean;
    photoPreviewURL?: string;
    photoPreview: boolean;
    videoPreviewURL?: string;
    videoPreview: boolean;
    coverError: boolean;
    coverHelp: string;
    description: string;
    busy: boolean;
}


class ArticleSubmit extends Component<FormComponentProps, PostState> {
    constructor(props: Readonly<FormComponentProps>) {
        super(props)

        this.state = {
            fullopt: 'url',
            coverImage: undefined,
            photoList: [],
            videoList: [],
            coverPreviewURL: '',
            coverPreview: false,
            photoPreviewURL: '',
            photoPreview: false,
            videoPreviewURL: '',
            videoPreview: false,
            coverError: false,
            coverHelp: 'Please upload a cover image',
            description: '',
            busy: false
        }
    }

    postArticle = async (values: any) => {
        const article: IArticleContent = {
            title: values.title,
            category: values.category,
            cover: !this.state.coverImage ? '' : this.state.coverImage.url || this.state.coverImage.thumbUrl || '',
            brief: values.shortdesc,
            url: values.remote,
            description: this.state.description,
            photos: [],
            videos: []
        }

        for (let photo of this.state.photoList) {
            article.photos && article.photos.push(photo.url || photo.thumbUrl || '');
        }
        for (let video of this.state.videoList) {
            article.videos && article.videos.push(video.url || video.thumbUrl || '');
        }

        this.setState({ busy: true });
        let msg: string = 'A new article was posted';
        try {
            await ArticleStore.PostArticle(article, {
                author: 'dage',
                date: new Date(),
                place: 'China Jilin'
            });

            this.setState({ busy: false });

        } catch (error) {
            console.log(error);
            this.setState({ busy: false });
            msg = 'Article posting failed.';
        }

        Modal.info({
            title: 'Info',
            content: (
                <div>
                    <p>{msg}</p>
                </div>
            ),
            onOk() { },
        });
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        this.setState({ coverError: !this.state.coverImage });
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (this.state.coverImage) {
                    this.postArticle(values);
                } else {
                    this.setState({ coverError: !this.state.coverImage });
                    return;
                }
            }
        });
    }

    handleDescOption = (event: RadioChangeEvent) => {
        this.setState({ fullopt: event.target.value });
    }

    handleCoverPreview = async (file: UploadFile) => {
        this.setState({
            coverPreviewURL: file.url || file.thumbUrl,
            coverPreview: true,
        });
    }

    handleCoverChange = (info: UploadChangeParam) => {
        this.setState({ coverImage: info.fileList[0] }, () => {
            console.log('cover list: ', this.state.photoList);
        });
    }

    handlePhotoPreview = async (file: UploadFile) => {
        this.setState({
            photoPreviewURL: file.url || file.thumbUrl,
            photoPreview: true,
        });
    }

    handlePhotoChange = (info: UploadChangeParam) => {
        this.setState({ photoList: info.fileList }, () => {
            console.log('photo list: ', this.state.photoList);
        });
    }

    handleVideoPreview = async (file: UploadFile) => {
        this.setState({
            videoPreviewURL: file.url || file.thumbUrl,
            videoPreview: true,
        });
    }

    handleVideoChange = (info: UploadChangeParam) => {
        this.setState({ videoList: info.fileList }, () => {
            console.log('photo list: ', this.state.videoList);
        });
    }

    handleDescChange = (value: string) => {
        console.log(value);
        this.setState({ description: value });
    }

    handleCancel = () => this.setState({ photoPreview: false, coverPreview: false, videoPreview: false });

    render() {

        const { getFieldDecorator } = this.props.form;
        const { photoPreview, photoPreviewURL, videoPreview,
            videoPreviewURL, coverPreview, coverPreviewURL,
            coverImage, coverError, coverHelp, description } = this.state;
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

        const categories: string[] = ['Politics', 'Economics', 'Business', 'News', 'World'];
        const fulldesc_opts: Array<CheckboxOptionType> = [{ label: 'Remote URL', value: 'url' }, { label: 'Custom Description', value: 'custom' }];

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label='Title' className='group-item'>
                    {getFieldDecorator('title', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input the title'
                            }
                        ]
                    })(<Input placeholder='article title' />)}
                </Form.Item>
                <Form.Item label="Cover Photo" className='group-item' validateStatus={coverError ? 'error' : ''} help={coverHelp}>
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
                <Form.Item
                    label="Category" hasFeedback className='group-item'>
                    {getFieldDecorator('category', {
                        rules: [
                            {
                                required: true,
                                message: 'Please select a category!',
                            }
                        ],
                    })(
                        <Select placeholder={'Please select a category'}>
                            {categories.map(cat => <Option key={cat} value={cat}>{cat}</Option>)}
                        </Select>
                    )}
                </Form.Item>

                <Form.Item label='Short Description'>
                    {getFieldDecorator('shortdesc', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input a short description'
                            }
                        ]
                    })(<Input placeholder='Short description here' />)}
                </Form.Item>

                <Form.Item label="Full Description" className='group-item'>
                    <Radio.Group options={fulldesc_opts} value={this.state.fullopt} onChange={this.handleDescOption} />
                </Form.Item>

                {
                    this.state.fullopt === 'url' &&
                    <Form.Item label="Remote URL">
                        {getFieldDecorator('remote', {
                            rules: [
                                {
                                    type: 'url',
                                    message: 'Please input a valid URL'
                                },
                                {
                                    required: true,
                                    message: 'Please input your remote URL!',
                                }
                            ],
                        })(<Input placeholder='https://example.com/articles/1000' />)}
                    </Form.Item>
                }

                {this.state.fullopt !== 'url' && (
                    <>
                        {/* <Form.Item label='Description' className='group-item'>
                            {getFieldDecorator('fulldesc', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input a full description'
                                    }
                                ]
                            })(<Input.TextArea placeholder='Full description here' autosize={{ minRows: 2 }} />)}
                        </Form.Item> */}

                        <Form.Item label='Description' className='group-item' required>
                            <SimpleMDE value={description} onChange={this.handleDescChange}
                                options={{
                                    placeholder: 'Description here'
                                }} />
                        </Form.Item>
                        {/* Photo upload
                        <Form.Item label='Photos' className='group-item'>
                            <Upload
                                fileList={this.state.photoList}
                                listType='picture-card'
                                onPreview={this.handlePhotoPreview}
                                onChange={this.handlePhotoChange}
                                accept='.png,.jpg,.svg,.jpeg,.bmp,.tiff,.gif'
                            >
                                {
                                    (this.state.photoList.length < PHOTO_MAX) && (
                                        <>
                                            <Icon type="plus" />
                                            <div className="ant-upload-text">Upload</div>
                                        </>
                                    )
                                }
                            </Upload>
                        </Form.Item>

                        <Modal visible={photoPreview} footer={null} onCancel={this.handleCancel}>
                            <img alt="example" style={{ width: '100%' }} src={photoPreviewURL} />
                        </Modal>

                        <Form.Item label='Videos'>
                            <Upload
                                fileList={this.state.videoList}
                                listType='picture-card'
                                onPreview={this.handleVideoPreview}
                                onChange={this.handleVideoChange}
                                accept='.avi,.mpg,.mpeg,.mp4'
                            >
                                {
                                    (this.state.videoList.length < VIDEO_MAX) && (
                                        <>
                                            <Icon type="plus" />
                                            <div className="ant-upload-text">Upload</div>
                                        </>
                                    )
                                }
                            </Upload>
                        </Form.Item> */}

                        <Modal visible={videoPreview} footer={null} onCancel={this.handleCancel}>
                            <video src={videoPreviewURL} style={{ width: '100%' }} />
                        </Modal>

                    </>
                )}

                <Form.Item {...formBtnLayout} className={'text-center'}>
                    <Button type="primary" htmlType="submit" className='submit-btn' disabled={this.state.busy}>
                        Submit {this.state.busy && <Spin size='small' tip='Processing ...' style={{ position: 'absolute' }} />}
                    </Button>
                </Form.Item>



            </Form>
        )
    }
}

const WrappedArticleSubmit = Form.create({ name: 'register' })(ArticleSubmit);
export default WrappedArticleSubmit;
