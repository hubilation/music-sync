import btoa from 'btoa';
import fetch from 'node-fetch';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

export const getToken = async ()=>{
    console.log('clientId', clientId);
    const base64EncodedAuth = btoa(`${clientId}:${clientSecret}`);
    const result = await (await fetch('https://accounts.spotify.com/api/token',{
        method: 'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded',
            'Authorization': `Basic ${base64EncodedAuth}`
        },
        body: 'grant_type=client_credentials'
    }
    )).json();

    return result;
}

export const getPlaylist = async (token)=>{
    const playlistId = '0ZcER45Gi6tBLHcTgXk8Ji';
    let playlist = await (await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })).json();

    let tracks = playlist.tracks;
    let results = [];

    results = results.concat(getSimpleList(tracks));



    while(tracks.next){
        tracks = await (await fetch(tracks.next,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })).json();
        results = results.concat(getSimpleList(tracks));
    }
    
    return results;
}

const getSimpleList = tracks => {
    return tracks.items.map(item=>{
        const track = item.track;
        return {
            title: track.name,
            artists: track.artists.map(artist=>artist.name)
        }
    });
}