import React from 'react';
import p from "../../ProfileCss/profile.module.css";
import MyProfileStatus from "./MyProfileStatus";
import Loader from "../../../common/Preloader/Loader";

let MyPost = (props) => {
    if(props.MyProfile.length === 0){
            return <Loader></Loader>
        }
    return (
        <div>

            <div className={p.allcomment}>
                <div className={p.inside}>
                    <div className={p.avatar}>
                        <img src={props.ProfileImage(props.MyProfile)} alt=""/>

                        <div className={p.fullName}>{props.MyProfile.fullName}</div>
                    </div>
                    <div className={p.comment}>
                        <p>{props.MyProfile.aboutMe}</p>
                        <div className={p.info}>{props.MyProfile.lookingForAJob ? <div className={p.true}>Ищет работу</div> :
                            <div className={p.false}>Не ищет работу</div>}</div>
                        <MyProfileStatus UpdateStatus={props.UpdateStatus} MyStatus={props.MyStatus}></MyProfileStatus>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default MyPost;