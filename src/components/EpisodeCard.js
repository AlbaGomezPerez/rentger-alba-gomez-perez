import React from 'react';
// import PropTypes from 'prop-types';

// estructura tarjeta capitulo
const EpisodeCard = props => {
    const {AllEpisodes} = props;
    return (
        <div className="row">
            {AllEpisodes.map((item, index) => {
                    return (
                        <div className="col s12 m6" key={index}>
                            <div className="card">
                                <div className="card-image">
                                    <img src="./images/serie.jpg"></img>
                                        <span className="card-title">{item.name}</span>
                                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i
                                            className="material-icons">add</i></a>
                                </div>
                                <div className="card-content">
                                    <p>{item.air_date}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    );
};


export default EpisodeCard;
