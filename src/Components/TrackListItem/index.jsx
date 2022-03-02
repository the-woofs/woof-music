import "./index.css";

function TrackListItem(props) {
  const { trackName, albumArt, artistName, albumName, button } = props;

  return (
    <div className="TrackListItem">
      <img className="albumArt" src={albumArt} alt={albumName} />
      <div className="trackInfo">
        <span class="nameNArtist">
          <h3>{trackName}</h3>
          <span className="artistName">{artistName}</span>
        </span>
        <span className="albumName">{albumName}</span>
      </div>
      <span className="buttonCenter">{button}</span>
    </div>
  );
}

export default TrackListItem;
