import React from 'react';
import { Link } from "react-router-dom";
import serie from '../images/rick.jpg';
// import PropTypes from 'prop-types';

// card structure
const EpisodeCard = props => {
    const {AllEpisodes} = props;
    // let array = characters.map(item =>{
    //     return(item.replace('https://rickandmortyapi.com/api/character/', ''));
    // });
    // array.join(',');
    return (
        <div className="row">
            <div className="switch">
                <label>
                    Off
                    <input type="checkbox"/>
                    <span className="lever"></span>
                    On
                </label>
            </div>
            {AllEpisodes.map((item, index) => {
                    return (
                        <div className="col s12 m6" key={index}>
                            <div className="card">
                                <div className="card-image">
                                    <img className="materialboxed" src={serie}></img>
                                        <span className="card-content">{item.name}</span>
                                    <Link className="CardLink" to={"/character/" + item.id}>
                                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i
                                            className="material-icons">add</i></a>
                                    </Link>
                                </div>
                                <div className=" card-title">
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
