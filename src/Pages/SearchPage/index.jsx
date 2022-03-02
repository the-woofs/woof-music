import { useState, useEffect } from "react";

import "./index.css";

import SearchBar from "../../Components/SearchBar";
import TrackListItem from "../../Components/TrackListItem";
import PlayButtonFromSearch from "../../Components/PlayButtonFromSearch";

import { musicSearch } from "../../REST/Itunes";

function SearchPage(props) {
  const { trackStateFunction } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({});

  useEffect(() => {
    let isMounted = true;
    if (searchTerm.length > 0 && isMounted && searchTerm !== "") {
      musicSearch(searchTerm)
        .then((data) => {
          setSearchResults(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return () => {
      isMounted = false;
    };
  }, [searchTerm]);

  const onChangeFunction = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="SearchPage">
      <SearchBar onChangeText={onChangeFunction} />
      <div className="SearchItems">
        {searchResults &&
          searchResults.results &&
          searchResults.results.map((item) => {
            return (
              <TrackListItem
                trackName={item.trackName}
                artistName={item.artistName}
                albumName={item.collectionName}
                albumArt={item.artworkUrl100}
                button={
                  <PlayButtonFromSearch
                    trackName={item.trackName}
                    artistName={item.artistName}
                    albumName={item.collectionName}
                    albumArt={item.artworkUrl100}
                    trackStateFunction={trackStateFunction}
                  />
                }
              />
            );
          })}
      </div>
    </div>
  );
}

export default SearchPage;
