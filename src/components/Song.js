import React from 'react';

const Song = (props) => {
    return (
        <div>
            <li>
                <img src={props.image} alt="" className="album-cover"/>
                <h3 className="title">{props.title}</h3>
                <h3 className="artist">{props.artist}</h3>
                <audio controls src={props.preview}> </audio>
                <hr></hr>
            </li>
        </div>
    )
}

export default Song;