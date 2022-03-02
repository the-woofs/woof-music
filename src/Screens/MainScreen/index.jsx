import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Drawer from "../../Components/Drawer";
import LeftPanel from "../../Components/LeftPanel";
import BottomBar from "../../Components/BottomBar";

import HomePage from "../../Pages/HomePage";
import SearchPage from "../../Pages/SearchPage";
import PlaylistsPage from "../../Pages/PlaylistsPage";

import CurrentlyPlayingInfo from "../../Components/CurrentlyPlayingInfo";

function MainScreen() {
  const [track, setTrack] = useState({

  });

  return (
    <>
      <LeftPanel drawer={<Drawer />}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/search"
              element={<SearchPage trackStateFunction={setTrack} />}
            />
            <Route
              path="/search/:q"
              element={<SearchPage trackStateFunction={setTrack} />}
            />
            <Route
              path="/search/:q/:page"
              element={<SearchPage trackStateFunction={setTrack} />}
            />
            <Route
              path="/playlists"
              element={<PlaylistsPage trackStateFunction={setTrack} />}
            />
          </Routes>
        </Router>
      </LeftPanel>
      <BottomBar>
        <CurrentlyPlayingInfo
          artistName={track["artistName"]}
          trackName={track["trackName"]}
          albumArt={track["albumArt"]}
          url={track["url"]}
        />
      </BottomBar>
    </>
  );
}

export default MainScreen;
