import React, { Component } from "react"

const API_KEY = '2d6529df'

export class SearchForm extends Component {
    state= {
        inputMovie:''
    }

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
    }

    _handleSubmit = (e) => {
        e.preventDefault
        const { inputMovie } = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            // como nos llega un string de datos lo transformamos con el res.json
            .then(res=>res.json())
            // aqui llega un objeto json
            .then(results => {
                const { Search, totalResults } = results
                // es importante anotar que de esta manera se pasa data de hijo a padre por props
                // como de padre a hijo y se recibe en el componente padre con una funcion
                // <SearchForm onResults={ this._handleResults } />
                this.props.onResults(Search)
            })
    }

  render() {
    return (
      <div className="field has-addons">
        <div className="control">
          <input onChange={this._handleChange} className="input" type="text" placeholder="Find a Movie" />
        </div>
        <div className="control">
          <button onClick={this._handleSubmit} className="button is-info">Search</button>
        </div>
      </div>
    )
  }
}
