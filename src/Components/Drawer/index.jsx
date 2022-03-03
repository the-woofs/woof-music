import "./index.css";

import DrawerItem from "../DrawerItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faCompactDisc,
  faList,
} from "@fortawesome/free-solid-svg-icons";

function Drawer(props) {
  const { homeSetState, searchSetState, playlistSetState, queueSetState } =
    props;
  console.log(homeSetState);
  return (
    <div className="Drawer">
      <span
        onClick={() => {
          homeSetState(true);
          searchSetState(false);
          playlistSetState(false);
          queueSetState(false);
        }}
      >
        <DrawerItem>
          <span style={{ fontFamily: "Rubik" }}>
            <FontAwesomeIcon icon={faHome} />
            <span className="DrawerItemText">Home</span>
          </span>
        </DrawerItem>
      </span>

      <span
        onClick={() => {
          homeSetState(false);
          searchSetState(true);
          playlistSetState(false);
          queueSetState(false);
        }}
      >
        <DrawerItem>
          <span style={{ fontFamily: "Rubik" }}>
            <FontAwesomeIcon icon={faSearch} />
            <span className="DrawerItemText">Search</span>
          </span>
        </DrawerItem>
      </span>

      <span
        onClick={() => {
          homeSetState(false);
          searchSetState(false);
          playlistSetState(true);
          queueSetState(false);
        }}
      >
        <DrawerItem>
          <span style={{ fontFamily: "Rubik" }}>
            <FontAwesomeIcon icon={faCompactDisc} />
            <span className="DrawerItemText">Playlists</span>
          </span>
        </DrawerItem>
      </span>
      <span
        onClick={() => {
          homeSetState(false);
          searchSetState(false);
          playlistSetState(false);
          queueSetState(true);
        }}
      >
        <DrawerItem>
          <span style={{ fontFamily: "Rubik" }}>
            <FontAwesomeIcon icon={faList} />
            <span className="DrawerItemText">Queue</span>
          </span>
        </DrawerItem>
      </span>
    </div>
  );
}

export default Drawer;
