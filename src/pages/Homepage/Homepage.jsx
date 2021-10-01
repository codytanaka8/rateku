import React from 'react'
import Header from '../../components/Header/Header'
import Post from '../../components/Post/Post'

function Homepage() {
    return (
        <div className="main-body">
            <Header/>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <div>
                <center><Post/></center>
            </div>
        </div>
    )
}

export default Homepage
