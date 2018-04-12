import React, { Component } from 'react';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MoviesList } from './components/MoviesList'

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
    const { results } = this.state
    return (
      <div className="App">
      {/* pasamos el texto como children */}
      <Title>Search Movies</Title>
      <div className='SearchForm-wrapper'>
        <SearchForm onResults={ this._handleResults } />
      </div>
      
      <div className="ListMovies-wrapper container columns is-desktop">
        {!results || results === 0 
          ? <p>No hay resultados</p>
          : <MoviesList movies={this.state.results} />}
      </div>

      </div>
    );
  }
}

export default App;
