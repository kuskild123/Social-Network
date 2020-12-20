import React from 'react';
import Post from "../MyPosts/Posts/post.jsx";
import {Img} from "../Image/image";
import d from '../ProfileCss/profile.module.css'
import AddPostContainer from "../LocalPosts/AddPostContainer";
import AllMyPosts from "../MyPosts/AllMyPosts";

let Profile = (props) => {


    return <>
        <Img></Img>
        <div className={d.flex}>
            { props.IsAuth? <div className={d.mypost}><AllMyPosts {...props}></AllMyPosts></div> : null }
            <div className={d.post}>
                <h2>Posts</h2>
                <Post {...props}></Post>
                <AddPostContainer></AddPostContainer>
            </div>


        </div>
    </>

}

export {Profile};