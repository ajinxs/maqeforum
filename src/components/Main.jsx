import React from 'react'
import '../css/Main.css'
import postData from '../data/post.json'
import authorData from '../data/author.json'

const Main = () => {

    return (
        <div id='post'>
            {postData.map(post => (
                <div id="card" key={post.id}>
                    <div id='content'>
                        <img src={post.image_url} alt=""/>

                        <div id="post-content">
                            <h3>{post.title}</h3>    
                            <p>{post.body}</p>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Main;
