import "./index.css";

import TrackListItem from "../../Components/TrackListItem";

function QueuePage(props) {
  const { queue } = props;

  return (
    <div className="QueuePage">
      <h1>Queue Page</h1>
      {queue &&
        queue.map((item) => (
          <TrackListItem
            trackName={item.trackName}
            artistName={item.artistName}
            albumName={item.collectionName}
            albumArt={item.artworkUrl100}
          />
        ))}
    </div>
  );
}

export default QueuePage;
