import React from 'react';
import character from '../images/green.png';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import DetailCard from "./DetailCard";

/**
 * Render the HTML episodes list in list format
 * @param props
 *  - AllEpisodes: list with all episodes
 *  - SearchEpisode: text value that the users writes into the input
 * @returns the HTML generated
 */
const EpisodesList = props => {
    const {AllEpisodes, SearchEpisode} = props;
    return (
        <ul className="collection">
            {AllEpisodes
                .filter(myEpisode => myEpisode.name.toUpperCase().includes(SearchEpisode.toUpperCase()))
                .map((item, index) => {
                    return (
                        <li className="collection-item avatar" key={index}>
                            <img src={character} alt="Rick & Morty" className="circle"/>
                            <span className="title">{item.name}</span>
                            <p>{item.air_date}</p>
                            <Link className="CardLink" to={"/episode/" + item.id}>
                                <div className="btn-floating halfway-fab waves-effect waves-light red btn-list"><i
                                    className="material-icons add-icons">add</i></div>
                            </Link>
                        </li>
                    );
                })}
        </ul>
    );
};

DetailCard.propTypes = {
    AllEpisodes: PropTypes.array,
    SearchEpisode: PropTypes.string
};

export default EpisodesList;
