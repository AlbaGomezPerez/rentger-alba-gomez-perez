import React from 'react';
import {GetEpisodes} from './services/GetEpisodes';
import EpisodeCard from './components/EpisodeCard';
import DetailCard from './components/DetailCard';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      AllEpisodes: [],
    };
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


  render() {
    const {AllEpisodes} = this.state;
    return (
        <div className="app">
          <h1 className="title">Rick & Morty</h1>
            <div className="switch">
                <label>
                    Off
                    <input type="checkbox"/>
                        <span className="lever"></span>
                        On
                </label>
            </div>
          <EpisodeCard
              AllEpisodes={AllEpisodes}
          />
            <DetailCard
                AllEpisodes={AllEpisodes}
                Match={routerProps.match}
            />
        </div>
    );
  };
}

export default App;

