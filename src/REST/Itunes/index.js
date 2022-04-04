const apiUrl = "https://itunes.apple.com";
// const cors = "https://cors-woof.herokuapp.com";

function musicSearch(terms, limit) {
  return fetch(
    `${apiUrl}/search?limit=${limit}&media=music&entity=musicTrack&term=${terms}`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export { musicSearch };
