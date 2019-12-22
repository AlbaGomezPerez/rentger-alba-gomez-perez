const url = "https://rickandmortyapi.com/api/episode/";
const urlCharacters ="https://rickandmortyapi.com/api/character/";

const GetEpisodes = () => {
    return fetch(url)
        .then(response => response.json());
};


const GetCharacters = (characterIds) => {
    return fetch(urlCharacters + characterIds)
        .then(response => response.json());
};

export {GetEpisodes, GetCharacters};