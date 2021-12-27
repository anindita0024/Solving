import React from 'react'
import { Link } from 'react-router-dom';
import './register.css';

export default function Login() {
    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form className="registerFrom">
                <label>Username</label>
                <input type="text" className='registerInput' placeholder='Enter your name..' />
                <label>Passwoard</label>
                <label>Email</label>
                <input type="text" className='registerInput' placeholder='Enter your email..' />
                <label>Passwoard</label>
                <input type="passwoard" className ='registerInput'placeholder='Enter your passwoard..' />
                <button className="registerBtn">Register</button>
            </form>
            <button className="registerLog">
                <Link to="/login" style={{textDecoration:"none",color:"inherit"}}>Login</Link>
            </button>
        </div>
    )
}

