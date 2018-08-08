import React from 'react';
import './Thumbnail.css';

export default function Thumbnail(props) {
    return (
        <div className="thumbnail-container">
            <img src='#' alt=''/>
            <h3>{props.name}</h3>
        </div>
    )
}