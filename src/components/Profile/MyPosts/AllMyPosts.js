import React from 'react';
import NewPost from "../PostForm/PostForm";
import MyPost from "./MyPosts/MyPost";

const AllMyPosts = (props) => {
    return <div>
        <h2>My posts</h2>
        <NewPost SetPostUser={props.SetPostUser}></NewPost>
        <MyPost {...props}></MyPost>


    </div>
}

export default AllMyPosts