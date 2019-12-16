import React from 'react';
import {GetEpisodes} from './services/GetEpisodes';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      AllCharacters: [],
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
            AllCharacters : data.results
          });
        });
  }


  render() {
    const {AllCharacters} = this.state;
    return (
        <div className="App">
          <h1>Hola</h1>
          <ul>
            {AllCharacters.map((item, index) => {

                  return (
                      <li key={index}>{item.name}</li>
                  )
                }
            )}
          </ul>
        </div>
    );
  };
}

export default App;

