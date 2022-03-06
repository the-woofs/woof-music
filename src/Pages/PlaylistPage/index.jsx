import "./index.css";
import { getLocalPlaylists } from "../../Functions/localPlaylists";

function PlaylistPage(props) {
  const { playlistId, setIsViewingPlaylist, isLocal } = props;

  let playlists;
  let playlist;

  if (isLocal) {
    playlists = getLocalPlaylists();
    playlist = playlists[playlistId];
  }

  return (
    <div className='PlaylistPage'>
      <div className='PlaylistHeader'>
        <img src={playlist.thumbnail} alt={playlist.name} />
        <h1>{playlist.name}</h1>
      </div>
      <hr />
      <div className='PlaylistContent'></div>
    </div>
  );
}

export default PlaylistPage;
