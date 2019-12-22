import React from 'react';
import {GetCharacters} from '../services/GetEpisodes';
import serie from '../images/rick.jpg';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

//Detail episode card structure
const DetailCard = props => {
    const {AllEpisodes, CartoonsCharactersInfo, updateCharactersInfo, match, DataSwitchChecked} = props;
    //parse id of this episode
    const episodeId = parseInt(match.params.id);


    /**
      * Get last data in localstorage
     **/
    let urlGoBack = '';
    if (DataSwitchChecked === false) {
        urlGoBack = '/';
    } else {
        urlGoBack = '/list';
    }
    ;

    /**
      * If there are serie data, the component render, else show message "loading" while AllEpisodes are coming
     **/
    if (AllEpisodes !== undefined && AllEpisodes.length > 0) {
        const episodeInfo = AllEpisodes.find(myEpisode => myEpisode.id === episodeId);

        /**
          * Get id episode and build the characters url to do the fetch
         **/
        let characterIds = episodeInfo.characters.map(item => {
            return (item.replace('https://rickandmortyapi.com/api/character/', ''));
        });
        characterIds.join(',');

            GetCharacters(characterIds)
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
                                                <img key={index} className="character-image"  alt={characterInfo.name}
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
    DataSwitchChecked: PropTypes.boolean
};


export default DetailCard;

