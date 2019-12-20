import React from 'react';
import serie from '../images/rick.jpg';
import PropTypes from 'prop-types';

//DETAIL CARD STRUCTURE
const DetailCard = props => {
    const {AllEpisodes, CartoonsCharactersInfo, updateCharactersInfo, Match} = props;
    const EpisodeId = parseInt(Match.params.id);
    const episodeInfo = AllEpisodes.find(myEpisode => myEpisode.id === EpisodeId);

    let characterIds = episodeInfo.characters.map(item =>{
        return(item.replace('https://rickandmortyapi.com/api/character/', ''));
    });
    characterIds.join(',');

    fetch('https://rickandmortyapi.com/api/character/' + characterIds )
        .then(response => response.json())
        .then(data => {
            updateCharactersInfo(data);
        });

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
                            <div>
                                {CartoonsCharactersInfo
                                    .map((characterInfo, index) => {
                                        return(
                                            <span>
                                                {characterInfo.name}
                                            </span>
                                        )
                                    })
                                }
                            </div>
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

DetailCard.propTypes = {
    AllEpisodes: PropTypes.array,
    CartoonsCharactersInfo: PropTypes.array,
    updateCharactersInfo: PropTypes.func,
    Match: PropTypes.object
};


export default DetailCard;

