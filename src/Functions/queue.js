function playFromQueue(ref, setTrack, trackId, queue, setTrackId) {
  queue = getQueue();
  const onEndFunction = () => {
    console.log(queue);
    queue = getQueue();
    if (trackId + 1 < queue.length) {
      playFromQueue(ref, setTrack, trackId + 1, queue, setTrackId);
    } else {
      playFromQueue(ref, setTrack, 0, queue, setTrackId);
    }
  };

  const prevTrackFunction = () => {
    queue = getQueue();
    if (trackId - 1 >= 0) {
      playFromQueue(ref, setTrack, trackId - 1, queue, setTrackId);
    } else {
      setTrackId(queue.length - 1);
      playFromQueue(ref, setTrack, queue.length - 1, queue, setTrackId);
    }
  };

  setOnEndFunction(ref, onEndFunction);
  setMovePrevFunction(ref, prevTrackFunction);
  setTrack(queue[trackId]);
  setTrackId(trackId);
}

function addToQueue(queue, setQueue, track) {
  queue = getQueue();
  console.log(queue);
  try {
    setQueue([...queue, track]);
    saveQueue([...queue, track]);
  } catch {
    setQueue([track]);
    saveQueue([track]);
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
