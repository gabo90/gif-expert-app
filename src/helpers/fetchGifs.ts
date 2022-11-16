
export const fetchGifs = async(category:string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=tw71EM7Urq2id5ZkH2XPHr3dbOWKc71S&q=${category}&limit=5`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map((img:any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}  