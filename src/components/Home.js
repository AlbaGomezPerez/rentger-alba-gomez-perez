import React from 'react';
import {Link, Route} from 'react-router-dom';
import EpisodesCard from "./EpisodesCard";
import EpisodesList from "./EpisodesList";
// import PropTypes from 'prop-types';


const Home = props => {
    const {AllEpisodes, SwitchClick} = props;

    return (
        <React.Fragment>
            <h1 className="mainTitle">Rick & Morty</h1>
            <div className="switch">
                <label>
                    Off
                    <input type="checkbox" onChange={SwitchClick}/>
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

export default Home;
