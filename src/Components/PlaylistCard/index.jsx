import "./index.css";

import { getLocalPlaylists } from "../../Functions/localPlaylists";

function PlaylistCard(props) {
  const localPlaylists = getLocalPlaylists();
  // Just to do stuff with it before making the cards
  console.log(localPlaylists);

  return <></>;
}

export default PlaylistCard;
