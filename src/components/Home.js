import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import EpisodesCard from "./EpisodesCard";
import EpisodesList from "./EpisodesList";
// import PropTypes from 'prop-types';


const Home = props => {
    const {AllEpisodes, SwitchClick} = props;
    return (
        <React.Fragment>
            <h1 className="mainTitle">Rick & Morty</h1>
            <div className="switch">
                <Link className="CardLink" to={"/list"}>
                    <label onClick={SwitchClick}>
                        Off
                        <input type="checkbox"/>
                        <span className="lever"></span>
                        On
                    </label>
                </Link>
            </div>
                <EpisodesCard
                    AllEpisodes={AllEpisodes}
                />
        </React.Fragment>
    )
};

export default Home;
