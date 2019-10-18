export interface ITempPostInfo {
    author: string;
    date: Date;
    place: string;
}

export interface IArticleBriefContent {
    title: string;
    category: string;
    cover: string;
    brief: string;
    url?: string;
}

export interface IArticleContent extends IArticleBriefContent {
    description?: string;
    photos?: string[];
    videos?: string[];
    // links?: IArticleBriefContent[];
}

export interface ArticleInfo<T = IArticleContent> {
    id: string;
    postInfo: ITempPostInfo;
    content: T;
    likes: number;
    dislikes: number;
}

