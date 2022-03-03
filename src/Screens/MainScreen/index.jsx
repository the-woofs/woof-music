import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import LeftPanel from "../../Components/LeftPanel";
import BottomBar from "../../Components/BottomBar";

import HomePage from "../../Pages/HomePage";
import SearchPage from "../../Pages/SearchPage";
import PlaylistsPage from "../../Pages/PlaylistsPage";

import CurrentlyPlayingInfo from "../../Components/CurrentlyPlayingInfo";

function MainScreen() {
  const [track, setTrack] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);

  const [searchPage, setSearchPage] = useState(false);
  const [playlistPage, setPlaylistPage] = useState(false);
  const [homePage, setHomePage] = useState(true);

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  useEffect(() => {
    console.log(track);
  }, [track]);

  return (
    <>
      <LeftPanel
        homeSetState={setHomePage}
        searchSetState={setSearchPage}
        playlistSetState={setPlaylistPage}
      >
        <>
          {homePage && (
            <HomePage
              homeSetState={setHomePage}
              searchSetState={setSearchPage}
              playlistSetState={setPlaylistPage}
            />
          )}
          {playlistPage && <PlaylistsPage />}
          {searchPage && <SearchPage trackStateFunction={setTrack} />}
        </>
        <Router>
          <Routes>
            <Route
              path="/home"
              element={
                <HomePage
                  homeSetState={setHomePage}
                  searchSetState={setSearchPage}
                  playlistSetState={setPlaylistPage}
                />
              }
            />
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
          playing={isPlaying}
        />
      </BottomBar>
    </>
  );
}

export default MainScreen;
