import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import "./Styles/button.css";
import "./Styles/input.css";

import MainScreen from "./Screens/MainScreen";
import AccountScreen from "./Screens/AccountScreen";

import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdBLSHq0nDFpJ0FkIyZKWDH46bJrTy61Y",
  authDomain: "woofverse-cirlce.firebaseapp.com",
  projectId: "woofverse-cirlce",
  storageBucket: "woofverse-cirlce.appspot.com",
  messagingSenderId: "664061003562",
  appId: "1:664061003562:web:5b6c422df605ee86e6c053",
  measurementId: "G-TYRZ214QW4",
};

const firebaseBackupConfig = {
  apiKey: "AIzaSyAFnVZqiUnQ76tDbGQZ31HeR8TdzzJNW-A",
  authDomain: "woofverse-backup.firebaseapp.com",
  projectId: "woofverse-backup",
  storageBucket: "woofverse-backup.appspot.com",
  messagingSenderId: "558762004854",
  appId: "1:558762004854:web:76ad9230d7c9ff3353aa57",
};

console.log(firebaseConfig);
console.log(firebaseBackupConfig);

initializeApp(firebaseConfig);
// initializeApp(firebaseBackupConfig);

const auth = getAuth();

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <MainScreen
                isLoggedIn={user}
                isLoading={loading}
                firebaseConfig={firebaseConfig}
              />
            }
          />
          <Route
            path="/account"
            element={<AccountScreen firebaseConfig={firebaseConfig} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
