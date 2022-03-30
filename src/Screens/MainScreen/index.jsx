import React from "react";
import { useState, useEffect, useRef } from "react";

import LeftPanel from "../../Components/LeftPanel";
import BottomBar from "../../Components/BottomBar";

import HomePage from "../../Pages/HomePage";
import SearchPage from "../../Pages/SearchPage";
import PlaylistsPage from "../../Pages/PlaylistsPage";
import QueuePage from "../../Pages/QueuePage";

import CurrentlyPlayingInfo from "../../Components/CurrentlyPlayingInfo";

import { saveQueue } from "../../Functions/queue"

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
  const [queue, setQueue] = useState(null);

  const playerRef=useRef();

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  useEffect(() => {
    console.log(track);
  }, [track]);

  useEffect(() => {
    console.log("Writing to localstorage")
    saveQueue(queue)
  }, [queue])

  return (
    <>
      <LeftPanel
        homeSetState={setHomePage}
        searchSetState={setSearchPage}
        playlistSetState={setPlaylistPage}
        queueSetState={setQueuePage}
        viewingPlaylistSetState={setViewingPlaylist}
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
              playerRef={playerRef}
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
              playerRef={playerRef}
              queue={queue}
              setQueue={setQueue}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          )}
          {searchPage && <SearchPage trackStateFunction={setTrack} queue={queue} setQueue={setQueue} />}
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
          playerRef={playerRef}
        />
      </BottomBar>
    </>
  );
}

export default MainScreen;
