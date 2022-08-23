import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNewNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name: elementName, value: newValue } = event.target;

    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [elementName]: newValue,
      };
    });
  }
  function handleClick(event) {
    props.onAdd(note);
    setNewNote({
      title: "",
      content: "",
    });

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
