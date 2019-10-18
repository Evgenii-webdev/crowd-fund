import * as React from 'react';
import { Row, Col } from 'antd';
import { Button, Upload } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';

import BasicForm from './BasicForm';
import '../../assets/css/account.css';
import Typography from 'antd/lib/typography/Typography';

export interface IBasicSettingProps {
}

export default class BasicSetting extends React.Component<IBasicSettingProps, any> {

    handleUpload = (param: UploadChangeParam) => {

    }

    public render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
            },
            wrapperCol: {
                xs: { span: 24 },
            },
        };

        return (
            <Row type='flex' justify='end'>
                <Col xs={24} xl={12}>
                    <div className='account-avatar-wrapper'>
                        <Typography className='account-avatar-title'>Avatar</Typography>
                        <img className='account-avatar' src='https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png' alt='avatar' />
                        <Upload
                            name="logo" action="/upload.do" listType="picture"
                            className='account-avatar-upload' accept='image/*'
                            onChange={this.handleUpload}>
                            <Button icon='upload' className='account-avatar-upload'>Change Avatar</Button>
                        </Upload>
                    </div>
                </Col>
                <Col xs={24} xl={12}>
                    <div className='account-form-wrapper'>
                        <BasicForm />
                    </div>
                </Col>
            </Row>
        );
    }
}
