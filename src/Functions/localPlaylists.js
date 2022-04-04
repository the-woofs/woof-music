/*
PLAYLIST STRUCTURE

{
    id: "1",
    name: "Playlist 1",
    description: "This is a playlist",
    owner: "1",
    tracks: [...],
    createdAt: "2020-01-01T00:00:00.000Z",
    updatedAt: "2020-01-01T00:00:00.000Z",
    thumbnail: "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"
}

*/

const playlistsKey = "Playlists";

function getLocalPlaylists() {
  let playlists = JSON.parse(localStorage.getItem(playlistsKey));

  return playlists;
}

function addLocalPlaylist(playlistObject) {
  let playlists = getLocalPlaylists();
  const playlist = playlistObject;

  if (!playlists) {
    playlists = [];
  }

  if (playlist.name === "") {
    playlist.name = "New Playlist";
  }

  if (playlist.description === "") {
    playlist.description = "A local playlist.";
  }

  playlistObject.id = playlists.length;
  playlists.push(playlistObject);
  localStorage.setItem(playlistsKey, JSON.stringify(playlists));
}

function addTrackToLocalPlaylist(track, playlistId) {
  const playlists = getLocalPlaylists();
  console.log(playlists);
  console.log(playlistId);

  if (!playlists[playlistId].tracks) {
    playlists[playlistId].tracks = [];
  }

  playlists[playlistId].tracks.push(track);
  localStorage.setItem(playlistsKey, JSON.stringify(playlists));
}

export { getLocalPlaylists, addLocalPlaylist, addTrackToLocalPlaylist };
