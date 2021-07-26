import React from 'react'
import '../css/Main.css'
import postData from '../data/post.json'


const Main = () => {

    return (
        <div id='post'>
            {postData.map(post => (
                <div id="card" key={post.id}>
                    <img src={post.image_url} alt=""/>
             
                    <h3 id="post-content">{post.title}</h3>    
                    <p id="post-content">{post.body}</p>  
                </div>
            ))}
        </div>
    )
}

export default Main;
