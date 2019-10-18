import { IStatus } from './types';

export interface IOfferStatus extends IStatus {
    funded: number;
    applies: number;
    remained: number;
}

export interface IArtStatus extends IStatus {
    active: number;
    new: number;
}
