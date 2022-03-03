import "./index.css";
import React from "react";
import ReactPlayer from "react-player/youtube";
import Controls from "../Controls";
import { useState, useEffect } from "react";

function CurrentlyPlayingInfo(props) {
  const {
    artistName,
    albumArt,
    trackName,
    albumName,
    url,
    playing,
    muted,
    queue,
    isUsingQueue,
  } = props;

  const [playedValue, setPlayedValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(playing);
  const [newPlayedValue, setNewPlayedValue] = useState(0);

  let urls;

  if (isUsingQueue) {
    urls = queue.map((song) => song.url);
  } else {
    urls = [url];
  }

  const handleProgress = (played) => {
    setPlayedValue(played.played);
  };

  const playerRef = React.createRef();

  useEffect(() => {
    try {
      playerRef.current.seekTo(newPlayedValue, "fraction");
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, [newPlayedValue]);

  return (
    <div class="Grid">
      <div className="CurrentlyPlayingInfo">
        <img src={albumArt} alt={albumName} />
        <div className="CurrentlyPlayingInfoText">
          <h2>{trackName}</h2>
          <span>{artistName}</span>
        </div>
      </div>
      <div>
        <ReactPlayer
          url={urls}
          playing={isPlaying}
          muted={muted}
          height={0}
          width={0}
          id="reactplayer"
          onProgress={handleProgress}
          ref={playerRef}
        />
        <Controls
          playedValue={playedValue}
          setPlayedValue={setNewPlayedValue}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </div>
  );
}

export default CurrentlyPlayingInfo;
