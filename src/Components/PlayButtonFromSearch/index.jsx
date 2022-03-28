import "./index.css";

import CircularButton from "../CircularButton";

import { PlayArrowRounded } from "@mui/icons-material";

import { searchYouTube } from "../../REST/YouTube";

function PlayButtonFromSearch(props) {
  const { albumName, trackName, artistName, trackStateFunction, albumArt } =
    props;

  const onClickFunction = async () => {
    console.log("search");
    const tracks = await searchYouTube(`${artistName} - ${trackName} from ${albumName}`);

    trackStateFunction({
      albumName: albumName,
      trackName: trackName,
      albumArt: albumArt,
      artistName: artistName,
      url: tracks.results[0].video.url,
    });
  };

  return (
    <CircularButton onClick={onClickFunction}>
      <PlayArrowRounded />
    </CircularButton>
  );
}

export default PlayButtonFromSearch;
