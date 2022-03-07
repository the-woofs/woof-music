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
        <img
          className='Thumbnail'
          src={playlist.thumbnail}
          alt={playlist.name}
        />
        <h1>{playlist.name}</h1>
        <p>{playlist.description}</p>
        <div className='PlaylistButtons'>
          {/* DO THE FREAKING ICONS NEXT TIME BYEEEEE */}
          <button className='PlayButton'></button>
          <button className='ShareButton'></button>
        </div>
      </div>
      <div className='PlaylistContent'></div>
    </div>
  );
}

export default PlaylistPage;
