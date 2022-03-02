import "./index.css";

import HomeScreenCard from "../../Components/HomeScreenCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCompactDisc } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <div className="HomePage">
      <h1>Home</h1>
      <div className="Grid">
        <a href="/search">
          <HomeScreenCard>
            <FontAwesomeIcon icon={faSearch} class="Icon" />
            <h2>Find Music</h2>
          </HomeScreenCard>
        </a>

        <a href="/playlists">
          <HomeScreenCard>
            <FontAwesomeIcon icon={faCompactDisc} class="Icon" />
            <h2>Playlists</h2>
          </HomeScreenCard>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
