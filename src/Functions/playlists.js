function playFromPlaylist(
  setTrack,
  trackId,
  playlist,
  setTrackId,
  setOnEndFunction
) {
  const onEndFunction = () => {
    if (trackId + 1 < playlist.tracks.length) {
      playFromPlaylist(
        setTrack,
        trackId + 1,
        playlist,
        setTrackId,
        setOnEndFunction
      );
    } else {
      setTrackId(0);
      setOnEndFunction(null);
    }
  };
  setOnEndFunction(onEndFunction);
  setTrack(playlist.tracks[trackId]);
  setTrackId(trackId);
}

export { playFromPlaylist };
