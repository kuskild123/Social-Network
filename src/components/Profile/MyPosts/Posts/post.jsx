import React, {useState} from 'react';
import p from "../../ProfileCss/profile.module.css";
import ProfileContact from "../MyPosts/ProfileContact";

let PostWithStatus = (props) => {
    const [ItsI] = useState(false)
    if (props.ProfileUsers.length === 0) {
        return null
    }
    return (
        <>
            <h2>Posts</h2>
            <div className={p.allcomment}>
                <ProfileContact Prof={props.ProfileUsers} ItsI={ItsI} {...props}/>
            </div>
        </>
    )
}
export default PostWithStatus;