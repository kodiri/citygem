import React, { Component } from 'react';
import './SearchBar.css';
import Places from '../../../places';
import Thumbnail from '../Thumbnail/Thumbnail';

export default class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    updateSearchHandler(event) {
        this.setState({ search: event.target.value })
    }
    render() {

        let filteredPlaces = Places.filter((place) => {
            return (
                place.name
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase()) ||
                place.category.includes(this.state.search.toLowerCase())
            )
        })

        return (
            <div className="search-container">
                <div className="search-input">
                    <input
                        type="text"
                        className="searchbar"
                        value={this.state.search}
                        placeholder="Looking for something specific.."
                        onChange={(e) => this.updateSearchHandler(e)} />
                </div>
                <ul>
                    { 
                        filteredPlaces.map((filteredPlace) => {
                            return <Thumbnail name={filteredPlace.name} id={filteredPlace.id} /> 
                        })
                    }
                </ul>
            </div>
        )
    }
}