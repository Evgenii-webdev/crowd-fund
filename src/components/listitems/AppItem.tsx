import * as React from 'react';

import { Card, List, Avatar, Icon, Tooltip, Menu, Popover } from 'antd';
import { IArticleInfo } from '../../constants/art-types';
import { Num2String } from '../../components/IconText';
import { items1 } from '../pages/Data';

export interface IAppItemProps {
    info: IArticleInfo;
    handleDownload: (id: string) => void;
    handleEdit: (id: string) => void;
    handleShare: (id: string) => void;
    handleMenu?: (id: string, key: string) => void;
}

// <IconNumber type="star-o" data={info.stars} />,
// <IconNumber type="like-o" data={info.likes} />,
// <IconNumber type="message" data={info.comments} />,
const AppItem: React.SFC<IAppItemProps> = (props) => {

    const popMenus = (id: string) => (
        <Menu>
            <Menu.Item><a href='https://alipay.com' target='_blank'>1st menu item</a></Menu.Item>
            <Menu.Item><a href='https://taobao.com' target='_blank'>2nd menu item</a></Menu.Item>
            <Menu.Item><a href='https://tmall.com' target='_blank'>3rd menu item</a></Menu.Item>
            {/* <Menu.Item onClick={() => props.handleMenu(id, '1st')}>1st menu item</Menu.Item>
            <Menu.Item onClick={() => props.handleMenu(id, '2nd')}>2nd menu item</Menu.Item>
            <Menu.Item onClick={() => props.handleMenu(id, '3rd')}>3rd menu item</Menu.Item> */}
        </Menu>
    )
    const { info } = props;
    return (
        <List.Item key={info.content.title} style={{ padding: 12 }}>
            <Card actions={[
                <Tooltip title={'download'}><Icon type='download' onClick={() => props.handleDownload(info.id)} /></Tooltip>,
                <Tooltip title={'edit'}><Icon type='edit' onClick={() => props.handleDownload(info.id)} /></Tooltip>,
                <Tooltip title={'share it'}><Icon type='share-alt' onClick={() => props.handleDownload(info.id)} /></Tooltip>,
                <Popover content={popMenus(info.id)}>
                    <Icon type='ellipsis' onClick={() => props.handleDownload(info.id)} />
                </Popover>
            ]}>
                <Card.Meta
                    avatar={<Avatar src={info.post.image} size={24} style={{ marginRight: 8, verticalAlign: 'top' }} />}
                    title={info.content.title}>
                </Card.Meta>
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                    <div style={{ padding: 4, textAlign: 'center', margin: '16px 0 0' }}>
                        <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', lineHeight: '20px', marginBottom: 8 }}>active user</p>
                        <p style={{ fontSize: 24, color: 'rgba(0,0,0,0.65)', lineHeight: '32px', marginBottom: 0 }}>
                            {Num2String(info.status.active)}
                        </p>
                    </div>
                    <div style={{ padding: 4, textAlign: 'center', margin: '16px 0 0' }}>
                        <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', lineHeight: '20px', marginBottom: 8 }}>new user</p>
                        <p style={{ fontSize: 24, color: 'rgba(0,0,0,0.65)', lineHeight: '32px', marginBottom: 0 }}>
                            {Num2String(info.status.new)}
                        </p>
                    </div>
                </div>
            </Card>
        </List.Item>
    );
}

export default AppItem;