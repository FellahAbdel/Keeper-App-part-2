import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";

function App() {
  const [notes, setNewNotes] = useState([]);

  function addNewNote(newNote) {
    setNewNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  function deleteItem(id) {
    setNewNotes((prevNotes) => {
      prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNewNote} />
      {notes &&
        notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteItem}
            />
          );
        })}
      <Footer />
    </div>
  );
}

export default App;
