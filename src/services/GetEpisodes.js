const url = "https://rickandmortyapi.com/api/episode/";

const GetEpisodes = () => {
    return fetch(url)
        .then(response => response.json());
};

export {GetEpisodes};