function RoomSelector({ setRoom }) {
  return (
    <div>
      <h2>Enter Room</h2>
      <input
        placeholder="Room name"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setRoom(e.target.value);
          }
        }}
      />
    </div>
  );
}

export default RoomSelector;
