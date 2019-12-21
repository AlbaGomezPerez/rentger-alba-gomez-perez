import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {GetEpisodes} from './services/GetEpisodes';
import Home from './components/Home';
import DetailCard from './components/DetailCard';
import './App.css';
import {withRouter} from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            AllEpisodes: [],
            CartoonsCharactersInfo: [],
            SearchEpisode: ''
        };

        this.switchClick = this.switchClick.bind(this);
        this.updateCharactersInfo = this.updateCharactersInfo.bind(this);
        this.getEpisodeInput = this.getEpisodeInput.bind(this);
    }


    componentDidMount() {
        console.log('funciono.soy did');
        this.getCartoons();
    }


// Second part of fetch and Update state
    getCartoons() {
        GetEpisodes()
            .then(data => {
                console.log('funciono.soy la petición');
                this.setState({
                    AllEpisodes: data.results
                });
            });
    }

    updateCharactersInfo(data) {
        this.setState({
            CartoonsCharactersInfo: data
        });
    }

    switchClick(event) {
        const switchValue = event.currentTarget.checked;
        if(switchValue === true){
            // From: https://tylermcginnis.com/react-router-programmatically-navigate/
            this.props.history.push('/list')
        }else{
            this.props.history.push('/')
        }
    }

    getEpisodeInput(event){
        const SearchEpisode = event.currentTarget.value;
        this.setState({
            SearchEpisode: SearchEpisode
        });
    }


    render() {
        const {AllEpisodes, CartoonsCharactersInfo, SearchEpisode} = this.state;
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

