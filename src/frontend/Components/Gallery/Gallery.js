import React, { Component } from 'react';
import './Gallery.css';
import Places from '../../../places.js';
import Thumbnail from './../Thumbnail/Thumbnail';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';

export default class Gallery extends Component {
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
                place.category.reduce((str, cat)=>str+cat,'').includes(this.state.search.toLowerCase())
            )
        })

        return (
            <div className="gallery">
            <NavBar page="gallery"/>
                <div className="gallery-container">
                    <div className="search-input">
                        <input
                            type="text"
                            className="searchbar"
                            value={this.state.search}
                            placeholder="Looking for something specific.."
                            onChange={(e) => this.updateSearchHandler(e)} />
                    </div>
                    <SearchBar/>
                    <div className="search-container">
                            {
                                filteredPlaces.length > 0 ? 
                                    filteredPlaces.map((filteredPlace) => {
                                        return <Thumbnail 
                                            name={filteredPlace.name} 
                                            id={filteredPlace.id} 
                                            detail={filteredPlace.synopsis}
                                            category={filteredPlace.category} />
                                    }) : 
                                    <div>Sorry we can't find what you are looking for</div>
                            }
                    </div>
                </div>
            </div>
        )
    }
}