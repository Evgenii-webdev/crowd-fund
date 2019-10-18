import React from "react";
import { Layout } from "antd";

import PublicMenu from "./NavMenu";
import FooterContent from './FooterContent';
import "../../assets/css/layout.css";

const { Header, Content, Footer } = Layout;

export default class PublicLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header className="header">
                    <PublicMenu />
                </Header>
                <Content style={{ backgroundColor: '#FFF' }}>
                    {this.props.children}
                </Content>
                <Footer className="footer">
                    <FooterContent />
                </Footer>
            </Layout >
        );
    }
}
