import "./index.css";
import ReactPlayer from "react-player";

function CurrentlyPlayingInfo(props) {
  const { artistName, albumArt, trackName, albumName, url } = props;
	console.log(url)
  return (
    <div className="CurrentlyPlayingInfo">
      <ReactPlayer url={url} light={albumArt} playing={true} />
      <div className="CurrentlyPlayingInfoText">
        <h2>{trackName}</h2>
        <span>{artistName}</span>
      </div>
    </div>
  );
}

export default CurrentlyPlayingInfo;
