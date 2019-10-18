export interface Action {
    type: string;
    payload: any;
}

export enum UserLevel {
    Admin = 'admin',
    Investor = 'investor',
    Issuer = 'issuer'
}

export type AsyncFunc = (...args: any[]) => Promise<void>;
export type ReducerFunc = (action: Action) => void;

export interface PersonalInfo {
    email: string;
    avatar?: string;
    nickName?: string;
    profile?: string;
    country?: string;
    province?: string;
    city?: string;
    street?: string;
    phone?: string;
}

export interface TeamBriefInfo {
    image: string;
    desc: string;
    link: string;
}

export interface IUserInfo {
    name: string;
    avatar: string;
    short: string;
    role: string;
    group: string;
    address: string;
    tags: string[];
    teams: TeamBriefInfo[];
}

export interface IUserBrief {
    name: string;
    photo: string;
}

export interface ICoverInfo {
    id: string;
    cover: string;
    title: string;
    desc: string;
    post: Date;
    users: IUserBrief[];
}

///////////////////////////////////////////////////////////
//////////// Real definitions /////////////////////////////
///////////////////////////////////////////////////////////
export interface IPostInfo {
    authorId: string;
    name: string;
    date: Date;
    place: string;
}

export interface IStatus {
    stars: number;
    likes: number;
    notes: number;
}

export interface IGeneralInfo<AT = {}, PT = IPostInfo, ST = IStatus> {
    id: string;
    content: AT;
    post: PT;
    status: ST;
}