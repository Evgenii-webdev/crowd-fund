
import React, { Component } from 'react'
// import { Switch, Route, Link, NavLink, RouteComponentProps } from 'react-router-dom';

import { Props } from './RouteProps';
import { ArticleInfo, IArticleBriefContent } from './ArticleDef';
import { ArticleView } from './ArticleView';

import { ArticleStore } from './data';

interface States {
    articles: ArticleInfo<IArticleBriefContent>[];
}

export default class ArticleList extends Component<Props, States> {

    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            articles: []
        }
    }

    async componentDidMount() {
        try {
            this.setState({ articles: await ArticleStore.GetAllArticles() });
        } catch (error) {
            console.log(error);
        }
    }

    GoToDetail: (id: string) => void = (id) => {
        const { articles } = this.state;
        for (let art of articles) {
            if (id === art.id) {
                if (art.content.url) {
                    window.open(art.content.url, '_blank');
                } else {
                    this.props.history.push('/articles/' + id);
                }
            }
        }
    }

    LikeArticle: (e: React.MouseEvent, id: string) => void = async (e, id) => {
        e.stopPropagation();
        ArticleStore.LikeArticle(id);

        this.setState({ articles: await ArticleStore.GetAllArticles() });
    }

    DislikeArticle: (e: React.MouseEvent, id: string) => void = async (e, id) => {
        e.stopPropagation();
        ArticleStore.DislikeArticle(id);

        this.setState({ articles: await ArticleStore.GetAllArticles() });
    }

    render() {
        const { articles } = this.state;

        return (
            <section id='articles'>
                {
                    articles.map(art => (
                        <ArticleView
                            key={art.id}
                            article={art}
                            handleSelected={this.GoToDetail}
                            handleLike={this.LikeArticle}
                            handleDislike={this.DislikeArticle}
                        />
                    ))
                }
            </section>
        )
    }
}
