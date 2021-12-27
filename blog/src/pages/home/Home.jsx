import React, {useState,useEffect} from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.css"
import axios from "axios";

export default function Home() {

    const [posts , setPosts] = useState([])

    useEffect(() =>{
        const fatchPost = async () =>{
            const res = await axios.get("/posts")
            console.log(res)
        }
        fatchPost();
    })




    
    return (
        <>
        <Header/>
        <div className="home">
            <Posts />
            <Sidebar/>
        </div>
        </>
    )
}
