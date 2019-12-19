import React from 'react';
import serie from '../images/rick.jpg';
// import PropTypes from 'prop-types';

//DETAIL CARD STRUCTURE
const DetailCard = props => {
    const {AllEpisodes, Match} = props;
    const EpisodeId = parseInt(Match.params.id);
    const episodeInfo = AllEpisodes.find(myEpisode => myEpisode.id === EpisodeId);

    // let charactersUrl = item.characters.map(item =>{
    //     return(item.replace('https://rickandmortyapi.com/api/character/', ''));
    // });
    // charactersUrl.join(',');
    //
    // fetch(charactersUrl)
    //     .then(response => response.json())
    //     .then(data => {
    //         cartoonsCharacters = data.image
    //     });

    return (
        <div className="detailCard-container">
            <div className="col s12 m7">
                <h2 className="header">{episodeInfo.name}</h2>
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={serie}/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>{episodeInfo.air_date}</p>
                            <div></div>
                        </div>
                        <div className="card-action">
                            <a className="link-back" href="/">Go back</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default DetailCard;


//LO QUE NOS DEVUELVE ESTO ES LA URL DE LA PETICIÓN. Esto creo que debería ir
//en services y la segunda parte en app? y meter los datos en otra parte del estado
//y ese estado por props aquí

// let array = item.characters.map(item =>{
//     return(item.replace('https://rickandmortyapi.com/api/character/', ''));
// });
// array.join(',');


//guardar en una variable el resultado del filter y luego llamas a la variable.name o lo que sea


// function characters() {

// }