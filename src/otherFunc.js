import NodeID3 from 'node-id3';

export const saveId3 = ()=>{
    const tags = {
        title: 'Dancin',
        artist: 'Aaron Smith'
    };

    const frameBuffer = NodeID3.create(tags);
    const filePath = 'C:/git/music-sync/testfile.wav';

    const success = NodeID3.write(tags, filePath);
    
}

export const testId3 = ()=>{
    const filePath = 'C:/git/music-sync/testfile.wav';
    const tags = NodeID3.read(filePath, (err,tags)=>{
        console.log('error', err);
        console.log('tags', tags);
    });


    console.log(tags);
}