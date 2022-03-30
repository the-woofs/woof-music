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

export { playFromPlaylist };
