import * as React from 'react';

import { Card, List, Avatar, Icon, Tooltip } from 'antd';
import { ICoverInfo } from '../../constants/types';
import { FromNow } from '../../utils/Date';

export interface ICoverItemProps {
    info: ICoverInfo;
}

const CoverItem: React.SFC<ICoverItemProps> = (props: ICoverItemProps) => {
    const { info } = props;
    return (
        <List.Item key={info.title} style={{ padding: 12 }}>
            <Card cover={<img src={info.cover} alt={info.title} />}>
                <Card.Meta
                    description={<div className='ellipsis-2lns'>{info.desc}</div>}
                    title={info.title} />
                <div style={{ display: 'flex', width: '100%', marginTop: 16, height: 20, lineHeight: '20px' }}>
                    <div style={{ flexGrow: 1 }}>{FromNow(info.post)}</div>
                    <div style={{ textAlign: 'end' }}>
                        {info.users.map((user, index) => (
                            <Tooltip title={user.name} key={user.name + index}>
                                <Avatar src={user.photo} size={20} style={{ marginLeft: '-8px' }} />
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </Card>
        </List.Item>
    );
}

export default CoverItem;