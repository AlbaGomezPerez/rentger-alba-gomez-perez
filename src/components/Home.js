import React from 'react';
import {Link, Route} from 'react-router-dom';
import EpisodesCard from "./EpisodesCard";
import EpisodesList from "./EpisodesList";
import PropTypes from 'prop-types';
import DetailCard from "./DetailCard";


const Home = props => {
    const {AllEpisodes, switchClick} = props;

    return (
        <React.Fragment>
            <h1 className="mainTitle">Rick & Morty</h1>
            <div className="switch">
                <label>
                    Off
                    <input type="checkbox" onChange={switchClick}/>
                    <span className="lever"></span>
                    On
                </label>
            </div>
            <Route
                exact
                path="/"
                render={routerProps => (
                    <EpisodesCard
                        AllEpisodes={AllEpisodes}
                    />
                )
                }
            />

            <Route
                exact
                path="/list"
                render={routerProps => (
                    <EpisodesList
                        AllEpisodes={AllEpisodes}
                    />
                )}
            />
        </React.Fragment>
    )
};

DetailCard.propTypes = {
    AllEpisodes: PropTypes.array,
    switchClick: PropTypes.func
};

export default Home;
