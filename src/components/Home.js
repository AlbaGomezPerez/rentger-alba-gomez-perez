import React from 'react';
import {Route, Switch} from 'react-router-dom';
import EpisodesCard from "./EpisodesCard";
import EpisodesList from "./EpisodesList";
import PropTypes from 'prop-types';

/**
 * Render a view with a checkbox to select the view mode, an input to search by name of episode
 * and one of two components from: EpisodesCard or EpisodesList
 * @param props
 *  - AllEpisodes: list with all episodes
 *  - switchClick: function to change list/card mode when swtich is clicked
 *  - getEpisodeInput: function to store the input text value into the state
 *  - SearchEpisode: text value that the users writes into the input
 *  - DataSwitchChecked: true if the switch must be checked or false otherwise
 * @returns the html content for this component
 */
const Home = props => {
    const {AllEpisodes, switchClick, getEpisodeInput, SearchEpisode, DataSwitchChecked} = props;

    return (
        <React.Fragment>
            <h1 className="mainTitle">Rick & Morty</h1>
            <div className="switch">
                <label>
                    <i className="material-icons card-icon">apps</i>
                    <input type="checkbox" onChange={switchClick} checked={DataSwitchChecked}/>
                    <span className="lever"></span>
                    <i className="material-icons list-icon">dehaze</i>
                </label>
            </div>
            <div className="app-filters">
                <input type="text" className="searchEpisodes" placeholder="Search your a favourite episode"
                       onChange={getEpisodeInput} value={SearchEpisode}/>
            </div>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={routerProps => (
                        <EpisodesCard
                            AllEpisodes={AllEpisodes}
                            SearchEpisode={SearchEpisode}
                        />
                    )
                    }
                />
                <Route
                    path="/list"
                    render={routerProps => (
                        <EpisodesList
                            AllEpisodes={AllEpisodes}
                            SearchEpisode={SearchEpisode}
                        />
                    )}
                />
            </Switch>
        </React.Fragment>
    )
};

Home.propTypes = {
    AllEpisodes: PropTypes.array,
    switchClick: PropTypes.func,
    SearchEpisode: PropTypes.string,
    getEpisodeInput: PropTypes.func
};

export default Home;
