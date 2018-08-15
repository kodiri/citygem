import React from 'react';
import './Thumbnail.css';

export default function Thumbnail(props) {
    let imageUrl = require(`../Images/${props.id}.jpg`);
    
    return (
        <div className="thumbnail-container" 
            style={{ backgroundImage : `url(${imageUrl})` }}>
            <h3>{props.name}</h3>
        </div>
    )
}