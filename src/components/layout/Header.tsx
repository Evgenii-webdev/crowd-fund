import React from 'react';
import { Link } from 'react-router-dom';


import { Icon, Badge, Dropdown } from 'antd';


interface IHeaderProps {
    collapsed: boolean;
    badgeCount: number;
    toggleCollapse: () => void;
}

const Header: React.SFC<IHeaderProps> = (props) => {

    const { collapsed, badgeCount } = props;
    const type = collapsed ? 'menu-unfold' : 'menu-fold';

    return (
        <div style={{ height: '64px', backgroundColor: 'white', margin: '0', border: 'none' }}>
            <span className='toggle' onClick={props.toggleCollapse}>
                <Icon type={type} style={{ fontSize: '20px' }} />
            </span>

            <div className='right-bar'>
                <div className='action'>
                    <Link to='/' rel='noopener noreferrer'>
                        <Icon type='home' style={{ fontSize: '20px' }} />
                    </Link>
                </div>
                <div className='action'>
                    <a href='https://ant.design' rel='noopener noreferrer' target='_blank'>
                        <Icon type='question-circle-o' style={{ fontSize: '20px' }} />
                    </a>
                </div>
                <div className='action'>
                    <Dropdown trigger={['click']} overlay={(
                        <>
                            <p>Notificiation 1</p>
                            <p>Notificiation 2</p>
                            <p>Notificiation 3</p>
                        </>
                    )}>
                        <Badge count={badgeCount}>
                            <span style={{ display: 'inline-block', height: '24px', width: '24px' }}>
                                <Icon type='bell' style={{ fontSize: '20px' }} />
                            </span>
                        </Badge>
                    </Dropdown>
                </div>

            </div>
        </div>
    )
}

export default Header;

