import React from 'react';
import p from "../../ProfileCss/profile.module.css";
import ProfileStatus from './ProfileStatus.jsx'
import Loader from "../../../common/Preloader/Loader";
let Post = (props) => {

    if(props.ProfileUsers.length === 0){
        return <Loader></Loader>
    }
    return (
        <div className={p.allcomment}>
            <div className={p.avatar}>
                <img src={props.ProfileImage(props.ProfileUsers)} alt=""/>
            
                <div className={p.fullName}>{props.ProfileUsers.fullName}</div>
            </div>
            <div className={p.comment}>
                <p>{props.ProfileUsers.aboutMe}</p>
                <div>{ props.ProfileUsers.lookingForAJob ? <div className={p.true}>Ищет работу</div> : <div className={p.false}>Не ищет работу</div> }</div>
                <ProfileStatus status={props.Status}></ProfileStatus>
            </div>
        </div>

    )
}
export default Post;