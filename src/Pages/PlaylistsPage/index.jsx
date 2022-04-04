import "./index.css";

import { useState } from "react";

import PlaylistPage from "../PlaylistPage";
import PlaylistCard from "../../Components/PlaylistCard";
import {
  getLocalPlaylists,
  addLocalPlaylist,
} from "../../Functions/localPlaylists";

console.log(localStorage);

function PlayslitsPage(props) {
  const {
    isViewingPlaylist,
    setIsViewingPlaylist,
    trackStateFunction,
    setOnEndFunction,
    trackId,
    setTrackId,
    playerRef,
    queue,
    setQueue,
    isPlaying,
    setIsPlaying,
  } = props;
  const localPlaylists = getLocalPlaylists();

  const [playlistId, setPlaylistId] = useState(null);
  const [isCreatingPlaylist, setIsCreatingPlaylist] = useState(false);
  const [isLocal, setIsLocal] = useState(true);

  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createPlaylist = () => {
    addLocalPlaylist({
      thumbnail: thumbnail,
      name: title,
      description: description,
      id: 0,
    });
  };

  return (
    <>
      {isCreatingPlaylist && (
        <div className="PlaylistCreationOverlay">
          <h1>Create Playlist</h1>
          <div className="Grid2">
            <div>
              <img src={thumbnail} alt="thumbnail" className="thumbnail" />
              <br />
              <br />
              <h2>Thumbnail Source:</h2>{" "}
              <input
                onChange={(e) => {
                  setThumbnail(e.target.value);
                }}
              />
            </div>
            <div>
              <h2>Title:</h2>
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <br />
              <br />
              <br />
              <h2>Description:</h2>
              <input
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <br />
              <br />
              <br />
              <br />
              <button onClick={createPlaylist}>Create</button>
            </div>
          </div>
        </div>
      )}
      {!isViewingPlaylist && (
        <div className="PlaylistsPage">
          <h1>Playlists</h1>
          {!localPlaylists && (
            <p>You have no playlists. Create one and it will be listed here.</p>
          )}
          <div className="PlaylistsGrid">
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
          <br />
          <br />
          <hr />
          <button
            className="CreateButton"
            onClick={() => {
              setIsCreatingPlaylist(true);
            }}
          >
            Create Playlist
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
          playerRef={playerRef}
          queue={queue}
          setQueue={setQueue}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}
    </>
  );
}

export default PlayslitsPage;
