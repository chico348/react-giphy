export const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=FOI1hqVnriCHZxETgwZG4Rsm6yJFxZug&q=${category}&limit=8`;
        const resp = await fetch(url);
        const {data = []} = await resp.json();
        const gif = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }))

    return gif;
}