import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { List, Typography } from 'antd';
import moment, { Moment } from 'moment';
import numeral from 'numeral';

import { IOfferInfo } from '../../constants/offer-types';
import { IStatus } from '../../constants/types';
import { IArticleInfo } from '../../constants/art-types';
import ArticleItemView from '../../components/listitems/ArticleItem';

const offers: IOfferInfo[] = [
    {
        id: '000',
        content: {
            title: 'Downtown Brewery',
            type: 'Debt',
            cover: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
            amount: 1000000,
            description: 'United Hatzalah medics are the fastest volunteer response fleet in the world, They are on the scene within seconds of any incident, which is critical to saving lives. To date, the organization has saved 3.5M lives and counting',
            minAmount: 500000,
            maxAmount: 2000000,
            duration: [moment(new Date(2019, 5, 10)), moment(new Date(2019, 10, 10))],
            price: 10.8,
            watermark: 'sample watermark'
        },
        post: {
            authorId: '001',
            name: 'James Tyler1',
            link: 'https://app.brite.host',
            nickName: '(Beer World, LLC)',
            image: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
            date: new Date(2019, 5, 18, 21, 38, 58),
            place: 'https://google.com'
        },
        status: {
            stars: 171,
            likes: 114,
            notes: 13,
            funded: 40,
            applies: 243,
            remained: 350200
        }
    },
    {
        id: '001',
        post: {
            authorId: '002',
            name: 'James Tyler2',
            link: 'https://app.brite.host',
            nickName: '(Beer World, LLC)',
            image: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
            date: new Date(2019, 5, 18, 21, 38, 58),
            place: 'https://google.com'
        },
        content: {
            title: 'Downtown Brewery',
            type: 'Debt',
            cover: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
            amount: 1000000,
            description: 'United Hatzalah medics are the fastest volunteer response fleet in the world, They are on the scene within seconds of any incident, which is critical to saving lives. To date, the organization has saved 3.5M lives and counting',
            minAmount: 500000,
            maxAmount: 2000000,
            duration: [moment(new Date(2019, 5, 10)), moment(new Date(2019, 10, 10))],
            price: 10.8,
            watermark: 'sample watermark'
        },
        status: {
            stars: 171,
            likes: 114,
            notes: 13,
            funded: 40,
            applies: 243,
            remained: 350200
        }
    },
    {
        id: '002',
        post: {
            authorId: '000',
            name: 'James Tyler3',
            link: 'https://app.brite.host',
            nickName: '(Beer World, LLC)',
            image: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
            date: new Date(2019, 5, 18, 21, 38, 58),
            place: 'https://google.com'
        },
        content: {
            title: 'Downtown Brewery',
            type: 'Debt',
            cover: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
            amount: 1000000,
            description: 'United Hatzalah medics are the fastest volunteer response fleet in the world, They are on the scene within seconds of any incident, which is critical to saving lives. To date, the organization has saved 3.5M lives and counting',
            minAmount: 500000,
            maxAmount: 2000000,
            duration: [moment(new Date(2019, 5, 10)), moment(new Date(2019, 10, 10))],
            price: 10.8,
            watermark: 'sample watermark'
        },
        status: {
            stars: 171,
            likes: 114,
            notes: 13,
            funded: 40,
            applies: 243,
            remained: 350200
        }
    },
];

export interface IOfferListPageProps extends RouteComponentProps {
}

export interface IOfferListPageState {
}


class OfferListPage extends React.Component<IOfferListPageProps> {

    arts: IArticleInfo[] = [];

    constructor(props: Readonly<IOfferListPageProps>) {
        super(props);

        for (let offer of offers) {
            const status = offer.status as IStatus;
            let art: IArticleInfo = {
                id: offer.id,
                content: {
                    title: offer.content.title,
                    cover: offer.post.image,
                    link: offer.post.link,
                    tags: [
                        `${offer.status.funded}% funded`,
                        `${offer.status.applies} investors`,
                        `$${numeral(offer.status.remained).format('0,0')} remaining`
                    ],
                    desc: offer.content.description
                },
                post: { ...offer.post },
                status: {
                    ...status,
                    new: 0,
                    active: 0
                }
            }

            this.arts.push(art);
        }
    }

    render() {
        const title = <Typography component='h4' style={{ margin: '0 16px' }}>All Offers</Typography>
        console.log('OfferListPage', this.arts.length);
        return (
            <List itemLayout='vertical' style={{ padding: '0 12px' }} header={title}>
                {this.arts.map(art => (
                    <ArticleItemView info={art} />
                ))}
            </List>
        );
    }
}

export default OfferListPage;