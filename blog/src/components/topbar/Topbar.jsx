import React from 'react'
import { Link } from 'react-router-dom';
import './topbar.css';

export default function Topbar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-pinterest-p"></i>
            <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCentre">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to='/' style={{textDecoration:"none",color:"inherit"}}>HOME</Link>
                    </li>

                    <li className="topListItem">
                        <Link to='/about' style={{textDecoration:"none",color:"inherit"}}>ABOUT</Link>
                    </li>

                    <li className="topListItem">
                        <Link to='/conatct' style={{textDecoration:"none",color:"inherit"}}>CONTACT</Link>
                    </li>

                    <li className="topListItem">
                    <Link to='/write' style={{textDecoration:"none",color:"inherit"}}>WRITE</Link>
                    </li>

                    <li className="topListItem">
                        {user && 'LOGOUT'}
                    </li>
                </ul>
            </div>
            <div className="topRight">

                { user ? (
                    <img className ="topImg"src ="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?cs=srgb&dl=pexels-david-bartus-610294.jpg&fm=jpg"  alt=""/>
                ):(
                    <ul className='topList'>
                        <li className='topListItem'>
                        <Link to='/login' style={{textDecoration:"none",color:"inherit"}}>Login</Link>
                        </li>

                        <li className='topListItem'>
                        <Link to='/register' style={{textDecoration:"none",color:"inherit"}}>Register</Link>
                        </li>
                
                    </ul>
                )
            }
                
                <i className=" topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
