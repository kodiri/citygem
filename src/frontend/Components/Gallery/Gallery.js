import React, { Component } from 'react';
import './Gallery.css';
import Places from '../../../places.js';
import Thumbnail from './../Thumbnail/Thumbnail';

export default class Gallery extends Component {

    render() {
        
        return (
            <div className="gallery">
                <h1>GALLERY</h1>
                <div className="gallery-container">
                    {Places.map((place) => <Thumbnail name={place.name} id={place.id}/>)}
                </div>
            </div>
        )
    }
}