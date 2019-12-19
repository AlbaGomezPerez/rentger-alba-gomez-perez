import React from 'react';
import serie from '../images/rick.jpg';
// import PropTypes from 'prop-types';

//DETAIL CARD STRUCTURE
const DetailCard = props => {
    const {AllEpisodes, Match} = props;
    const EpisodeId = parseInt(Match.params.id);



    return (
        <div className="detailCard-container">

                {AllEpisodes
                    .filter(myEpisode => myEpisode.id === EpisodeId)

                .map((item, index) => {

                    // let charactersUrl = item.characters.map(item =>{
                    //     return(item.replace('https://rickandmortyapi.com/api/character/', ''));
                    // });
                    // charactersUrl.join(',');
                    //
                    // fetch(charactersUrl)
                    //     .then(response => response.json())
                    //     .then(data => {
                    //         cartoonsCharacters = data.image
                    //         console.log(data.image);
                    //     });

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
                                        <a className="link-back" href="#">Go back</a>
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


//guardar en una variable el resultado del filter y luego llamas a la variable.name o lo que sea




// function characters() {

// }