import React from 'react';
import serie from '../images/rick.jpg';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

//Detail episode card structure
const DetailCard = props => {
    const {AllEpisodes, CartoonsCharactersInfo, updateCharactersInfo, Match, DataSwitchChecked} = props;
    //parse id of this episode
    const EpisodeId = parseInt(Match.params.id);

    //Get last data in localstorage
    let urlGoBack = '';
    if (DataSwitchChecked === false) {
        urlGoBack = '/';
    } else {
        urlGoBack = '/list';
    }
    ;

    //message "loading" while AllEpisodes are coming
    if (AllEpisodes !== undefined && AllEpisodes.length > 0) {
        const episodeInfo = AllEpisodes.find(myEpisode => myEpisode.id === EpisodeId);

        //Get id episode and fetch
        let characterIds = episodeInfo.characters.map(item => {
            return (item.replace('https://rickandmortyapi.com/api/character/', ''));
        });
        characterIds.join(',');

        fetch('https://rickandmortyapi.com/api/character/' + characterIds)
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
                            <img className="default-image" alt="Rick & Morty" src={serie}/>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <div>
                                    {CartoonsCharactersInfo
                                        .map((characterInfo, index) => {
                                            return (
                                                <img key={index} className="character-image" alt={characterInfo.name}
                                                     src={characterInfo.image}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="card-action">
                                <Link className="link-back" to={urlGoBack}>Go back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return ('loading');
    }

};

DetailCard.propTypes = {
    AllEpisodes: PropTypes.array,
    CartoonsCharactersInfo: PropTypes.array,
    updateCharactersInfo: PropTypes.func,
    Match: PropTypes.object,
    DataSwitchChecked: PropTypes.bool
};


export default DetailCard;

