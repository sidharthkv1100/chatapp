import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Auth = ({ setUser }) => {
  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  return (
    <div className="center">
      <h2>Login to Chat</h2>
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  );
};

export default Auth;
