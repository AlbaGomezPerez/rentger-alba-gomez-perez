import React from 'react';
import character from '../images/green.png';
import {Link} from "react-router-dom";
// import PropTypes from 'prop-types';


const EpisodesList = props => {
    const {AllEpisodes} = props;
    return (
        <ul className="collection">
            {AllEpisodes.map((item, index) => {
                    return (
                        <li className="collection-item avatar" key={index}>
                            <img src={character} alt="" className="circle"/>
                            <span className="title">{item.name}</span>
                            <p>{item.air_date}</p>
                            <Link className="CardLink" to={"/character/" + item.id}>
                                <a className="btn-floating halfway-fab waves-effect waves-light red btn-list"><i
                                    className="material-icons">add</i></a>
                            </Link>
                            </li>
                    )
                }
            )}
        </ul>
    );
};


export default EpisodesList;