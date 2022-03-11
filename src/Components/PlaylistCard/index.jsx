import "./index.css";
import { useState } from "react";

import CircularButton from "../../Components/CircularButton";
import { PlayArrowRounded } from "@mui/icons-material";

function PlaylistCard(props) {
  const {
    id,
    name,
    thumbnail,
    isLocal,
    description,
    setIsLocal,
    setIsViewingPlaylist,
    setPlaylistId,
  } = props;

  const onClick = () => {
    setIsViewingPlaylist(true);
    setPlaylistId(id);
    setIsLocal(isLocal);
  };

  return (
    <div className='PlaylistCard' onClick={onClick}>
      <div
        className='PlaylistCardThumbnailDiv'
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      >
        <div className='PlaylistCardThumbnailOverlay'>
          <CircularButton className='PlaylistPlayButton'>
            <PlayArrowRounded />
          </CircularButton>
        </div>
      </div>
      <div className='PlaylistCardInfo'>
        <h3 className='PlaylistCardName'>{name}</h3>
        <div className='PlaylistDescription'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PlaylistCard;
