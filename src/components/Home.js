import React from 'react';
import { Link } from "react-router-dom";
import serie from '../images/rick.jpg';
import EpisodesCard from "./EpisodesCard";
import EpisodesList from "./EpisodesList";
// import PropTypes from 'prop-types';


const Home = props => {
    const {AllEpisodes} = props;
    return (
        <React.Fragment>
            <div className="switch">
                <Link className="CardLink" to={"/list"}>
                    <label>
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

                <EpisodesList
                    AllEpisodes={AllEpisodes}
                />
        </React.Fragment>
    )
};

export default Home;
