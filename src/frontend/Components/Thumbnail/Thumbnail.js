import React from 'react';
import './Thumbnail.css';

export default function Thumbnail(props) {

    
    return (
        <div className="thumbnail-container">
            <a href="/details">
                <img alt={props.name} src={require(`../Images/${props.id}.jpg`)}></img>
            </a>
            <div className="thumbnail-text">
                <h5>{props.name}</h5>
                <h4>{props.name}</h4>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

//let imageUrl = require(`../Images/${props.id}.jpg`);
// style={{ backgroundImage : `url(${imageUrl})` }}>
//             <h3>{props.name}</h3>