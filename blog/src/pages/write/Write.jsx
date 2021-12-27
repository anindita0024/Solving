import React from 'react'
import './write.css'
export default function Write() {
    return (
        <div className='write'>
            <img  className="writeImg" src="https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            <form className='writeFrom'>
                <div className="writeGroup">
                    <label htmlFor="fileInput">
                    <i className=" writeIcon fas fa-plus"></i>
                    </label>
                    <input type='file' id ="fileInput" style ={{display:"none"}}/>
                    <input type='text' placeholder='Title' className="writeInput" autoFocus={true}/>
                </div>

                <div className="writeGroup">
                    <textarea placeholder="Tell your thoughts.." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeBtn">Post</button>
            </form>
        </div>
    )
}
