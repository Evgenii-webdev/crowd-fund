
import { ArticleInfo, IArticleBriefContent, IArticleContent, ITempPostInfo } from './ArticleDef';


export class Article {

    constructor() {
        this._InitStore();
    }

    private articles: ArticleInfo[] = [];

    private _InitStore(): void {
        this.articles = [
            {
                id: '0',
                postInfo: {
                    author: 'shunming',
                    date: new Date(2019, 5, 21, 10, 30, 19),
                    place: 'China Jilin yanbian'
                },
                content: {
                    title: 'House Dems to Call Nixon Lawyers as First Witness in Mueller Report Hearing',
                    category: 'Politics',
                    cover: 'https://s.yimg.com/ny/api/res/1.2/3ccWbNA8N5rJ7TNNmcRvSQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://i2.wp.com/www.nationalreview.com/wp-content/uploads/2019/06/john-dean.jpg?fit=1024%2C576&amp;ssl=1',
                    brief: 'Democrats on the House Judiciary Committee announced Monday that they will call John Dean, the former White House counsel to President Richard Nixon, as their first witness in the upcoming Mueller report hearings.',
                    url: 'https://news.yahoo.com/house-dems-call-nixon-lawyer-192820900.html'
                },
                likes: 123293,
                dislikes: 2834
            },
            {
                id: '1',
                postInfo: {
                    author: 'dage',
                    date: new Date(2019, 5, 27, 20, 41, 54),
                    place: 'China Jilin longjing'
                },
                content: {
                    title: "Trump Spins Tales on London Protests, Brexit",
                    category: 'Politics',
                    cover: 'https://lh5.googleusercontent.com/proxy/fMnPPVqVMjMWLa66a-02JUFMGI-GPGzm4A-3Oaa7Aq6fUqzmbrIwPnWspWDoqsHhH8qFTiMXlIigV7OtdZeRXhYRBM5tG4Ec89zJ59ZGtOgAZ9r9QpF_ih4qIg=-w200-h200-p',
                    brief: 'President Donald Trump is spinning a tall tale about crowd sizes and the protests in London',
                    url: undefined,
                    description: `WASHINGTON (AP) — President Donald Trump is spinning a tall tale about crowd sizes and the protests in London.

                In a news conference with British Prime Minister Theresa May, he asserted there have been few protests over his visit to the United Kingdom — even though nearby protesters could be heard at 10 Downing Street. He also once again falsely said he predicted Brexit a day before the vote happened.
                
                A look at the claims:`,
                    photos: ['https://www.snopes.com/tachyon/2019/06/ap_trump_protest.jpg', 'https://www.snopes.com/tachyon/2019/06/AP19156540988790-e1559832116610.jpg'],
                    videos: undefined,
                },
                likes: 51636,
                dislikes: 120
            }];
    }

    private _FindID(): string {
        let id = 0;

        while (true) {
            let found: boolean = false;
            for (let art of this.articles) {
                if (art.id === id.toString()) {
                    found = true;
                    break;
                }
            }

            if (!found) break;
            id++;
        }

        console.log('new ID: ', id);
        return id.toString();
    }

    private _CloneContent(src: IArticleContent): IArticleContent {
        const content: IArticleContent = { ...src };
        content.photos = src.photos && [...src.photos];
        content.videos = src.videos && [...src.videos];

        return content;
    }

    public async PostArticle(content: IArticleContent, post: ITempPostInfo): Promise<string> {
        return new Promise((resolve) => {
            const id: string = this._FindID();
            setTimeout(() => {
                this.articles.push({
                    id: id,
                    postInfo: post,
                    content: this._CloneContent(content),
                    likes: 0,
                    dislikes: 0
                });

                resolve(id);
            }, 3000);
        });
    }

    public async DeleteArticle(id: string): Promise<void> {
        let count: number = this.articles.length;
        for (let i = 0; i < count; i++) {
            if (this.articles[i].id === id) {
                this.articles.splice(i, 1);
                break;
            }
        }
    }

    public async GetAllArticles(): Promise<ArticleInfo<IArticleBriefContent>[]> {
        const arts: ArticleInfo<IArticleBriefContent>[] = [];
        for (let art of this.articles) {
            arts.push({
                id: art.id,
                postInfo: art.postInfo,
                content: {
                    title: art.content.title,
                    category: art.content.category,
                    cover: art.content.cover,
                    brief: art.content.brief,
                    url: art.content.url
                },
                likes: art.likes,
                dislikes: art.dislikes
            });
        }
        return arts;
    }

    public async GetArticleDetail(id: string): Promise<ArticleInfo | undefined> {
        for (let art of this.articles) {
            if (art.id === id) {
                return art;
            }
        }
    }

    public async LikeArticle(id: string): Promise<string | undefined> {
        for (let art of this.articles) {
            if (art.id === id) {
                art.likes++;
                return art.id;
            }
        }
    }

    public async DislikeArticle(id: string): Promise<string | undefined> {
        for (let art of this.articles) {
            if (art.id === id) {
                art.dislikes++;
                return art.id;
            }
        }
    }
}

export const ArticleStore = new Article();
