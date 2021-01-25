import ES from '../../resources/flags/es.svg';
import ENG from '../../resources/flags/eng.svg';
import IT from '../../resources/flags/it.svg';

export const API_URLS = {
    V3_FOOTBALL_API_SPORTS: 'https://v3.football.api-sports.io/'
}


export const COUNTRIES_AVALIABLE = [
    { countryCode: 'SP', icon: ES, keyName: 'SPAIN'},
    { countryCode: 'ENG', icon: ENG, keyName: 'ENGLAND'},
    { countryCode: 'IT', icon: IT, keyName: 'ITALY'}
];


export const LEAGUES = {
    SP: [
        {
            id: 140,
            name: 'Primera Division',
            type: 'League'
        },
        {
            id: 141,
            name: 'Segunda Division',
            type: 'League'
        }
    ],
    ENG: [
        {
            id: 39,
            name: 'Premier League',
            type: 'League'
        },
        {
            id: 40,
            name: 'Championship',
            type: 'League'
        }
    ],
    IT: [
        {
            id: 135,
            name: 'Serie A',
            type: 'League'
        },
        {
            id: 547,
            name: 'Super Cup',
            type: 'Cup'
        }
    ]
}