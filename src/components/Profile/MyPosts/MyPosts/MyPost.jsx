import React from 'react';
import p from "../../ProfileCss/profile.module.css";
import Loader from "../../../common/Preloader/Loader";
import MyPostAboutMe from "./MyPostAboutMe";


let MyPost = (props) => {
    if (props.MyProfile.length === 0) {
        return <Loader/>
    }
    return (
        <div>

            <div className={p.allcomment}>
                    <MyPostAboutMe {...props}/>
            </div>
        </div>
    )
}


export default MyPost;