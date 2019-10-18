import * as React from 'react';

import { Tabs, List } from 'antd';

import ArticleItem from '../../components/listitems/ArticleItem';
import AppItem from '../../components/listitems/AppItem';
import CoverItem from '../../components/listitems/CoverItem';

import { IArticleInfo } from '../../constants/art-types';
import { ICoverInfo } from '../../constants/types';
import { FakeArticleData, FakeBlogData } from './FakeData';

interface ICoverListProps {
    data: ICoverInfo[];
}
interface IArticleListProps {
    data: IArticleInfo[];
}

export interface IAccountRightPaneProps {
}

export default class AccountRightPane extends React.Component<IAccountRightPaneProps, any> {

    handleDownload = (id: string) => {
        console.log('Download', id);
    }

    handleEdit = (id: string) => {
        console.log('Edit', id);
    }

    handleShare = (id: string) => {
        console.log('Share', id);
    }

    handleMenu = (id: string, key: string) => {
        console.log('Menu', id, key);
    }

    public render() {

        const ArticleList: React.SFC<IArticleListProps> = (props) => {
            return (
                <List itemLayout='vertical' style={{ padding: '0 12px' }}>
                    {props.data.map(item => (<ArticleItem key={item.id} info={item} />))}
                </List>
            )
        }

        const AppList: React.SFC<IArticleListProps> = (props) => {
            return (
                <List itemLayout='vertical' grid={{ xs: 1, sm: 2, xxl: 3 }}>
                    {props.data.map(item => (
                        <AppItem
                            key={item.id}
                            handleDownload={this.handleDownload}
                            handleEdit={this.handleEdit}
                            handleShare={this.handleShare}
                            handleMenu={this.handleMenu}
                            info={item} />
                    ))}
                </List>
            )
        }

        const ItemList: React.SFC<ICoverListProps> = (props) => {
            return (
                <List itemLayout='vertical' grid={{ xs: 1, sm: 2, xxl: 3 }}>
                    {props.data.map((item, index) => (
                        <CoverItem key={index} info={item} />
                    ))}
                </List>
            )
        }

        const tabs = [
            { key: 'article', tab: 'Article', content: () => (<ArticleList data={FakeArticleData} />) },
            { key: 'application', tab: 'Application', content: () => (<AppList data={FakeArticleData} />) },
            { key: 'item', tab: 'Item', content: () => (<ItemList data={FakeBlogData} />) },
        ]
        return (
            <div id='account-right-pane'>
                <Tabs style={{ backgroundColor: 'white' }} tabBarStyle={{ padding: '8px 16px 0' }}>
                    {tabs.map(tab => (
                        <Tabs.TabPane tab={tab.tab} key={tab.key}>
                            <div className='rightpane-content-container full-width'>
                                {tab.content()}
                            </div>
                        </Tabs.TabPane>
                    ))}
                </Tabs>
            </div>
        );
    }
}
