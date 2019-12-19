import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {GetEpisodes} from './services/GetEpisodes';
import Home from './components/Home';
import DetailCard from './components/DetailCard';
import EpisodesList from "./components/EpisodesList";
import './App.css';


class App extends React.Component {
  constructor(props){
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
            AllEpisodes : data.results
          });
        });
  }

    SwitchClick(event) {
        const changeView = event.currentTarget.value;
        changeView.onClick("/list")
    }


  render() {
    const {AllEpisodes} = this.state;
    return (
        <div className="app">
            <Switch>
                <Route
                    exact
                    path="/"
                    render={routerProps => (
            <Home
                AllEpisodes={AllEpisodes}
                view={this.SwitchClick}
            />
                    )}
                />

                <Route
                    path="/list"
                    render={routerProps => (
                        <EpisodesList
                            AllEpisodes={AllEpisodes}
                        />
                    )}
                />

                <Route
                    path="/character/:id"
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

export default App;

