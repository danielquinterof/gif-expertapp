export const getGifs = async(artists) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(artists)}&limit=10&api_key=5r5JNX1LaB5vWzngfq9A0Ay1rBM7yB0J`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map (img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}