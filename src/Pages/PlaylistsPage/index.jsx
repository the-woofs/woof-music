import "./index.css";
import PlaylistCard from "../../Components/PlaylistCard";

console.log(localStorage);

function PlayslitsPage(props) {
  const localPlaylists = localStorage.getItem("Playlists");
  return <div className='PlaylistsPage'></div>;
}

export default PlayslitsPage;
