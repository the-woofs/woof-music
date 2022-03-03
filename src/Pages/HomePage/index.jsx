import "./index.css";

import HomeScreenCard from "../../Components/HomeScreenCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCompactDisc } from "@fortawesome/free-solid-svg-icons";

function HomePage(props) {
  const { homeSetState, searchSetState, playlistSetState } = props;
  return (
    <div className="HomePage">
      <h1>Home</h1>
      <div className="Grid">
        <span
          onClick={() => {
            homeSetState(false);
            searchSetState(true);
            playlistSetState(false);
          }}
        >
          <HomeScreenCard>
            <FontAwesomeIcon icon={faSearch} class="Icon" />
            <h2>Find Music</h2>
          </HomeScreenCard>
        </span>

        <span
          onClick={() => {
            homeSetState(false);
            searchSetState(false);
            playlistSetState(true);
          }}
        >
          <HomeScreenCard>
            <FontAwesomeIcon icon={faCompactDisc} class="Icon" />
            <h2>Playlists</h2>
          </HomeScreenCard>
        </span>
      </div>
    </div>
  );
}

export default HomePage;
