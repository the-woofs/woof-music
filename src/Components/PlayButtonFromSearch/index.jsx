import "./index.css";

import CircularButton from "../CircularButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { searchYouTube } from "../../REST/YouTube";

function PlayButtonFromSearch(props) {
  const { albumName, trackName, artistName, trackStateFunction, albumArt } =
    props;

  const onClickFunction = async () => {
    console.log("search");
    console.log(await searchYouTube(`${artistName} - ${trackName}`));
    const tracks = await searchYouTube(`${artistName} - ${trackName}`);

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
      <FontAwesomeIcon icon={faPlay} />
    </CircularButton>
  );
}

export default PlayButtonFromSearch;
