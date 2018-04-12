import React, { Component } from 'react';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  state= {
    results : []
  }

  _handleResults = (results) => {
    this.setState({ results })
  }

  render() {
    return (
      <div className="App">
      {/* pasamos el texto como children */}
      <Title>Search Movies</Title>
      <div className='SearchForm-wrapper'>
        <SearchForm onResults={ this._handleResults } />
      </div>
      
      {this.state.results.length === 0 
      ? <p>No hay resultados</p>
      : this.state.results.map(movie=>{
        return <p key={movie.imdbID}>{movie.Title}</p>
      })}

      </div>
    );
  }
}

export default App;
