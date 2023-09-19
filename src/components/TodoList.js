import React, { useState } from 'react';

import "font-awesome/css/font-awesome.min.css";


function Todolist(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.item.text);

  const handleEditInputChange = (e) => {
    setEditText(e.target.value);
  }

  const handleEditSave = () => {
    props.editItem(props.index, editText);
    setIsEditing(false);
  }

  const handleEditKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEditSave();
    }
  }

  

  return (
    <li className={`list-item ${props.item.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={editText}
          onChange={handleEditInputChange}
          onBlur={handleEditSave}
          onKeyDown={handleEditKeyDown} 
          autoFocus
        />
      ) : (
        <>
          <input
          className='checkbox'
            type="checkbox"
            checked={props.item.completed}
            onChange={() => props.toggleCompletion(props.index)}
          />
          <span className="todo-text">{props.item.text}</span>
          <span className='icons'>
            <i className="fa fa-pencil icon-edit" onClick={() => setIsEditing(true)} />
            <i className="fa fa-trash icon-delete" onClick={() => props.deleteItem(props.index)} />



          </span>
        </>
      )}
    </li>
  )
}

export default Todolist;
