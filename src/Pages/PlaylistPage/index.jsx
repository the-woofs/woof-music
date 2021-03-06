import "./index.css";
import { useEffect, useState } from "react";

import { getLocalPlaylists } from "../../Functions/localPlaylists";
import {
  playFromPlaylist,
  addPlaylistToQueue,
} from "../../Functions/playlists";

import TrackListItem from "../../Components/TrackListItem";
import CircularButton from "../../Components/CircularButton";
import SearchPagePlaylist from "../SearchPagePlaylist";

import {
  PlayArrowRounded,
  PauseRounded,
  AddRounded,
} from "@mui/icons-material";

function PlaylistPage(props) {
  const {
    playlistId,
    trackStateFunction,
    isLocal,
    playerRef,
    //    trackId,
    setTrackId,
    queue,
    setQueue,
  } = props;

  let playlists, playlist;

  if (isLocal) {
    playlists = getLocalPlaylists();
    playlist = playlists[playlistId];
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [trackButtonContent, setTrackButtonContent] = useState("Add Track");

  const onClickFunction = () => {
    console.log(playlist);
    console.log(`Is Playing? ${isPlaying}`);
    if (isPlaying === false) {
      console.log("is playing");
      playFromPlaylist(
        playerRef,
        trackStateFunction,
        0,
        playlist,
        setTrackId,
        queue,
        setQueue
      );
      console.log(`Is Playing? ${isPlaying}`);
      setIsPlaying(true);
      console.log(`Is Playing? ${isPlaying}`);
    } else {
      setIsPlaying(false);
    }
  };

  const addQueueFunc = () => {
    addPlaylistToQueue(playlist, setQueue);
  };

  useEffect(() => {
    setTracks(playlist.tracks);
  }, [playlist]);

  return (
    <div className="PlaylistPage">
      {playlist && (
        <div className="PlaylistHeader">
          <img
            className="Thumbnail"
            src={playlist.thumbnail}
            alt={playlist.name}
          />
          <h1>{playlist.name}</h1>
          <p>{playlist.description}</p>
          <div className="PlaylistButtons">
            {isPlaying ? (
              <button
                className="IconButton PlayButton"
                onClick={onClickFunction}
              >
                <PauseRounded
                  sx={{
                    fontSize: "2.5rem",
                  }}
                />
              </button>
            ) : (
              <button
                className="IconButton PlayButton"
                onClick={onClickFunction}
              >
                <PlayArrowRounded
                  sx={{
                    fontSize: "2.5rem",
                  }}
                />
              </button>
            )}
            <button className="IconButton ShareButton" onClick={addQueueFunc}>
              <AddRounded />
            </button>
          </div>
        </div>
      )}
      <div className="PlaylistContent">
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
                  <PlayArrowRounded
                    onClick={() => {
                      setTrackId(index);
                      playFromPlaylist(
                        playerRef,
                        trackStateFunction,
                        index,
                        playlist,
                        setTrackId,
                        queue,
                        setQueue
                      );
                    }}
                  />
                </CircularButton>
              }
            />
          ))}
      </div>
      {isSearching && <SearchPagePlaylist playlistId={playlistId} />}
      <br />
      <br />
      <div className="center">
        <button
          onClick={() => {
            if (!isSearching) {
              setTrackButtonContent("Done Searching");
            } else {
              setTrackButtonContent("Add Track");
            }
            setIsSearching(!isSearching);
          }}
        >
          {trackButtonContent}
        </button>
      </div>
    </div>
  );
}

export default PlaylistPage;
