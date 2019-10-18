import * as React from 'react';

import { List, Avatar, Typography } from 'antd';
import { IArticleInfo } from '../../constants/art-types';
import { IconNumber } from '../../components/IconText';
import '../../assets/css/account.css';

export interface IArticleItemProps {
    info: IArticleInfo;
}

const ArticleItem: React.SFC<IArticleItemProps> = (props: IArticleItemProps) => {
    const { info } = props;
    const actionStyle = { color: 'rgba(0,0,0,.45)', padding: '0 16px', borderRight: '1px solid rgba(0,0,0,0.15)' }
    return (
        <List.Item key={info.id}>
            <div style={{ display: 'flex' }}>
                {info.content.cover && (
                    <div className='list-item-cover'>
                        <img src={info.content.cover} height='100%' alt={info.content.title} />
                    </div>
                )}
                <div style={{ flexGrow: 1, margin: '8px' }}>
                    <List.Item.Meta
                        title={(
                            <a href={info.content.link} target='_blank' style={{ color: 'rgba(0,0,0,.85)' }}>{info.content.title}</a>
                        )}
                        description={(
                            <div>
                                {info.content.tags.map((tag, index) => (<span key={index} className='account-tag' style={{ marginBottom: 0 }}>{tag}</span>))}
                            </div>
                        )} />

                    <Typography.Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: '0px' }}>
                        {info.content.desc}
                    </Typography.Paragraph>
                    <div className='post-info'>
                        <Avatar src={info.post.image} size={20} style={{ marginRight: 8, verticalAlign: 'top' }} />
                        <span><a href={info.post.link}>{info.post.name}</a></span>&nbsp;
                        {info.post.nickName && <span><em>{info.post.nickName}</em></span>}&nbsp;
                        <span>posted at</span>&nbsp;
                        <span><a href={info.post.place}>{info.post.place}</a></span>
                        <span className='post-date'>{info.post.date.toDateString()}</span>
                    </div>
                    <div style={{ margin: '16px 0 8px', display: 'flex' }}>
                        <IconNumber
                            type="star-o"
                            data={info.status.stars}
                            style={actionStyle} />
                        <IconNumber
                            type="like-o"
                            data={info.status.likes}
                            style={actionStyle} />
                        <IconNumber
                            type="message"
                            data={info.status.notes}
                            style={actionStyle} />
                    </div>
                </div>

            </div>
        </List.Item>
    );
}

export default ArticleItem;
