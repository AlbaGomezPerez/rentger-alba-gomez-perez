const url = "https://rickandmortyapi.com/api/episode/";
const urlCharacters ="https://rickandmortyapi.com/api/character/";

/**
 * Get all episodes from API
 * @returns a Promise with the data
 */
const GetEpisodes = () => {
    return fetch(url)
        .then(response => response.json());
};

/**
 * Get all characters by the given Ids
 * @param characterIds: a string with character ids separated with comma
 * @returns a Promise with the data
 */
const GetCharacters = (characterIds) => {
    return fetch(urlCharacters + characterIds)
        .then(response => response.json());
};

export {GetEpisodes, GetCharacters};