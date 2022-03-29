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
    playerRef,
  } = props;

  const [playedValue, setPlayedValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(playing);
  const [newPlayedValue, setNewPlayedValue] = useState(0);

  const handleProgress = (played) => {
    setPlayedValue(played.played);
  };
  const myRef = playerRef;

  useEffect(() => {
    try {
      myRef.current.seekTo(newPlayedValue, "fraction");
    } catch (err) {
      console.log(err);
    }
  }, [newPlayedValue]);

  return (
    <div class='Grid'>
      <div className='CurrentlyPlayingInfo'>
        <div
          className='AlbumArt'
          style={{
            backgroundImage: `url(${albumArt})`,
          }}
        ></div>
        <div className='CurrentlyPlayingInfoText'>
          <h2>{trackName}</h2>
          <span>{artistName}</span>
        </div>
      </div>
      <div>
        <ReactPlayer
          url={url}
          playing={isPlaying}
          muted={muted}
          height={0}
          width={0}
          id='reactplayer'
          onProgress={handleProgress}
          ref={myRef}
          onEnded={
            () => {
              console.log(myRef)
              myRef.current.onEndFunction();
            } 
          }
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
