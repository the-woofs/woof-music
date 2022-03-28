import "./index.css";
import { useEffect, useState } from "react";

import { getLocalPlaylists } from "../../Functions/localPlaylists";
import { playFromPlaylist } from "../../Functions/playlists";

import TrackListItem from "../../Components/TrackListItem";
import CircularButton from "../../Components/CircularButton";

import {
  PlayArrowRounded,
  PauseRounded,
  ShareRounded,
} from "@mui/icons-material";

function PlaylistPage(props) {
  const {
    playlistId,
    setIsViewingPlaylist,
    trackStateFunction,
    isLocal,
    setOnEndFunction,
    trackId,
    setTrackId,
  } = props;

  let playlists, playlist;

  if (isLocal) {
    playlists = getLocalPlaylists();
    playlist = playlists[playlistId];
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [tracks, setTracks] = useState([]);

  const onClickFunction = () => {
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      console.log("is playing");
      playFromPlaylist(
        trackStateFunction,
        trackId,
        playlist,
        setTrackId,
        setOnEndFunction
      );
    }
  };

  useEffect(() => {
    setTracks(playlist.tracks);
  }, [playlist]);

  return (
    <div className='PlaylistPage'>
      {playlist && (
        <div className='PlaylistHeader'>
          <img
            className='Thumbnail'
            src={playlist.thumbnail}
            alt={playlist.name}
          />
          <h1>{playlist.name}</h1>
          <p>{playlist.description}</p>
          <div className='PlaylistButtons'>
            {isPlaying ? (
              <button className='eee PlayButton' onClick={onClickFunction}>
                <PauseRounded
                  sx={{
                    fontSize: "2.5rem",
                  }}
                />
              </button>
            ) : (
              <button className='eee PlayButton' onClick={onClickFunction}>
                <PlayArrowRounded
                  sx={{
                    fontSize: "2.5rem",
                  }}
                />
              </button>
            )}
            <button className=' eee ShareButton'>
              <ShareRounded />
            </button>
          </div>
        </div>
      )}
      <div className='PlaylistContent'>
        {tracks &&
          tracks.map((track, index) => (
            <TrackListItem
              key={index}
              trackName={track.trackName}
              artistName={track.artistName}
              albumName={track.albumName}
              url={track.url}
              albumArt={track.albumArt}
              button={
                <CircularButton>
                  <PlayArrowRounded />
                </CircularButton>
              }
            />
          ))}
      </div>
      <br />
      <br />
      <div className="center">
        <button>Add Tracks</button>
        </div>
    </div>
  );
}

export default PlaylistPage;
