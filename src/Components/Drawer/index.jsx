import "./index.css";

import DrawerItem from "../DrawerItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faCompactDisc,
} from "@fortawesome/free-solid-svg-icons";

function Drawer() {
  return (
    <div className="Drawer">
      <a href="/">
        <DrawerItem>
          <span style={{ fontFamily: "Rubik" }}>
            <FontAwesomeIcon icon={faHome} />
            <span className="DrawerItemText">Home</span>
          </span>
        </DrawerItem>
      </a>

      <a href="/search">
      <DrawerItem>
        <span style={{ fontFamily: "Rubik" }}>
          <FontAwesomeIcon icon={faSearch} />
          <span className="DrawerItemText">Search</span>
        </span>
      </DrawerItem>
      </a>

      <a href="/playlists">
      <DrawerItem>
        <span style={{ fontFamily: "Rubik" }}>
          <FontAwesomeIcon icon={faCompactDisc} />
          <span className="DrawerItemText">Playlists</span>
        </span>
      </DrawerItem>
      </a>
    </div>
  );
}

export default Drawer;
