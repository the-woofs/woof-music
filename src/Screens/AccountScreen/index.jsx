/* 
XXX
AccountScreen is actually meant to manage the sign in and sign out operations
and not the user's account managerment.
The user's account should be managed via the woofverse (web) app itself.
*/

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function AccountScreen(props) {
  const { firebaseConfig } = props;
  initializeApp(firebaseConfig);

  const auth = getAuth();

  // Make Different Authentication Providers
  const googleAuthProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <>
      <div className='AccountScreen'>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </>
  );
}

export default AccountScreen;
