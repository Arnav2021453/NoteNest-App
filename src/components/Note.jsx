import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: props.title,
    content: props.content,
  });

  function handleDelete() {
    props.onDelete(props.id);
  }
  function handleEdit() {
    setEditedNote({
      title: props.title,
      content: props.content,
    });
    setIsEditing(true);
  }
  function handleSave() {
    props.onEdit(props.id, editedNote);
    setIsEditing(false);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setEditedNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div className="note">
      {isEditing ? (
        <div>
          <input
            name="title"
            onChange={handleChange}
            value={editedNote.title}
          />
          <textarea
            name="content"
            onChange={handleChange}
            value={editedNote.content}
          />
        </div>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
      )}
      <button onClick={isEditing ? handleSave : handleEdit}>
        {isEditing ? <SaveIcon /> : <EditIcon />}
      </button>
      {!isEditing && (
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      )}
    </div>
  );
}

export default Note;
