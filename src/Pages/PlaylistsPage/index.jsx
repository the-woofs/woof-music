import "./index.css";

import { useState } from "react";

import PlaylistPage from "../PlaylistPage";
import PlaylistCard from "../../Components/PlaylistCard";
import { getLocalPlaylists } from "../../Functions/localPlaylists";

console.log(localStorage);

function PlayslitsPage(props) {
  const {
    isViewingPlaylist,
    setIsViewingPlaylist,
    trackStateFunction,
    setOnEndFunction,
    trackId,
    setTrackId,
  } = props;
  const localPlaylists = getLocalPlaylists();

  const [playlistId, setPlaylistId] = useState(null);
  const [isLocal, setIsLocal] = useState(true);

  return (
    <>
      {!isViewingPlaylist && (
        <div className='PlaylistsPage'>
          <h1>Playlists</h1>
          {!localPlaylists &&
              <p>You have no playlists. Create one and it will be listed here.</p>

            }
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
          <hr />
          {
            // Make a div that has text fields for new playlist info
          }
            <button className="CreateButton">
              Create
            </button>
        </div>
      )}
      {isViewingPlaylist && (
        <PlaylistPage
          playlistId={playlistId}
          setIsViewingPlaylist={setIsViewingPlaylist}
          isLocal={isLocal}
          trackStateFunction={trackStateFunction}
          setOnEndFunction={setOnEndFunction}
          trackId={trackId}
          setTrackId={setTrackId}
        />
      )}
    </>
  );
}

export default PlayslitsPage;
