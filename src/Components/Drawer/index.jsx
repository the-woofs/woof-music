import "./index.css";

import DrawerItem from "../DrawerItem";
import {
  HomeRounded,
  SearchRounded,
  LibraryMusicRounded,
} from "@mui/icons-material";

function Drawer(props) {
  const {
    homeSetState,
    searchSetState,
    playlistSetState,
    viewingPlaylistSetState,
  } = props;
  console.log(homeSetState);
  return (
    <div className='Drawer'>
      <span
        onClick={() => {
          homeSetState(true);
          searchSetState(false);
          playlistSetState(false);
        }}
      >
        <DrawerItem>
          <span className='DrawerContentGrid'>
            <HomeRounded />
            <span className='DrawerItemText'>Home</span>
          </span>
        </DrawerItem>
      </span>

      <span
        onClick={() => {
          homeSetState(false);
          searchSetState(true);
          playlistSetState(false);
        }}
      >
        <DrawerItem>
          <span className='DrawerContentGrid'>
            <SearchRounded />
            <span className='DrawerItemText'>Search</span>
          </span>
        </DrawerItem>
      </span>

      <span
        onClick={() => {
          homeSetState(false);
          searchSetState(false);
          playlistSetState(true);
          viewingPlaylistSetState(false);
        }}
      >
        <DrawerItem>
          <span className='DrawerContentGrid'>
            <LibraryMusicRounded />
            <span className='DrawerItemText'>Playlists</span>
          </span>
        </DrawerItem>
      </span>
    </div>
  );
}

export default Drawer;
