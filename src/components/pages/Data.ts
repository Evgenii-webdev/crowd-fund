
import {
    faBuilding, faRocket,
    faFunnelDollar, IconDefinition
} from "@fortawesome/free-solid-svg-icons";

export function safe_tags(str: string): string {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export interface NewsItem {
    image: string;
    alt: string;
    title: string;
    took: string;
    description: string;
    suggestion: string;
    button: string;
    url: string;
}

export const newsData: NewsItem[] = [
    {
        image: "https://brite.us/img/news/early-stage-conference-2019.png",
        alt: 'image',
        title: "Meet BRITE at an Early Stage Capital Conference - Orlando FL",
        took: "May 9-10 2019 in Orlando, FL",
        description: "BRITE was selected to represent Crummer Graduate School of Business, Rollins College at an Early Stage Capital Conference in Orlando, Florida.",
        suggestion: "We will have a booth and present on the stage.",
        button: "Event Information",
        url: "https://flventure.org/2019-florida-early-stage-capital-conference"
    },
    {
        image: "https://brite.us/img/news/the-future-of-finance.jpg",
        alt: 'image',
        title: "Meet BRITE at Tokenized Assets conference - New York, NY",
        took: "May 12 2019 in New York, NY",
        description: "Preparing for the tokenized future of assets and securities.",
        suggestion: "Meet our team, ask questions about Crowdinvesting, Digital Securities, Blockchain or anything you like.",
        button: "Event Information",
        url: "https://thefutureof.finance/tokenized/new-york"
    },
    {
        image: "https://brite.us/img/news/consensus-conference.png",
        alt: 'image',
        title: "Meet BRITE at CoinDesk Consensus & Construct events - New York, NY",
        took: "May 13-15 2019 in New York, NY",
        description: "BRITE will participate in all sessions.",
        suggestion: "Meet our team, ask questions about Crowdinvesting, Digital Securities, Blockchain or anything you like.",
        button: "Event Information",
        url: "https://www.coindesk.com/events/consensus-2019"
    }
]


export interface WhatItem {
    title: string;
    description: string[];
}

export const whatData: WhatItem[] = [
    {
        title: "Problem Statement Issuers",
        description: [
            '<u>STARTUP COMPANIES</u> and growing businesses struggle raising capital for their projects and operations.',
            '<u>FINANCIAL INSTITUTIONS</u> and fund management firms deny liquidity to their clients, locking in investments for a long period.',
            '<u>OWNERS</u> of high value assets and collectible items cannot access equity in their assets without selling them or loosing control.'
        ]
    },
    {
        title: "Problem Statement Issuers",
        description: [
            '<u>ACCREDITED INVESTORS</u> cannot diversify effectively due to strict investment requirements like long lock-in periods and high minimums.',
            '<u>SMALL INVESTORS</u> don’t have experience in picking and evaluating complex projects or ventures, have limited time and capital. They prefer shorter investments and quick returns.'
        ]
    },
    {
        title: "Value Proposition",
        description: [
            '<u>REGULATED DIGITAL SECURITIES</u> will enable the tokenization of real-world assets, providing greater liquidity and wider markets.',
            'The concept of fractional ownership combines all the assurances of officially registered assets with the liquidity of virtual markets.'
        ]
    },
    {
        title: " ",
        description: [
            '<u>OUR GOAL IS</u> to unlock the trillions of dollars of sleeping capital which exist by providing, through equity investment, wealth creating opportunities for all.',
            'BRITE’S equity crowdfunding platform is designed to bring new possibilities to asset owners as well as provide small investors access to asset classes previously reserved for the ultra-rich.'
        ]
    }
]

export interface CardType1 {
    cover: string;  // image path
    alt: string;    // image alternative
    title: string;
    description: string;
}

export interface DoItem {
    icon_inner: IconDefinition;
    title: string;
    description: string;
}

export const doItems: DoItem[] = [
    {
        icon_inner: faBuilding,
        title: 'Real Estate',
        description: 'BRITE connects small investors with commercial real estate, unlocking billions of dollars in sleeping markets.'
    },
    {
        icon_inner: faRocket,
        title: 'Stock and Equity',
        description: 'BRITE helps startups and growth companies of all sizes organize crowdsale of their stock and equity, raising capital.'
    },
    {
        icon_inner: faFunnelDollar,
        title: 'Multi-owner Assets',
        description: 'BRITE converts illiquid single owner assets into liquid, tradable multi-owner assets.'
    }
];

export interface SimpleCard {
    cover: string;
    alt: string;
    title: string;
    description: string;
}

export const items1: SimpleCard[] = [
    {
        cover: 'https://brite.us/img/services/blockchain.png',
        alt: 'image',
        title: 'Blockchain and Smart Contracts',
        description: 'Low costs of operating and accounting. Increased security, transparency, and trust for all parties. Simplified investor pooling and portfolio management. Easy dividend distributions. Secondary market that provides exit opportunities to investors.'
    },
    {
        cover: 'https://brite.us/img/services/platform.png',
        alt: 'image',
        title: 'White-label Crowdinvesting Platform',
        description: 'Asset management companies can license a standalone platform from us. They can raise funds on their own terms, and in a jurisdiction of their choice. Have full control of policies and finances in their hands.'
    }
]

export interface UrlCard extends SimpleCard {
    readURL: string;
}

export const items2: UrlCard[] = [
    {
        cover: 'https://brite.us/img/research/retirement-planning.jpg',
        alt: 'image',
        title: '401k is an Outdated Way to Plan for Retirement',
        description: 'Finding a good retirement plan is one of the most important financial decisions a person will ever make. Sadly, most people trust popular options, 401ks and traditional IRAs, for a lack of better understanding…',
        readURL: 'https://medium.com/digital-securities-and-blockchain/401k-is-an-outdated-way-to-plan-for-retirement-56cd061e40c6'
    },
    {
        cover: 'https://brite.us/img/research/big-banks.jpg',
        alt: 'image',
        title: 'Why Industry Leaders and Regulators Favor Compliant Private Blockchains',
        description: 'The lack of accountability and regulation in public blockchains continues to be an issue for their implementation by ethical companies. The transactions that are executed on them are irreversible and many users have already been…',
        readURL: 'https://medium.com/digital-securities-and-blockchain/why-industry-leaders-favor-private-blockchains-7ba20733f00a'
    },
    {
        cover: 'https://brite.us/img/research/residential-real-state.jpg',
        alt: 'image',
        title: 'How Real Estate Companies Can Benefit From BRITE’s Crowdinvesting Platform?',
        description: 'Small investors have traditionally faced serious limitations when it comes to investing in residential real estate. The investment amount is usually large, which acts as a financial barrier for them…',
        readURL: 'https://medium.com/digital-securities-and-blockchain/how-real-estate-companies-can-benefit-from-brites-blockchain-based-crowdfunding-platform-6fc26d91b1af'
    },
    {
        cover: 'https://brite.us/img/research/public-vs-private.jpg',
        alt: 'image',
        title: 'A Shift to Private Blockchains Signals a Bright Future for the New Technology',
        description: 'Initial Coin Offerings were all the rage during the 2017 cryptocurrency boom. Most of it was catapulted by the promise that public blockchains such as Ethereum could fuel new investment opportunities and ways…',
        readURL: 'https://medium.com/digital-securities-and-blockchain/a-shift-to-private-blockchains-6ba2d994dc6'
    },
    {
        cover: 'https://brite.us/img/research/investing.jpg',
        alt: 'image',
        title: 'Digital Securities: What the Future Holds',
        description: 'Digital securities enable higher liquidity and fractional ownership, in addition to breaking of controls on the capital. It is safe to say that they are set to empower a truly free market because they are going to be the cheapest capital around…',
        readURL: 'https://medium.com/digital-securities-and-blockchain/digital-securities-this-blockchain-powered-financial-tool-is-set-to-unlock-value-69f7621413b1'
    }
];

export interface ProfileCard extends SimpleCard {
    cardURL?: string;
    bio?: string;
    linkedin?: string;
}

export const items3: ProfileCard[] = [
    {
        cover: 'https://brite.us/img/team/alexandra-kalyuzhnaya.jpg',
        alt: 'image',
        title: 'Alexandra Kalyuzhnaya',
        description: 'Co-Founder / CEO<br />Business Development',
        cardURL: 'https://brite.us/img/team/card-alexandra-kalyuzhnaya.jpg',
        bio: 'Alexandra is a licensed Professional Engineer with over 10 years of experience in Construction Management industry. She is a project control specialist working for various clients, expert in tracking project budget and schedule, evaluating delays and performing time impact analyses.<br /><br />Alexandra holds degree in engineering and currently she is attending Crummer Graduate School of Business at Rollins College, where she is earning her professional MBA degree. Alexandra has been very passionate about decentralized cryptocurrency technology since 2013. Participated in many startups, leading teams to successful project completion.<br /><br />For the last three and a half years Alexandra is overseeing financial aspects of the $100+ million dollar widening project for Florida Turnpike Enterprise, where she is responsible for managing the budget, costs and schedule.',
        linkedin: 'https://www.linkedin.com/in/alexandra-kalyuzhnaya-fl'
    },
    {
        cover: 'https://brite.us/img/team/alex-petukhov.jpg',
        alt: 'image',
        title: 'Alex Petukhov',
        description: 'Co-Founder / CEO<br />Blockchain Visionary',
        cardURL: 'https://brite.us/img/team/card-alex-petukhov.jpg',
        bio: 'Alex is an entrepreneur, software and platform developer with over 12 years of professional experience in web-based applications and services, website design and full stack development. He enjoys working on projects in information security, privacy and blockchain. He absolutely loves automating and optimizing the workflow.<br /><br />Alex has been working on blockchain related projects since early 2013, and recently developed a cloud based automated cryptocurrency monitoring and trading platform. This platform combines elements of algorithmic trading strategies with machine learning. Over the years Alex co-founded and advised on a number of startups.',
        linkedin: 'https://www.linkedin.com/in/alexpetukhov'
    },
    {
        cover: 'https://brite.us/img/team/jake-hartigan.jpg',
        alt: 'image',
        title: 'Jake Hartigan',
        description: 'COO / Public Relations<br />Marketing',
        cardURL: undefined,
        bio: 'Jake is a young entrepreneur who is very passionate about marketing and communications. He has a varied background that includes and demonstrates both leadership skills and entrepreneurial mindset. Jake is an expert in identifying market opportunities, shaping strategic plans and executing sales processes.<br /><br />Currently, Jake is attending University of Central Florida, where he is earning his bachelor’s degree in Business Administration. In addition, he is an experienced designer and talented speaker Jake is responsible for blockchain community engagement, marketing activities, building collaborative relationships with peers and clients.',
        linkedin: 'https://www.linkedin.com/in/jake-hartigan'
    },
    {
        cover: 'https://brite.us/img/team/nik-suslin.jpg',
        alt: 'image',
        title: 'Nik Suslin',
        description: 'Lead Developer<br />Software Engineer',
        cardURL: undefined,
        bio: 'Technically astute Software Engineer enjoying a decade of experience designing and developing innovative solutions in diverse arenas. Combines experience leading and administering full software development life cycle across a wide range of operational platforms.<br /><br />Equipped with a strong background in all aspects of new system planning, design, coding, development, testing, and implementation with a focus on ensuring continuous delivery of quality excellence. Committed towards personal development; building skills needed to evaluate, design and build intelligent systems via ongoing studies towards Master degree.',
        linkedin: 'https://www.linkedin.com/in/niksuslin'
    }
];

export const items4: ProfileCard[] = [
    {
        cover: 'https://brite.us/img/team/andrew-slade.jpg',
        alt: 'image',
        title: 'Andrew Slade',
        description: 'Strategic Development<br />US & UK Markets',
        cardURL: undefined,
        bio: 'Andrew studied at the University of the West of England and qualified as a Chartered Accountant in 1989. He became a partner in his father’s accountancy practice and then started his own successful practice in 1993. He has helped many small to medium sized businesses, providing accounting and taxation services and strategic development. < br /> <br />In 2015, he sold his business and moved to the US with his family, to "have a new adventure". He has experience dealing with peer-to-peer lending and financing as well as currency exchanges. He maintains links with the UK and is excited to team up with his friends and colleagues at BRITE.',
        linkedin: undefined,
    },
    {
        cover: 'https://brite.us/img/team/james-fyffe.jpg',
        alt: 'image',
        title: 'James Fyffe',
        description: 'Certified Public Accountant<br />Business Compliance',
        cardURL: undefined,
        bio: 'James is a licensed CPA who has over 40 years of successful accounting experience with corporations and individual clients. James works personally with each of his clients to create an accounting plan to meet their specific needs. He maintains his practice in Orlando, Florida however manages clients globally as needed. <br /><br /> James increases his knowledge and keeps up to date with current legislation by completing at least 80 hours of professional education every two years. His knowledge of various accounting programs and his flexible business approach help facilitate the specialized accounting needs of each client.',
        linkedin: 'https://www.linkedin.com/in/james-fyffe-cpa-8678b25',
    },
    {
        cover: 'https://brite.us/img/team/anessa-allen-santos.jpg',
        alt: 'image',
        title: 'Anessa Allen Santos',
        description: 'Corporate Law Blockchain & Digital Currencies',
        cardURL: undefined,
        bio: 'Attorney Anessa Allen Santos has 15+ years experience providing trusted business counsel to disruptive technology companies on matters of blockchain and digital currencies, business law and consulting, corporate law and governance, intellectual property, technology and securities.<br /><br />Often serving in the tripartite roles of Business Consultant, General Counsel and Corporate Secretary for her clients, Anessa has extensive experience working with entrepreneurs, engineers and investors, papering their every step with native drafting from idea to exit while ensuring compliance with complex regulatory frameworks.',
        linkedin: 'https://www.linkedin.com/in/anessaallensantos'
    }
]
