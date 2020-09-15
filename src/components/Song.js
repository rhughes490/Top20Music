import React from 'react';

const Song = (props) => {
    return (
        <div>
            <li>
                <img src={props.image} alt="" className="album-cover"/>
                <h3 className="title">{props.title}</h3>
                <h3 className="artist">{props.artist}</h3>
                <a href={props.preview} className="link">Play</a>
            </li>
        </div>
    )
}

export default Song;