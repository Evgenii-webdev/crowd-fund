
import React from "react";
import { Switch, Route } from "react-router-dom";
import { PageHeader, Row, Col, Button } from "antd";

import { Props } from "./RouteProps";

import "antd/dist/antd.css";
import "../../../assets/css/articles.css";
import "../../../assets/css/global.css";

import ArticleList from "./ArticleList";
import ArticleSubmit from "./ArticleSubmit";
import ArticleDetail from "./ArticleDetail";



class Articles extends React.Component<Props> {
    constructor(props: Readonly<Props>) {
        super(props);
        console.log(props);
    }

    handleBack: () => void = () => {
        this.props.history.goBack();
    }

    handleNew: () => void = () => {
        this.props.history.push(this.props.match.url + '/post');
    }

    render() {
        const { match, history, location } = this.props;
        console.log(match, history, location);
        return (
            <Row gutter={24} className='row' align="top" style={{ margin: "auto" }}>
                <Col xs={0} md={4}>
                    <div className='sidebar center'>
                        <p>Page Left Sidebar</p>
                    </div>
                </Col>
                <Col xs={24} md={16}>
                    <PageHeader
                        onBack={this.handleBack}
                        title='Articles' extra={!location.pathname.includes('/post') && (
                            <section id='topbar'>
                                <Button type='link' onClick={this.handleNew}>New Article</Button>
                            </section>
                        )} />
                    <Switch>
                        <Route exact path='/articles' component={ArticleList} />
                        <Route path='/articles/post' component={ArticleSubmit} />
                        <Route path='/articles/:id' component={ArticleDetail} />
                    </Switch>
                </Col>
                <Col xs={0} md={4}>
                    <div className='sidebar center'>
                        <p>Page Right Sidebar</p>
                    </div>
                </Col>
            </Row >
        )
    }
}

export default Articles;