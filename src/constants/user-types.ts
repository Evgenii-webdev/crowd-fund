export interface IUserRegInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
}

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
}

export interface IPublicUserInfo<TT = TeamBriefInfo> extends IUserInfo {
    id: string;
    teams?: TT[];
}

export interface IPrivateUserInfo<TT, PT = PersonalInfo> extends IPublicUserInfo<TT> {
    private: PT;
}


