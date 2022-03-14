import React from "react";
import { useState, useEffect } from "react";

import LeftPanel from "../../Components/LeftPanel";
import BottomBar from "../../Components/BottomBar";

import HomePage from "../../Pages/HomePage";
import SearchPage from "../../Pages/SearchPage";
import PlaylistsPage from "../../Pages/PlaylistsPage";
import QueuePage from "../../Pages/QueuePage";

import CurrentlyPlayingInfo from "../../Components/CurrentlyPlayingInfo";

function MainScreen(props) {
  const { isLoggedIn, firebaseConfig, isLoading } = props;

  const [track, setTrack] = useState({});
  const [onBufferEnd, setOnBufferEnd] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackId, setTrackId] = useState(0);

  // Using states to change the page so that the site doesn't have to redirect. Redirecting can cause the player to stop playing.
  const [searchPage, setSearchPage] = useState(false);
  const [playlistPage, setPlaylistPage] = useState(false);
  const [viewingPlaylist, setViewingPlaylist] = useState(false);
  const [homePage, setHomePage] = useState(true);
  const [queuePage, setQueuePage] = useState(false);
  const [queue, setQueue] = useState([]);

  const [isQueue, setIsQueue] = useState(false);

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
        queueSetState={setQueuePage}
        viewingPlaylistSetState={setViewingPlaylist}
        // gotta pass this to the panel, then pass it to the drawer, then to the button aaaaaa
        isLoggedIn={isLoggedIn}
        isLoading={isLoading}
        firebaseConfig={firebaseConfig}
      >
        <>
          {homePage && (
            <HomePage
              homeSetState={setHomePage}
              searchSetState={setSearchPage}
              playlistSetState={setPlaylistPage}
              viewingPlaylistSetState={setViewingPlaylist}
              queueSetState={setQueuePage}
            />
          )}
          {playlistPage && (
            <PlaylistsPage
              isViewingPlaylist={viewingPlaylist}
              setIsViewingPlaylist={setViewingPlaylist}
              trackStateFunction={setTrack}
              setOnEndFunction={setOnBufferEnd}
              trackId={trackId}
              setTrackId={setTrackId}
            />
          )}
          {searchPage && <SearchPage trackStateFunction={setTrack} />}
        </>
      </LeftPanel>
      <BottomBar>
        <CurrentlyPlayingInfo
          artistName={track["artistName"]}
          trackName={track["trackName"]}
          albumArt={track["albumArt"]}
          url={track["url"]}
          playing={isPlaying}
          onBufferEnd={onBufferEnd}
          trackId={trackId}
          setTrackId={setTrackId}
        />
      </BottomBar>
    </>
  );
}

export default MainScreen;
