import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <div className="main">
        <div className='header'>
          <h1 className='header_title'>TODO LIST</h1>
          <div className='header_search-bar'>
            <div className='header_search-bar-box'>
              <input className='header_search-bar-input' placeholder='Search note...'></input>
              <i className="fa-solid fa-magnifying-glass header_icon-search"></i>
            </div>
             <div className='header_select color-hover'>
              All
              <div className=' header_select-icon'>

              <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className='header_select-list'>
                <p className='header_select-list-items'>All</p>
                <p className='header_select-list-items'>Complete</p>
                <p className='header_select-list-items'>Incomplete</p>
              </div>
              </div>
              <button className='header_btn-mode color-hover'>
                <i className="fa-regular fa-moon"></i>
              </button>
          </div>
        </div>

        {/* BODY */}
        <ul className='content_list'>
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
          <div className="content_add color-hover">
            <i className="fa-solid fa-plus"></i>
              <div className='page_add_note'>
                  <h1 className='header_title'>NEW NOTE</h1>
                  <div className='content_input'>
                  <input className='content_input-add' placeholder='Input your note...'></input>
                  </div>
                  <div className='footer'>
                    <button className='footer_btn footer_btn-cancel'>CANCEL</button>
                    <button className='footer_btn footer_btn-apply color-hover'>APPLY</button>
                  </div>
              </div>
          </div>
    </div>
  );
}
