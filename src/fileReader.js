import fs from 'fs';
import NodeID3 from 'node-id3';


export const getTagsForDirectory = () => {
    const files = getFiles();

    const tags = files.map(file=>getTags(file));
    return tags.filter(f=>f.title && f.artists);
}

export const getFiles = () =>{

    const directory = 'C:\\Users\\zack\\Music';

    const files = fs.readdirSync(directory);

    const fullNames = files.filter(file=>file.includes('.mp3')).map(file=>`${directory}\\${file}`)

    return fullNames;
}

export const getTags = filePath => {
    const tags = NodeID3.read(filePath);

    return {
        title: tags.title,
        artists: tags.artist && tags.artist.split(',').map(s=>s.trim())
    };
}