import { IGeneralInfo } from './types';
import { IArtStatus } from './stat-types';
import { IOfferPostInfo } from './post-types';

export interface IArticleContent {
    title: string;
    cover?: string;
    link: string;
    tags: string[];
    desc: string;
}

export type IArticleInfo = IGeneralInfo<IArticleContent, IOfferPostInfo, IArtStatus>; 
