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
            search: '',
            showSearchBar: false,
            category: null,
            places: Places
        }
    }

    updateSearchHandler(event) {
        this.setState({ search: event.target.value })
    }

    onClickHandler(category) {
        category === 'changeSearchBar' ? this.onChangeSearch() :
            this.setState({ category })
    }

    onChangeSearch() {
        this.setState({ showSearchBar: !this.state.showSearchBar, search: '', category: null });
    }

    render() {

        let { showSearchBar, search, places, category } = this.state;

        let filteredPlaces;
        !category ?
            filteredPlaces = places.filter((place) => {
                return (
                    place.name
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    place.category.reduce((str, cat) => str + cat, '').includes(search.toLowerCase())
                )
            }) :
            filteredPlaces = places.filter((place) => {
                return (
                    place.name
                        .toLowerCase()
                        .includes(category) ||
                    place.category.reduce((str, cat) => str + cat, '').includes(category)
                )
            });

        return (
            <div className="gallery">
                <NavBar page="gallery" />
                <div className="gallery-container">
                    <div className="searchbar-nav-container">
                        {showSearchBar ? <div className="search-input">
                            <input
                                type="text"
                                className="searchbar"
                                value={search}
                                placeholder="Looking for something specific.."
                                onChange={(e) => this.updateSearchHandler(e)} />
                            <div className="search-exit-btn" onClick={() => this.onChangeSearch()}>X</div>
                        </div> :
                            <SearchBar onClick={(cat) => this.onClickHandler(cat)} />}
                    </div>
                    <div className="thumbnail-gallery-container">
                        {
                            filteredPlaces.length > 0 ?
                                filteredPlaces.map((filteredPlace) => {
                                    return <Thumbnail
                                        key={filteredPlace.id}
                                        name={filteredPlace.name}
                                        id={filteredPlace.id}
                                        detail={filteredPlace.synopsis}
                                        category={filteredPlace.category} />
                                }) :
                                <div className="error-message">Sorry we can't find what you are looking for</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}