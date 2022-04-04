import React from "react";
import { useState, useEffect, useRef } from "react";

import LeftPanel from "../../Components/LeftPanel";
import BottomBar from "../../Components/BottomBar";

import HomePage from "../../Pages/HomePage";
import SearchPage from "../../Pages/SearchPage";
import PlaylistsPage from "../../Pages/PlaylistsPage";
// import QueuePage from "../../Pages/QueuePage";

import CurrentlyPlayingInfo from "../../Components/CurrentlyPlayingInfo";

import { saveQueue, getQueue, playFromQueue } from "../../Functions/queue";

function MainScreen(props) {
  const { isLoggedIn, firebaseConfig, isLoading } = props;

  const getTrackId = () => {
    const trackId = localStorage.getItem("trackId");
    if (!trackId) {
      localStorage.setItem("trackId", "0");
    }
  };

  getTrackId();

  const [track, setTrack] = useState({});
  const [onBufferEnd, setOnBufferEnd] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackId, setTrackId] = useState(
    parseInt(localStorage.getItem("trackId"))
  );

  const [searchPage, setSearchPage] = useState(false);
  const [playlistPage, setPlaylistPage] = useState(false);
  const [viewingPlaylist, setViewingPlaylist] = useState(false);
  const [homePage, setHomePage] = useState(true);
  const [queuePage, setQueuePage] = useState(false);
  console.log(queuePage);
  const [queue, setQueue] = useState(localStorage.getItem("queue"));

  const playerRef = useRef();

  useEffect(() => {
    try {
      playFromQueue(playerRef, setTrack, trackId, getQueue(), setTrackId);
    } catch (error) {
      console.log(error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (queue) saveQueue(queue);
  }, [queue]);

  useEffect(() => {
    localStorage.setItem("trackId", trackId);
  }, [trackId]);

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
          {searchPage && (
            <SearchPage
              trackStateFunction={setTrack}
              queue={queue}
              setQueue={setQueue}
            />
          )}
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
