import "./index.css";

import ExplicitArea from "../ExplicitArea";
import Drawer from "../Drawer";
import GradientButton from "../GradientButton";
import Avatar from "../Avatar";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

function LeftPanel(props) {
  const {
    children,
    homeSetState,
    searchSetState,
    playlistSetState,
    queueSetState,
    isLoggedIn,
    firebaseConfig,
    isLoading,
    viewingPlaylistSetState,
  } = props;

  initializeApp(firebaseConfig);

  initializeApp(firebaseConfig);

  const auth = getAuth();

  // TODO: Make Different Authentication Providers Later On. Only Goolge for now.
  const googleAuthProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <div class='PanelDiv'>
      <div class='LeftPanel'>
        <div class='AccountCenterDiv'>
          {/* !isLoggedIn && !isLoading && (
            <GradientButton className='SignInButton' onClick={signInWithGoogle}>
              Sign In
            </GradientButton>
          ) */}
          {/* isLoggedIn && (
            <>
              <div class='SignedInInfo'>
                <Avatar
                  src={auth.currentUser.photoURL}
                  height={50}
                  width={50}
                  alt={auth.currentUser.displayName}
                />
                <h2>{auth.currentUser.displayName}</h2>
              </div>
            </>
          ) */}
        </div>
        <div className='LeftPanelDrawer'>
          <Drawer
            homeSetState={homeSetState}
            searchSetState={searchSetState}
            playlistSetState={playlistSetState}
            queueSetState={queueSetState}
            isLoggedIn={isLoggedIn}
            firebaseConfig={firebaseConfig}
            viewingPlaylistSetState={viewingPlaylistSetState}
          />
          <hr />
          <div class='AccountCenterDiv'>
            {isLoggedIn && !isLoading && (
              <button className='SignOutButton' onClick={() => auth.signOut()}>
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
      <ExplicitArea>{children}</ExplicitArea>
    </div>
  );
}

export default LeftPanel;
