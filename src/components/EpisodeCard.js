import React from 'react';
import PropTypes from 'prop-types';

// estructura tarjeta personaje
const EpisodeCard = props => {
    const {AllEpisodes} = props;
    return (
        <div>
            {AllEpisodes.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item.name}</p>
                            <p>{item.air_date}</p>
                        </div>
                    )
                }
            )}
        </div>
    );
};


export default EpisodeCard;