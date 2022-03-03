const apiUrl = "https://woof-yt-scrape.herokuapp.com/api";
const cors = "https://cors-woof.herokuapp.com";

async function searchYouTube(terms) {
  let r = await fetch(`${cors}/${apiUrl}/search?q=${terms}`);
  let data = await r.json();
  return data;
}

export { searchYouTube };
