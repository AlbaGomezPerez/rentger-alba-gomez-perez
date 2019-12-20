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
            CartoonsCharactersInfo: []
        };

        this.switchClick = this.switchClick.bind(this);
        this.updateCharactersInfo = this.updateCharactersInfo.bind(this);
    }


    componentDidMount() {
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


    render() {
        const {AllEpisodes, CartoonsCharactersInfo} = this.state;
        return (
            <div className="app">
                <Switch>
                    <Route
                        exact
                        path={["/", "/list"]}
                        render={routerProps => (
                            <Home
                                AllEpisodes={AllEpisodes}
                                switchClick={this.switchClick}
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

