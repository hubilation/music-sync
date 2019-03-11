import dotenv from 'dotenv/config';
import SpotifyGateway from './spotifyGateway';
import {compare} from './listComparer';

import {getTagsForDirectory} from './fileReader';

(async ()=>{
    const gateway = await new SpotifyGateway();

    const spotfify = await gateway.getPlaylist();

    const files = await getTagsForDirectory();

    compare(spotfify, files);
})();
