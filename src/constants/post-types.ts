import { IPostInfo } from './types';

export interface IOfferPostInfo extends IPostInfo {
    image: string;
    link: string;       // author
    nickName?: string;  // author
}