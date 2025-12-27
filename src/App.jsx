import { useState } from "react";
import Auth from "./components/Auth";
import Chat from "./components/Chat";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? <Chat user={user} /> : <Auth setUser={setUser} />}
    </div>
  );
}

export default App;
