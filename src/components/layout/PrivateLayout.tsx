import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Link } from 'react-router-dom'


import { Layout, Menu, Icon, Tooltip } from 'antd';

import FooterContent from './FooterContent';
import SideMenuContent from './SideMenu';
import HeaderContent from './Header';
import { UserRoleProps } from '../../containers/PrivateRoute';
import { threadId } from 'worker_threads';

const { Header, Footer, Sider, Content } = Layout;

interface IPrivateLayoutState {
    collapsed: boolean;
}

export default class PrivateLayout extends React.Component<UserRoleProps, IPrivateLayoutState> {
    constructor(props: Readonly<UserRoleProps>) {
        super(props);

        this.state = {
            collapsed: false
        }
    }

    onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed });
    }

    onToggleCollpase = () => {
        this.setState((pre, props) => ({
            collapsed: !pre.collapsed
        }));
    }

    handleBreakpoint = (broken: boolean) => {
        this.setState({ collapsed: broken });
    }

    gotoTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        const { match, role } = this.props;

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    width={256} id='sidebar'
                    onBreakpoint={this.handleBreakpoint}
                    breakpoint='lg'>
                    <SideMenuContent collapsed={this.state.collapsed} role={role} {...this.props} />
                </Sider>
                <Layout>
                    <Header id='header' style={{ padding: '0' }}>
                        <HeaderContent
                            collapsed={this.state.collapsed}
                            toggleCollapse={this.onToggleCollpase}
                            badgeCount={16} />
                    </Header>
                    <Content id='content' style={{ backgroundColor: 'white' }}>
                        {this.props.children}
                    </Content>
                    <Footer className='footer' id='footer'>
                        <FooterContent />
                    </Footer>
                </Layout>
                <span className='to-top' onClick={this.gotoTop}>
                    <Icon type='to-top' className='icon' />
                </span>
            </Layout>
        )
    }
}

