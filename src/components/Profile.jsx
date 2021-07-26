import React from 'react'
import authorData from '../data/author.json'
import postData from '../data/post.json'

const Profile = () => {
    return (
        <div>
            <div id='profile'>
            {authorData.map(author => (
                
                <div id="profile-card" key={author.id}>
                    <div id='profile-content'>
                        <img src={author.avatar_url} alt=""/>

                        <div id="profile-post-content">
                            <p>{author.name}</p>    
                            <span>{postData.created_at}</span>
                        </div>

                    </div>
                </div>
            ))}
        </div>
            
        </div>
    )
}

export default Profile;
