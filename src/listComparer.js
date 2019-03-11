export const compare = (spotify, files) =>{
    sort(spotify);
    sort(files);
    const matches = spotify.filter(spotify=>files.some(file=>file.title === spotify.title));

    console.log(`Found ${matches.length} title matches out of ${spotify.length} possibles`);
}

const sort = array => {
    array.sort((a,b)=>{
        var nameA = a.title.toUpperCase(); // ignore upper and lowercase
        var nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
    })
}