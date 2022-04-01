function playFromQueue(ref, setTrack, trackId, queue, setTrackId) {
  const onEndFunction = () => {
    console.log(queue);
    queue = getQueue();
    playFromQueue(ref, setTrack, trackId + 1, queue, setTrackId);
  };

  const prevTrackFunction = () => {
    if (trackId - 1 >= 0) {
      queue = getQueue();
      playFromQueue(ref, setTrack, trackId - 1, queue, setTrackId);
    } else {
      setTrackId(0);
      setOnEndFunction(ref, null);
    }
  };

  setOnEndFunction(ref, onEndFunction);
  setMovePrevFunction(ref, prevTrackFunction);
  setTrack(queue[trackId]);
  setTrackId(trackId);
}

function addToQueue(queue, setQueue, track) {
  console.log(track);
  if (typeof queue !== "object") {
    setQueue([track]);
  } else {
    setQueue([...queue, track]);
  }
  console.log(queue);
}

function removeFromQueue(queue, setQueue, trackId) {
  const newQueue = queue.filter((_, index) => index !== trackId);
  setQueue(newQueue);
}

function setOnEndFunction(ref, onEndFunction) {
  ref.current.onEndFunction = onEndFunction;
}

function setMovePrevFunction(ref, prevTrackFunction) {
  ref.current.prevTrackFunction = prevTrackFunction;
}

function saveQueue(queue) {
  const queueString = JSON.stringify(queue);
  localStorage.setItem("Queue", queueString);
}

function getQueue() {
  const queueString = localStorage.getItem("Queue");
  return JSON.parse(queueString);
}

export { playFromQueue, addToQueue, removeFromQueue, saveQueue, getQueue };
