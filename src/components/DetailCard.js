import React from 'react';
import { Link } from "react-router-dom";
import serie from '../images/rick.jpg';
// import PropTypes from 'prop-types';

//detail card structure
const DetailCard = props => {
    const {AllEpisodes, Match} = props;
    const EpisodeId = parseInt(Match.params.id);
    return (
        <div className="detailCard-container">
            {AllEpisodes
                .filter(myEpisode => myEpisode.id === EpisodeId)
                .map((item, index) => {
                    return (
                        <div className="col s12 m7" key={index}>
                            <h2 className="header">{item.name}</h2>
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={serie}/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p>{item.air_date}</p>
                                        <div></div>
                                    </div>
                                    <div className="card-action">
                                        <a href="#">Go back</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            )}
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