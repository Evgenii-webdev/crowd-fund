
import React from 'react'

import {
    Card,
    Typography
} from 'antd';

import 'antd/dist/antd.css';
import "../../../assets/css/articles.css";

import { ArticleInfo, IArticleBriefContent } from './ArticleDef';
import { IconNumber } from './IconText';

interface ArtViewProps {
    article: ArticleInfo<IArticleBriefContent>;
    handleSelected: (id: string) => void;
    handleLike: (e: React.MouseEvent, id: string) => void;
    handleDislike: (e: React.MouseEvent, id: string) => void;
}

export const ArticleView: React.SFC<ArtViewProps> = (props: ArtViewProps) => {

    return (
        <Card hoverable={true} bordered={false} style={{ marginBottom: '8px' }}
            bodyStyle={{ padding: '0px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}
            onClick={() => props.handleSelected(props.article.id)}
            className='article flex-container'>
            <section className='article-cover'>
                <img src={props.article.content.cover} alt={props.article.content.title} height='150px' width='150px' />
            </section>
            <section className='article-body'>
                <div className='article-topbar'>
                    {props.article.content.category}
                    <div className='right'>
                        <IconNumber
                            type='like'
                            data={props.article.likes}
                            handleClick={(e) => props.handleLike(e, props.article.id)} />
                        <IconNumber
                            type='dislike'
                            data={props.article.dislikes}
                            handleClick={(e) => props.handleDislike(e, props.article.id)} />
                    </div>
                </div>
                <div className='article-title margin-top6'>
                    <Typography.Paragraph ellipsis={{ rows: 1 }} style={{ marginBottom: '0px' }}>
                        {props.article.content.title}
                    </Typography.Paragraph>
                </div>
                <div className='article-post margin-top6'>
                    {`${props.article.postInfo.author} ${props.article.postInfo.date.toDateString()} . ${props.article.postInfo.place}`}
                </div>
                <div className='article-desc margin-top6'>
                    <Typography.Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: '0px' }}>
                        {props.article.content.brief}
                    </Typography.Paragraph>
                </div>
            </section>
        </Card>
    )
}
