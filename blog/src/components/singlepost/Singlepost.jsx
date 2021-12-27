import React from 'react'
import './singlepost.css'

export default function Singlepost() {
    return (
        <div className='singlepost'>
            <div className="singlepostWarraper">
                <img className="singlepostImg" 
                src ="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""/>
                <h1 className="singlepostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlepostEdit">
                         <i className=" singlepostIcon far fa-edit"></i>
                         <i className=" singlepostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlepostInfo">
                    <span className="singlepostAuthor">Author: <b>James</b></span>
                    <span className="singlepostDate">1 hour ago</span>
                </div>
                <p className='singlepostDecribe'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto earum quo tempore eaque molestias aperiam ad officiis quas. Sapiente tempora possimus ipsum eaque ab aut molestiae dolor voluptates alias illo rerum accusantium repellat quaerat, asperiores nemo sed sequi nobis natus quam, ad laudantium non? Voluptatum id et labore quam ab?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fuga nostrum, eligendi distinctio nulla fugiat iste hic tempore dolore quaerat ipsum officia! Quia excepturi accusamus dignissimos dolore corrupti tempore blanditiis, odio ipsam vitae facilis possimus, reiciendis dolorem magnam repellat natus et harum! Dolorum sed sapiente totam exercitationem, accusamus dicta facere labore natus! Eaque eum modi qui sapiente dolorum natus quas.</p>
            </div>
            
        </div>
    )
}
