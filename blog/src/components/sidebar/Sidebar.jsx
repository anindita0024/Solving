import React from 'react'
import './sidebar.css';

export default function Sidebar() {
    return (
        <div className ="sidebars">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img  className ="sidebarImg"src="https://images.pexels.com/photos/10259249/pexels-photo-10259249.jpeg?cs=srgb&dl=pexels-nida-10259249.jpg&fm=jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi nostrum quae saepe beatae explicabo laudantium magnam dolor quam deserunt. Cum, eaque? Earum, adipisci ex. </p>
            </div>
            <div className ="sidebarItem">
                <span className="sidebarTitle">Catagories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItems">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-pinterest-p"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
