import React, { useState } from 'react';

function Plan(props) {
  const [editedText, setEditedText] = useState(props.value);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditedText(props.value);
    setIsEditing(false);
  };

  const handleSave = () => {
    props.updateData(props.id, editedText); // Update on backend
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <>
      <li className="shadow p-2 my-2 col-sm-5">
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={handleChange}
            className="form-control"
          />
        ) : (
          props.value
        )}
      </li>
      <button
        className="btn btn-danger my-2 col-sm-2 offset-1"
        onClick={() => props.sendData(props.id)}
      >
        Delete
      </button>
      {isEditing ? (
        <>
          <button
            className="btn btn-primary my-2 col-sm-2 offset-1"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="btn btn-secondary m-0 col-sm-2 offset-1"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          className="btn btn-secondary my-2 col-sm-2 offset-1"
          onClick={handleEdit}
        >
          Edit
        </button>
      )}
    </>
  );
}

export default Plan;
