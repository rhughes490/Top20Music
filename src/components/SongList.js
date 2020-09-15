import React from 'react';
import Song from './Song';

const SongList = (props) => {

    const songNodes = props.songs.map(song => {
        return (
            <Song
            key={song.id.label}
            image={song["im:image"][0].label}
            title={song["im:name"].label}
            artist={song["im:artist"].label}
            preview={song.link[1].attributes.href}
            />
        )
    })

    return (
        <ol>
            {songNodes}
        </ol>
    )

}

export default SongList;