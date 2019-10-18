

export interface ObjectString<T = string> {
    [key: string]: T
}

// Investor get verified form
export const DOMICILES: string[] = [
    'U.S. Citizen',
    'U.S. Resident',
    'Non Resident'
];

export const STATES: ObjectString = {
    AL: 'Alabama',
    AK: 'Alaska',
    AZ: 'Arizona',
    AR: 'Arkansas',
    CA: 'California',
    CT: 'Connecticut',
    DE: 'Delaware',
    FL: 'Florida',
    GA: 'Georgia',
    HI: 'Hawaii',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    IA: 'Iowa',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Louisiana',
    ME: 'Maine',
    MD: 'Maryland',
    MA: 'Massachusetts',
    MI: 'Michigan',
    MN: 'Minnesota',
    MS: 'Mississippi',
    MO: 'Missouri',
    MT: 'Montana',
    NE: 'Nebraska',
    NV: 'Nevada',
    NH: 'New Hampshire',
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NY: 'New York',
    NC: 'North Carolina',
    ND: 'North Dakota',
    OH: 'Ohio',
    OK: 'Oklahoma',
    OR: 'Oregon',
    PA: 'Pennsylvania',
    RI: 'Rhode Island',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VT: 'Vermont',
    VA: 'Virginia',
    WA: 'Washington',
    WV: 'West Virginia',
    WI: 'Wisconsin',
    WY: 'Wyoming',
    CO: 'Colorado',
    NOUS: 'Non-U.S',
    DC: 'District of Columbia'
};

export const ENTITY_TYPES = [
    "Corporation",
    "Irrevocable Trust",
    "Limited Liability Company",
    "Limited Partnership",
    "Revocable Trust"
]

// Questionary form
export const INVEST_OBJECTIVE = [
    'Primarily on Capital Preservation',
    'Both Capital Preservation and Growth',
    'Primarily Focused on growth'
];

export const LEVELS = [1, 2, 3, 4, 5];

export const EDUCATIONS = [
    "High School or GED",
    "4 Year College or University",
    "Graduate Degree",
    "Other"
];

export const ACC_TYPES = [
    "Entity",
    "Individual",
    "IRA",
    "JTWROS",
    "ROTH",
    "SepIRA",
    "TIC"
];

