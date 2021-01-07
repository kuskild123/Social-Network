import React from 'react';
import MyPost from "./MyPosts/MyPost";

const AllMyPosts = (props) => {
    return <div>
        <h2>My posts</h2>
        <MyPost {...props}/>

    </div>
}

export default AllMyPosts