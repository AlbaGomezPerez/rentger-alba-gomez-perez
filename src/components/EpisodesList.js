import React from 'react';
import serie from '../images/rick.jpg';
import {Link} from "react-router-dom";
// import PropTypes from 'prop-types';


const EpisodesList = props => {
    const {AllEpisodes} = props;
    return (
        <ul className="collection">
            <div className="switch">
                <Link className="CardLink" to={"/"}>
                <label>
                    Off
                    <input type="checkbox"/>
                    <span className="lever"></span>
                    On
                </label>
                </Link>
            </div>
            {AllEpisodes.map((item, index) => {
                    return (
                        <li className="collection-item avatar" key={index}>
                            <img src={serie} alt="" className="circle"/>
                            <span className="title">{item.name}</span>
                            <p>{item.air_date}</p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                    )
                }
            )}
        </ul>
    );
};


export default EpisodesList;
