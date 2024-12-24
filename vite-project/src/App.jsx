import './App.css'
import { useState } from 'react';

function App() {
  const [noteInput, setnoteInput] = useState("");
  const [notes, setNotes] = useState([]);

  const AddNote = () => {
    if (noteInput.trim() === "") return;
    setNotes((prevNotes) => [...prevNotes, noteInput]);
    setnoteInput("");
  };

  const SaveInputs = (e) => {
    const newValue = e.target.value;
    setnoteInput(newValue);
  };

  return (
    <>
      <div>
        <h1>Note Generator</h1>
        <div id="main">
          <div id="edit">
            <input
              value={noteInput}
              onChange={(e) => SaveInputs(e)}
              placeholder="Wpisz swoją notatkę..."
            />
            <button onClick={AddNote}>Add Note</button>
          </div>
          <div id="note-container">
            {notes.map((note, index) => (
              <div key={index} id="note">
                {note}{index}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;