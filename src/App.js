import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {GetEpisodes} from './services/GetEpisodes';
import Home from './components/Home';
import DetailCard from './components/DetailCard';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            AllEpisodes: [],
            CartoonsCharactersInfo: [],
            SearchEpisode: '',
            DataSwitch: []
        };

        this.switchClick = this.switchClick.bind(this);
        this.updateCharactersInfo = this.updateCharactersInfo.bind(this);
        this.getEpisodeInput = this.getEpisodeInput.bind(this);
    }


    componentDidMount() {
        let usersSwitchString = localStorage.getItem("usersData");
        if (usersSwitchString !== undefined && usersSwitchString !== null) {
            let usersSwitchParsed = JSON.parse(usersSwitchString);
            this.setState({
                DataSwitch: usersSwitchParsed
            })
        }
        this.getCartoons();
    }


// Second part of fetch and Update state
    getCartoons() {
        GetEpisodes()
            .then(data => {
                this.setState({
                    AllEpisodes: data.results
                });
            });
    }

    //Characters info
    updateCharactersInfo(data) {
        this.setState({
            CartoonsCharactersInfo: data
        });
    }

    //get switch checked
    // From: https://tylermcginnis.com/react-router-programmatically-navigate/
    switchClick(event) {
        const switchValue = event.currentTarget.checked;
        if (switchValue === true) {
            this.props.history.push('/list')
        } else {
            this.props.history.push('/')
        }
        //Local storage. Save switch checked
        let usersSwitchString = localStorage.getItem("usersData");
        if (usersSwitchString === '' || usersSwitchString === null || usersSwitchString === undefined) {
            let usersSwitchList = [switchValue];
            usersSwitchString = JSON.stringify(usersSwitchList);
        } else {
            let usersSwitchParsed = JSON.parse(usersSwitchString);
            usersSwitchParsed.push(switchValue);
            usersSwitchString = JSON.stringify(usersSwitchParsed);
        }
        localStorage.setItem("usersData", usersSwitchString);
    }

    getEpisodeInput(event) {
        const SearchEpisode = event.currentTarget.value;
        this.setState({
            SearchEpisode: SearchEpisode
        });
    }


    render() {
        const {AllEpisodes, CartoonsCharactersInfo, SearchEpisode, DataSwitch} = this.state;
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
                                DataSwitch={DataSwitch}
                                updateCharactersInfo={this.updateCharactersInfo}
                                Match={routerProps.match}

                            />
                        )}
                    />
                </Switch>
            </div>
        );
    };
}

export default withRouter(App);

