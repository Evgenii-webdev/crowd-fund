
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import {
    Card,
    Typography
} from 'antd';

import { ArticleInfo } from './ArticleDef';
import { ArticleStore } from './data';
import { IconNumber } from './IconText';

import "antd/dist/antd.css";
import "../../../assets/css/articles.css";

interface MatchParams {
    id: string;
}


interface DetailProps extends RouteComponentProps<MatchParams> {
    handleLike: (e: React.MouseEvent, id: string) => void;
    handleDislike: (e: React.MouseEvent, id: string) => void;
}

interface DetailState {
    detail?: ArticleInfo;
}

class ArticleDetail extends React.Component<DetailProps, DetailState> {
    constructor(props: Readonly<DetailProps>) {
        super(props);

        this.state = {
            detail: undefined
        };
    }

    async componentDidMount() {
        await this._loadArticle();
    }

    private _loadArticle: () => void = async () => {
        const { match } = this.props;
        try {
            const detail = await ArticleStore.GetArticleDetail(match.params.id);
            this.setState({ detail });
        } catch (error) {
            console.log(error);
        }
    }

    handleLike: (e: React.MouseEvent, id: string) => void = async (e, id) => {
        e.stopPropagation();

        try {
            await ArticleStore.LikeArticle(id);
            await this._loadArticle();
        } catch (error) {
            console.log(error);
        }
    }

    handleDislike: (e: React.MouseEvent, id: string) => void = async (e, id) => {
        e.stopPropagation();

        try {
            await ArticleStore.DislikeArticle(id);
            await this._loadArticle();
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { detail } = this.state;
        if (!detail) {
            return <Card bordered={false}>{"Can't find any data"}</Card>
        }

        return (
            <Card bordered={false} className='flex-container'>
                <section className='art-detail-topbar'>
                    {detail.content.category}
                    <div className='right'>
                        <IconNumber
                            type='like'
                            data={detail.likes}
                            handleClick={(e) => this.handleLike(e, detail.id)} />
                        <IconNumber
                            type='dislike'
                            data={detail.dislikes}
                            handleClick={(e) => this.handleDislike(e, detail.id)} />
                    </div>
                </section>
                <Typography.Title>{detail.content.title}</Typography.Title>
                <section className='art-detail-post'>
                    <p>{`${detail.postInfo.author} ${detail.postInfo.date.toDateString()} . ${detail.postInfo.place}`}</p>
                </section>
                <section className='art-detail-cover'>
                    <img src={detail.content.cover} alt='detail cover' />
                </section>
                <section className='art-detail-desc'>
                    {detail.content.brief}
                </section>
                <section className='art-detail-full'>
                    <ReactMarkdown source={detail.content.description} />
                </section>
            </Card>
        )
    }
}

export default ArticleDetail;