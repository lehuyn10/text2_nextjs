import React from "react";
import { useState } from "react";

const Model = () => {
    return   <div className='page_add_note'>
                <h1 className='header_title'>NEW NOTE</h1>
                <div className='content_input'>
                    <input className='content_input-add' placeholder='Input your note...'></input>
                </div>
                <div className='footer'>
                    <button className='footer_btn footer_btn-cancel'>CANCEL</button>
                    <button className='footer_btn footer_btn-apply color-hover'>APPLY</button>
                </div>
            </div>
};




export default Model;

