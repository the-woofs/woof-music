function playFromPlaylist(ref, setTrack, trackId, playlist, setTrackId) {
  const onEndFunction = () => {
    if (trackId + 1 < playlist.tracks.length) {
      playFromPlaylist(ref, setTrack, trackId + 1, playlist, setTrackId);
    } else {
      setTrackId(0);
      setOnEndFunction(ref, null);
    }
  };
  setOnEndFunction(ref, onEndFunction);
  setTrack(playlist.tracks[trackId]);
  setTrackId(trackId);
}

function setOnEndFunction(ref, onEndFunction) {
  ref.current.onEndFunction = onEndFunction;
}

export { playFromPlaylist };
