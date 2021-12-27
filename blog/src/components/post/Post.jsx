import React from 'react'
import "./post.css"

export const Post = () => {
    return (
        <div className ="post">
            <img  className ="postImg"src ="https://images.pexels.com/photos/10136037/pexels-photo-10136037.jpeg?cs=srgb&dl=pexels-anna-pechuro-10136037.jpg&fm=jpg" alt =""/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>

            </div>

            <p className="postDescribtion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure delectus ullam officia optio nulla ducimus quaerat quas, quibusdam sequi assumenda porro esse ipsum debitis, iusto, libero tempora voluptas nobis adipisci. Laudantium fugiat qui, sequi vero amet explicabo velit placeat quasi fuga doloribus iste nam maxime. Dolores exercitationem impedit ab quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure delectus ullam officia optio nulla ducimus quaerat quas, quibusdam sequi assumenda porro esse ipsum debitis, iusto, libero tempora voluptas nobis adipisci. Laudantium fugiat qui, sequi vero amet explicabo velit placeat quasi fuga doloribus iste nam maxime. Dolores exercitationem impedit ab quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure delectus ullam officia optio nulla ducimus quaerat quas, quibusdam sequi assumenda porro esse ipsum debitis, iusto, libero tempora voluptas nobis adipisci. Laudantium fugiat qui, sequi vero amet explicabo velit placeat quasi fuga doloribus iste nam maxime. Dolores exercitationem impedit ab quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure delectus ullam officia optio nulla ducimus quaerat quas, quibusdam sequi assumenda porro esse ipsum debitis, iusto, libero tempora voluptas nobis adipisci. Laudantium fugiat qui, sequi vero amet explicabo velit placeat quasi fuga doloribus iste nam maxime. Dolores exercitationem impedit ab quam.</p>
        </div>
    )
}
