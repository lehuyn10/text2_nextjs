import React from "react";

const TodoList = () => {
    return <ul className='content_list'>
    <li className='content_list_note'>
      <div className='content_note'>
        <input className='content_note-checkbox' type= "checkbox"></input>   
        <span className='content_note-text'>
        NOTE #1 
        </span>
      </div>
      <div className='content_handle'>
      <p className='content_handle-icon content_handle-icon--edit'><i className="fa-solid fa-pen-to-square"></i></p>
      <p className='content_handle-icon content_handle-icon--delete'><i className="fa-solid fa-trash"></i></p>
      </div>
    </li>
    <li className='content_list_note'>
      <div className='content_note'>
        <input className='content_note-checkbox' type= "checkbox"></input>   
        <span className='content_note-text content_note-text--delete'>
        NOTE #2 
        </span>
      </div>
      <div className='content_handle'>
        <p className='content_handle-icon content_handle-icon--edit'><i className="fa-solid fa-pen-to-square"></i></p>
        <p className='content_handle-icon content_handle-icon--delete'><i className="fa-solid fa-trash"></i></p>
      </div>
    </li>
    <li className='content_list_note'>
      <div className='content_note'>
        <input className='content_note-checkbox' type= "checkbox"></input>   
        <span className='content_note-text'>
        NOTE #3 
        </span>
      </div>
      <div className='content_handle'>
      <p className='content_handle-icon content_handle-icon--edit'><i className="fa-solid fa-pen-to-square"></i></p>
      <p className='content_handle-icon content_handle-icon--delete'><i className="fa-solid fa-trash"></i></p>
      </div>
    </li>
  </ul>
};


export default TodoList;