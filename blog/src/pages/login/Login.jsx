import React from 'react'
import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className="loginFrom">
                <label>Email</label>
                <input type="text" className='loginInput' placeholder='Enter your email..' />
                <label>Passwoard</label>
                <input type="passwoard" className ='loginInput'placeholder='Enter your passwoard..' />
                <button className="loginBtn">Login</button>
            </form>
            <button className="loginReg">
                <Link style={{textDecoration:"none",color:"inherit"}} to="/register">Register</Link>
            </button>
        </div>
    )
}
