function playFromPlaylist(ref, setTrack, trackId, playlist, setTrackId) {
  const onEndFunction = () => {
    if (trackId + 1 < playlist.tracks.length) {
      playFromPlaylist(ref, setTrack, trackId + 1, playlist, setTrackId);
    } else {
      setTrackId(0);
      setOnEndFunction(ref, null);
    }
  };

  const prevTrackFunction = () => {
    if (trackId - 1 >= 0) {
      playFromPlaylist(ref, setTrack, trackId - 1, playlist, setTrackId);
    } else {
      setTrackId(0);
      setOnEndFunction(ref, null);
    }
  };

  setOnEndFunction(ref, onEndFunction);
  setMovePrevFunction(ref, prevTrackFunction);
  setTrack(playlist.tracks[trackId]);
  setTrackId(trackId);
}

function setOnEndFunction(ref, onEndFunction) {
  ref.current.onEndFunction = onEndFunction;
}

function setMovePrevFunction(ref, prevTrackFunction) {
  ref.current.prevTrackFunction = prevTrackFunction;
}

export { playFromPlaylist };
