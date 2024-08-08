import React from "react";

const AddTask = () => {
    return <div className="content_add color-hover">
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
};


export default AddTask;