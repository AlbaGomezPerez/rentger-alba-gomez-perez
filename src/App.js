import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {GetEpisodes} from './services/GetEpisodes';
import Home from './components/Home';
import DetailCard from './components/DetailCard';
import './App.css';

/**
 * Component father that contains all others components
 */
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            AllEpisodes: [],
            CartoonsCharactersInfo: [],
            SearchEpisode: '',
            DataSwitchChecked: ''
        };

        this.switchClick = this.switchClick.bind(this);
        this.updateCharactersInfo = this.updateCharactersInfo.bind(this);
        this.getEpisodeInput = this.getEpisodeInput.bind(this);
    }


    /**
     * Get data from localstore to show episodes in the appropiate mode
     * and store the value into the state
     * Also it calls the API to get all episodes
     */
    componentDidMount() {
        let usersSwitchString = localStorage.getItem("usersData");
        if (usersSwitchString !== undefined && usersSwitchString !== null) {
            let usersSwitchParsed = JSON.parse(usersSwitchString);
            this.setState({
                DataSwitchChecked: usersSwitchParsed
            })
        }
        this.getCartoons();
    }

    /**
      * Call the API to get all episodes and store them in state
      */
    getCartoons() {
        GetEpisodes()
            .then(data => {
                this.setState({
                    AllEpisodes: data.results
                });
            });
    }


    /**
      * Store characters info into the state
      */
    updateCharactersInfo(data) {
        this.setState({
            CartoonsCharactersInfo: data
        });
    }

    /**
      * Change the component based on the switch checked and store the value into the localstorage.
      * This method is executed when we click on the switch button
      * @see to change component: https://tylermcginnis.com/react-router-programmatically-navigate/
      */
    switchClick(event) {
        const switchValue = event.currentTarget.checked;
        if (switchValue === true) {
            this.props.history.push('/list')
        } else {
            this.props.history.push('/')
        }
        //Local storage. Save switch checked
        let usersSwitchString = JSON.stringify(switchValue);
        localStorage.setItem("usersData", usersSwitchString);
        this.setState({
            DataSwitchChecked: switchValue
        })
    }

    /**
     * Store in state the given text to search episodes by name
     * @param event the object that contains the text written by the user
     */
    getEpisodeInput(event) {
        const SearchEpisode = event.currentTarget.value;
        this.setState({
            SearchEpisode: SearchEpisode
        });
    }

    /**
     * Render the list/card component or the detail component based on URL
     * @returns html with all content
     */
    render() {
        const {AllEpisodes, CartoonsCharactersInfo, SearchEpisode, DataSwitchChecked} = this.state;
        return (
            <div className="app">
                <Switch>
                    <Route
                        exact
                        path={["/", "/list"]}
                        render={routerProps => (
                            <Home
                                AllEpisodes={AllEpisodes}
                                SearchEpisode={SearchEpisode}
                                DataSwitchChecked={DataSwitchChecked}
                                switchClick={this.switchClick}
                                getEpisodeInput={this.getEpisodeInput}
                            />
                        )}
                    />

                    <Route
                        path="/episode/:id"
                        render={routerProps => (
                            <DetailCard
                                AllEpisodes={AllEpisodes}
                                CartoonsCharactersInfo={CartoonsCharactersInfo}
                                DataSwitchChecked={DataSwitchChecked}
                                updateCharactersInfo={this.updateCharactersInfo}
                                match={routerProps.match}

                            />
                        )}
                    />
                </Switch>
            </div>
        );
    };
}

export default withRouter(App);

