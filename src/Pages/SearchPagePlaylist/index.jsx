import { useState, useEffect } from "react";

import "./index.css";

import SearchBar from "../../Components/SearchBar";
import TrackListItem from "../../Components/TrackListItem";
import AddButtonFromSearch from "../../Components/AddButtonFromSearch";

import { musicSearch } from "../../REST/Itunes";

function SearchPage(props) {
  const { playlistId, setIsUsingQueue, setQueue, queue } = props;
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

  const addToQueue = (track) => {
    setQueue([...queue, track]);
    setIsUsingQueue(true);
  };

  return (
    <div className="SearchPage">
      <SearchBar onChangeText={onChangeFunction} />
      <div className="SearchItems">
        {searchResults &&
          searchResults.results &&
          searchResults.results.map((item, index) => {
            return (
              <div id={index} >
              <TrackListItem
                trackName={item.trackName}
                artistName={item.artistName}
                albumName={item.collectionName}
                albumArt={item.artworkUrl100}
                button={
                  <AddButtonFromSearch
                    trackName={item.trackName}
                    artistName={item.artistName}
                    albumName={item.collectionName}
                    albumArt={item.artworkUrl100}
                    playlistId={playlistId}
                    index={`${index}`}
                  />
                }
                />
                </div>
            );
          })}
      </div>
    </div>
  );
}

export default SearchPage;
