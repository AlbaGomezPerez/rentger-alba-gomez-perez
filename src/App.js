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
        };

        this.SwitchClick = this.SwitchClick.bind(this);
    }


// Función sirve para pintar la petición al entrar en la página
    componentDidMount() {
        this.getCartoons();
    }


// Función que contiene la segunda parte del fetch, donde se actualiza
// el estado (array). Es llamada en componentDidMount
    getCartoons() {
        GetEpisodes()
            .then(data => {

                this.setState({
                    AllEpisodes: data.results
                });
            });
    }

    SwitchClick(event) {
        const switchValue = event.currentTarget.checked;
        if(switchValue === true){
            // From: https://tylermcginnis.com/react-router-programmatically-navigate/
            this.props.history.push('/list')
        }else{
            this.props.history.push('/')
        }
    }


    render() {
        const {AllEpisodes} = this.state;
        return (
            <div className="app">
                <Switch>
                    <Route
                        exact
                        path={["/", "/list"]}
                        render={routerProps => (
                            <Home
                                AllEpisodes={AllEpisodes}
                                SwitchClick={this.SwitchClick}
                            />
                        )}
                    />

                    <Route
                        path="/episode/:id"
                        render={routerProps => (
                            <DetailCard
                                AllEpisodes={AllEpisodes}
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

