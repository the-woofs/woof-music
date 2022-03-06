import "./index.css";

import { useState } from "react";

import PlaylistPage from "../PlaylistPage";
import PlaylistCard from "../../Components/PlaylistCard";
import { getLocalPlaylists } from "../../Functions/localPlaylists";

console.log(localStorage);

function PlayslitsPage(props) {
  const localPlaylists = getLocalPlaylists();

  const [isViewingPlaylist, setIsViewingPlaylist] = useState(false);
  const [playlistId, setPlaylistId] = useState(null);
  const [isLocal, setIsLocal] = useState(true);

  return (
    <>
      {!isViewingPlaylist && (
        <div className='PlaylistsPage'>
          <h1>Playlists</h1>
          <div className='PlaylistsGrid'>
            {localPlaylists &&
              localPlaylists.map((playlist) => (
                <PlaylistCard
                  key={playlist.id}
                  id={playlist.id}
                  name={playlist.name}
                  thumbnail={playlist.thumbnail}
                  isLocal={true}
                  description={playlist.description}
                  setIsViewingPlaylist={setIsViewingPlaylist}
                  setPlaylistId={setPlaylistId}
                  setIsLocal={setIsLocal}
                />
              ))}
          </div>
        </div>
      )}
      {isViewingPlaylist && (
        <PlaylistPage
          playlistId={playlistId}
          setIsViewingPlaylist={setIsViewingPlaylist}
          isLocal={isLocal}
        />
      )}
    </>
  );
}

export default PlayslitsPage;
