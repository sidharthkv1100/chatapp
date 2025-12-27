import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore";
import RoomSelector from "./RoomSelector";

const Chat = ({ user }) => {
  const [room, setRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!room) return;

    const q = query(
      collection(db, "messages"),
      where("room", "==", room)
    );

    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map((d) => d.data()));
    });

    return () => unsub();
  }, [room]);

  const sendMessage = async () => {
    if (!text) return;

    await addDoc(collection(db, "messages"), {
      text,
      room,
      user: user.displayName,
      createdAt: serverTimestamp()
    });

    setText("");
  };

  if (!room) return <RoomSelector setRoom={setRoom} />;

  return (
    <div>
      <h2>Room: {room}</h2>

      {messages.map((m, i) => (
        <p key={i}><b>{m.user}:</b> {m.text}</p>
      ))}

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
