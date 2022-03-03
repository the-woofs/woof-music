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
  const [isPlaying, setIsPlaying] = useState(true);

  const [searchPage, setSearchPage] = useState(false);
  const [playlistPage, setPlaylistPage] = useState(false);
  const [homePage, setHomePage] = useState(true);

  const [queue, setQueue] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isUsingQueue, setIsUsingQueue] = useState(false);

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  useEffect(() => {
    console.log(track);
    if (!track === {}) {
      setIsUsingQueue(true);
    }
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
          {searchPage && (
            <SearchPage
              trackStateFunction={setTrack}
              setIsUsingQueue={setIsUsingQueue}
            />
          )}
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
              element={
                <SearchPage
                  trackStateFunction={setTrack}
                  setIsUsingQueue={setIsUsingQueue}
                />
              }
            />
            <Route
              path="/search/:q"
              element={
                <SearchPage
                  trackStateFunction={setTrack}
                  setIsUsingQueue={setIsUsingQueue}
                />
              }
            />
            <Route
              path="/search/:q/:page"
              element={
                <SearchPage
                  trackStateFunction={setTrack}
                  setIsUsingQueue={setIsUsingQueue}
                />
              }
            />
            <Route
              path="/playlists"
              element={
                <PlaylistsPage
                  trackStateFunction={setTrack}
                  setIsUsingQueue={setIsUsingQueue}
                />
              }
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
          trackId={currentTrack}
          isUsingQueue={isUsingQueue}
          queue={queue}
        />
      </BottomBar>
    </>
  );
}

export default MainScreen;
