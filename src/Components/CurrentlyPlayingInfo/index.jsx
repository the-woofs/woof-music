import "./index.css";
import React from "react";
import ReactPlayer from "react-player/youtube";
import Controls from "../Controls";
import { useState, useEffect } from "react";

import Slider from "react-input-slider";
import {
  VolumeUpRounded,
  VolumeMuteRounded,
  VolumeDownRounded,
} from "@mui/icons-material";

function CurrentlyPlayingInfo(props) {
  const { artistName, albumArt, trackName, url, playing, muted, playerRef } =
    props;

  const [playedValue, setPlayedValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(playing);
  const [isMuted, setIsMuted] = useState(muted);
  console.log(setIsMuted);
  const [volume, setVolume] = useState(0.5);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newPlayedValue]);

  return (
    <div class="Grid">
      <div className="CurrentlyPlayingInfo">
        <div
          className="AlbumArt"
          style={{
            backgroundImage: `url(${albumArt})`,
          }}
        ></div>
        <div className="CurrentlyPlayingInfoText">
          <h2>{trackName}</h2>
          <span>{artistName}</span>
        </div>
      </div>
      <div>
        <ReactPlayer
          url={url}
          playing={isPlaying}
          muted={isMuted}
          volume={volume}
          height={0}
          width={0}
          id="reactplayer"
          onProgress={handleProgress}
          ref={myRef}
          onEnded={() => {
            console.log(myRef);
            myRef.current.onEndFunction();
          }}
        />
        <Controls
          playedValue={playedValue}
          setPlayedValue={setNewPlayedValue}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          playerRef={playerRef}
        />
      </div>
      <div className="VolumeControls">
        <div className="VolumeControlsVertical">
          {volume === 0 && <VolumeMuteRounded className="VolumeIcon" />}
          {volume !== 0 && volume >= 0.5 && (
            <VolumeUpRounded className="VolumeIcon" />
          )}
          {volume < 0.5 && volume !== 0 && (
            <VolumeDownRounded className="VolumeIcon" />
          )}
        </div>
        <div className="VolumeSlider">
          <Slider
            axis="x"
            x={volume * 100}
            xmax={100}
            xmin={0}
            onChange={({ x }) => {
              console.log(x);
              setVolume(x / 100);
            }}
            styles={{
              track: {
                backgroundColor: "var(--background)",
                height: 7,
                width: "100%",
              },
              active: {
                backgroundColor: "var(--blackTernary)",
              },
              thumb: {
                width: 15,
                height: 15,
                backgroundColor: "var(--color4)",
              },
              disabled: {
                opacity: 0.5,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CurrentlyPlayingInfo;
