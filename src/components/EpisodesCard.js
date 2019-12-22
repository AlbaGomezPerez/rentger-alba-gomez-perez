import React from 'react';
import {Link} from "react-router-dom";
import serie from '../images/rick.jpg';
import PropTypes from 'prop-types';

/**
 * Render the HTML episodes list in card format
 * @param props
 *  - AllEpisodes: list with all episodes
 *  - SearchEpisode: text value that the users writes into the input
 * @returns the HTML generated
 */
const EpisodesCard = props => {
    const {AllEpisodes, SearchEpisode} = props;
    return (
        <div className="row">
            {AllEpisodes
                .filter(myEpisode => myEpisode.name.toUpperCase().includes(SearchEpisode.toUpperCase()))
                .map((item, index) => {
                    return (
                        <div className="col s12 m6" key={index}>
                            <div className="card">
                                <div className="card-image">
                                    <img className="materialboxed" alt="Rick & Morty" src={serie}></img>
                                    <span className="card-title">{item.name}</span>
                                    <Link className="CardLink" to={"/episode/" + item.id}>
                                        <div className="btn-floating halfway-fab waves-effect waves-light red"><i
                                            className="material-icons add-icons">add</i></div>
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <p>{item.air_date}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

EpisodesCard.propTypes = {
    AllEpisodes: PropTypes.array,
    SearchEpisode: PropTypes.string
};


export default EpisodesCard;
