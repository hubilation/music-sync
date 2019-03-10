import dotenv from 'dotenv/config';
import {saveId3, testId3} from './otherFunc';
import {getToken, getPlaylist} from './spotifyGateway';


(async ()=>{
    const tokenResponse = await getToken(); 
    const playlist = await getPlaylist(tokenResponse.access_token);

    console.log(playlist);
})();
