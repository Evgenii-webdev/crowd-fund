import moment, { Moment } from 'moment';
import { IGeneralInfo } from './types';
import { IOfferPostInfo } from './post-types';
import { IOfferStatus } from './stat-types';


// New offering form
export const OFFER_TYPES = [
    "Equity",
    "Debt",
    "Hybrid",
    "Fund"
];

export interface IOfferBriefContent {
    title: string;
    type: string;
    cover: string;
    amount: number;
    description: string;
}

export interface IOfferContent extends IOfferBriefContent {
    minAmount: number;
    maxAmount: number;
    duration: [Moment, Moment]
    price: number;
    watermark: string;
}

export type IOfferInfo = IGeneralInfo<IOfferContent, IOfferPostInfo, IOfferStatus>;
export type IOfferBriefInfo = IGeneralInfo<IOfferBriefContent, IOfferPostInfo, IOfferStatus>;


