import React from 'react'
import './sitting.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Sitting() {
    return (
        <div className='sitting'>
            <div className="sittingWarraper">
                <div className="sittingTitle">
                    <span className="sittingUpdate">Update your account</span>
                    <span className="sittingDelete">Delete account</span>
                </div>

                <form className="sittingForm">
                    
                    <label>Profile picture</label>
                    <div className="sittingProfile">
                        <img src="https://images.pexels.com/photos/1086584/pexels-photo-1086584.jpeg?cs=srgb&dl=pexels-irina-iriser-1086584.jpg&fm=jpg" alt="" />
                        <label htmlFor="fileInput">
                        <i className="sittingIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id ='fileInput' style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='James'/>
                    <label>Email</label>
                    <input type="email" placeholder='James@gmail.com'/>
                    <label>Passwoard</label>
                    <input type="password"/>
                    <button className="sittingBtn">Update</button>
                </form>
            </div>
            <Sidebar/>
            
        </div>
    )
}
