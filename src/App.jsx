import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./App.css";
import app from "./firebase/firebase.config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function App() {
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Twitter + React</h1>
      <div className="card">
        <button onClick={handleGoogle}>Google sign in</button>
      </div>
    </>
  );
}

export default App;
