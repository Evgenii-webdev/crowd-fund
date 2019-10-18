import * as React from 'react';

import { Card, Icon, Divider, Input, Avatar } from 'antd';
import '../../assets/css/global.css';
import '../../assets/css/account.css';

import { IUserInfo } from '../../constants/types';
export interface IAccInfoPaneProps {
}

interface IAccInfoPaneState extends IUserInfo {
    tagEdit: boolean;
    newTag: string;
}
export default class AccInfoPane extends React.Component<IAccInfoPaneProps, IAccInfoPaneState> {
    constructor(props: Readonly<IAccInfoPaneProps>) {
        super(props);

        this.state = {
            name: 'Do evenings',
            avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
            short: 'Be tolerant to diversity, tolerance is a virtue',
            role: 'Interaction expert',
            group: 'Ant gold clothing - a certain business group -a certain platform department -a certain technical department - UED',
            address: 'Hangzhou, Zhejiang Province',
            tags: ['Very thoughtful', 'Focus on design', 'Spicy~', 'Big long legs', 'Chuanmeizi', 'Haina Baichuan'],
            teams: [
                {
                    image: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                    desc: 'Scientific moving bricks',
                    link: '/'
                },
                {
                    image: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
                    desc: 'Wu Yanzu',
                    link: '/'
                },
                {
                    image: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
                    desc: 'Secondary 2 Girls Group',
                    link: '/'
                },
                {
                    image: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
                    desc: 'Programmer everyday',
                    link: '/'
                },
                {
                    image: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
                    desc: 'High-force design',
                    link: '/'
                },
                {
                    image: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
                    desc: 'Lie to learn computer',
                    link: '/'
                },
            ],
            tagEdit: false,
            newTag: '',
        }
    }

    handleNewTag = () => {
        console.log('New Tag');
        this.setState({ tagEdit: true });
    }

    handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ newTag: event.target.value });
    }

    handleTagKeypress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (this.state.newTag.length > 0) {
                this.setState((state, props) => ({
                    tags: [...state.tags, this.state.newTag],
                    tagEdit: false,
                    newTag: ''
                }));
            } else {
                this.setState({ tagEdit: false });
            }
        }
    }

    hanldeTagBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (this.state.newTag.length > 0) {
            this.setState((state, props) => ({
                tags: [...state.tags, this.state.newTag],
                tagEdit: false,
                newTag: ''
            }));
        } else {
            this.setState({ tagEdit: false });
        }
    }

    public render() {

        const info: IUserInfo = this.state;
        const { tagEdit, newTag } = this.state;

        return (
            <Card bordered={false} className='full-width'>
                <div id='account-info' className='account-block'>
                    <div className='full-width hcenter-container' style={{ margin: '16px 0' }}>
                        <img style={{ marginBottom: 24 }}
                            className='hcenter square-104'
                            src={info.avatar}
                            alt='avatar' />
                        <div className='account-name'>{info.name}</div>
                        <div className='account-desc'>{info.short}</div>
                    </div>
                    <div>
                        <p>
                            <Icon type='user' style={{ marginRight: 8 }} />
                            <span>{info.role}</span>
                        </p>
                        <p>
                            <Icon type='cluster' style={{ marginRight: 8 }} />
                            <span>{info.group}</span>
                        </p>
                        <p>
                            <Icon type='environment' style={{ marginRight: 8 }} />
                            <span>{info.address}</span>
                        </p>
                    </div>
                </div>
                <div style={{ margin: '24px 0' }}><Divider type='horizontal' dashed /></div>
                <div id='account-tags' className='account-block'>
                    <p className='block-title'>label</p>
                    {info.tags.map((tag, index) => <p key={index} className='account-tag'>{tag}</p>)}
                    {tagEdit && (
                        <Input className='account-tag'
                            style={{ width: '50%' }}
                            onBlur={this.hanldeTagBlur}
                            onKeyPress={this.handleTagKeypress}
                            onChange={this.handleTagChange}
                            autoFocus
                            value={newTag} />
                    )}
                    {!tagEdit && <span className='account-tag account-newtag' onClick={this.handleNewTag}><Icon type='plus' /></span>}
                </div>
                <div style={{ margin: '24px 0' }}><Divider type='horizontal' dashed /></div>
                <div id='account-teams' className='account-block'>
                    <p className='block-title'>team</p>
                    {info.teams.map((team, index) => (
                        <p key={index} style={{ marginBottom: 16 }} className='ellipsis'>
                            <a href={team.link} className='ellipsis'>
                                <span style={{ marginRight: 12 }}><Avatar src={team.image} size='small' /></span>
                                <span className='ellipsis normal-link'>{team.desc}</span>
                            </a>
                        </p>
                    ))}
                </div>
            </Card>
        );
    }
}
