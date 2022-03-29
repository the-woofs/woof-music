import "./index.css";

import CircularButton from "../CircularButton";

import { AddRounded } from "@mui/icons-material";

import { searchYouTube } from "../../REST/YouTube";
import { addTrackToLocalPlaylist } from "../../Functions/localPlaylists";

function PlayButtonFromSearch(props) {
  const { playlistId, albumName, trackName, artistName, albumArt } =
    props;

  const onClickFunction = async () => {
    console.log("search");
    const tracks = await searchYouTube(`${artistName} - ${trackName} from ${albumName}`);

    addTrackToLocalPlaylist({
      albumName: albumName,
      trackName: trackName,
      albumArt: albumArt,
      artistName: artistName,
      url: tracks.results[0].video.url,
    },
    playlistId
    );
  };

  return (
    <CircularButton onClick={onClickFunction}>
      <AddRounded />
    </CircularButton>
  );
}

export default PlayButtonFromSearch;
