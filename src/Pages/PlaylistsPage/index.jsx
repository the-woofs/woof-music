import "./index.css";
import PlaylistCard from "../../Components/PlaylistCard";
import { getLocalPlaylists } from "../../Functions/localPlaylists";

console.log(localStorage);

function PlayslitsPage(props) {
  const localPlaylists = getLocalPlaylists();
  // Just to do stuff with it before making the cards
  console.log(localPlaylists);

  return (
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
            />
          ))}
      </div>
    </div>
  );
}

export default PlayslitsPage;
