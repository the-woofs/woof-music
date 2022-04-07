import "./index.css";

import CircularButton from "../CircularButton";

import { AddRounded } from "@mui/icons-material";

import { searchYouTube } from "../../REST/YouTube";
import { addToQueue } from "../../Functions/queue";

function AddButtonFromSearch(props) {
  const { albumName, trackName, artistName, albumArt, queue, setQueue } = props;

  const onClickFunction = async () => {
    console.log("search");
    const tracks = await searchYouTube(
      `${artistName} - ${trackName} from ${albumName} Official`
    );

    addToQueue(queue, setQueue, {
      albumName: albumName,
      trackName: trackName,
      albumArt: albumArt,
      artistName: artistName,
      url: tracks.results[0].video.url,
    });
  };

  return (
    <CircularButton onClick={onClickFunction}>
      <AddRounded />
    </CircularButton>
  );
}

export default AddButtonFromSearch;
