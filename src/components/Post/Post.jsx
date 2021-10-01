import React from 'react'
import profile from '../../assets/profile1.png';
import sample from '../../assets/story1.jpg';
import './Post.css'


function Post() {
    return (
        <div className="each-post">
            <div className="post-head">
                <div><img src={profile}/></div>
                <div className="post-user-info">Evan C.G
                <br></br>Software engineer at tokped
                </div>
            </div>
            <div className="post-content">
                <div></div>
                <img src={sample}/>
            </div>
        </div>
    )
}

export default Post
