import { Subject } from 'rxjs';
const  API_URL = new URL('https://v3.football.api-sports.io');
const HEADERS = {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': 'd67e88f0c2325e8124adb334b4648082'
}

export const $eventFilter = new Subject();

export const setEventFilter = (data) => $eventFilter.next(data);

export const PlayerService = () => { 
    const filter = async (params) => {
        const {season, league, search} = params;
        const rawResponse = await fetch(`${API_URL}/players?season=${season}&league=${league}${search ? `&search=${search}`: ''}`, {
            method: 'GET',
            headers: HEADERS
        });
        const jsonResponse = await rawResponse.json()
        return jsonResponse.response;
    }
  
    return {
        filter
    }
}