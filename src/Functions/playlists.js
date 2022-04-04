import { playFromQueue, getQueue, saveQueue } from "./queue";

function playFromPlaylist(
  ref,
  setTrack,
  trackId,
  playlist,
  setTrackId,
  queue,
  setQueue
) {
  setTrack(null);
  saveQueue(playlist.tracks);
  setQueue(playlist.tracks);
  if (queue === null) {
    queue = getQueue();
  }
  playFromQueue(ref, setTrack, trackId, queue, setTrackId);
}

function addPlaylistToQueue(playlist, setQueue) {
  const queue = getQueue();
  if (typeof queue !== "object") {
    saveQueue(playlist.tracks);
    setQueue(playlist.tracks);
  } else {
    saveQueue([...queue, ...playlist.tracks]);
    setQueue([...queue, ...playlist.tracks]);
  }
}

export { playFromPlaylist, addPlaylistToQueue };
