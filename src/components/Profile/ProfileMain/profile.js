import React from 'react';
import {Img} from "../Image/image";
import d from '../ProfileCss/profile.module.css'
import LocalPostContainer from "../LocalPosts/AddPostContainer";
import AllMyPosts from "../MyPosts/AllMyPosts";
import PostWithStatus from "../MyPosts/Posts/post";

let Profile = (props) => {


    return <div>
        <Img/>
        <div className={d.flex}>
            <div className={d.AllPosts}>
                { props.IsAuth && <LocalPostContainer/>}
            </div>
            { props.IsAuth && <div className={d.AllPosts}><AllMyPosts {...props}/></div> }
            <div className={d.AllPosts}>
                <PostWithStatus {...props}/>
            </div>


        </div>
    </div>

}

export {Profile};