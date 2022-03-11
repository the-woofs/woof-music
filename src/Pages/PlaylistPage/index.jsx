import "./index.css";
import { useState } from "react";

import { getLocalPlaylists } from "../../Functions/localPlaylists";

import TrackListItem from "../../Components/TrackListItem";
import CircularButton from "../../Components/CircularButton";

import {
  PlayArrowRounded,
  PauseRounded,
  ShareRounded,
} from "@mui/icons-material";

function PlaylistPage(props) {
  const { playlistId, setIsViewingPlaylist, isLocal } = props;

  let playlists;
  let playlist;

  if (isLocal) {
    playlists = getLocalPlaylists();
    playlist = playlists[playlistId];
  }

  const [isPlaying, setIsPlaying] = useState(false);

  const onClickFunction = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='PlaylistPage'>
      <div className='PlaylistHeader'>
        <img
          className='Thumbnail'
          src={playlist.thumbnail}
          alt={playlist.name}
        />
        <h1>{playlist.name}</h1>
        <p>{playlist.description}</p>
        <div className='PlaylistButtons'>
          <button className=' eee PlayButton' onClick={onClickFunction}>
            {isPlaying ? (
              <PauseRounded
                sx={{
                  fontSize: "2.5rem",
                }}
              />
            ) : (
              <PlayArrowRounded
                sx={{
                  fontSize: "2.5rem",
                }}
              />
            )}
          </button>
          <button className=' eee ShareButton'>
            <ShareRounded />
          </button>
        </div>
      </div>
      <div className='PlaylistContent'>
        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />
        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />

        <TrackListItem
          trackName='Lorem Ipsum'
          albumArt='https://i.imgur.com/2YqYQYv.jpg'
          artistName='Lorem Ipsum'
          albumName='Lorem Ipsum'
          button={
            <CircularButton>
              <PlayArrowRounded />
            </CircularButton>
          }
        />
      </div>
    </div>
  );
}

export default PlaylistPage;
