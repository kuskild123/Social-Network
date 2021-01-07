import React, {useState} from 'react';
import p from "../../ProfileCss/profile.module.css";
import MyProfileStatus from "./MyProfileStatus";
import ProfileStatus from "../Posts/ProfileStatus";
import MyContacts from "./MyContacts";
import ProfileContactForm from "./ProfileContactForm";


const ProfileContact = (props) => {
    const [MyOption, setMyOption] = useState(false);
    // const [EditContacts,SetEditContacts] = useState(false)
    let OnMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.SavePhoto(e.target.files[0])
        }
    }
    let activateMyOption = () => {
        setMyOption(true)
    }
    let deActivateMyOption = () => {
        setMyOption(false)
    }
    return <div>
        <div className={p.avatar}>
            <img src={props.ProfileImage(props.Prof)} alt="empty"/>
            <div className={p.fullName}>{props.Prof.fullName}</div>
        </div>
        <div className={p.comment}>
            {
                !MyOption && props.ItsI ?
                    <div style={{margin: "10px"}}><span style={{color: 'darkcyan', cursor: 'pointer'}}
                                                        onClick={activateMyOption}>Edit..</span></div> :
                    props.ItsI &&
                    <span style={{cursor: 'pointer', marginTop: "20px"}} onClick={deActivateMyOption}>&#10006;</span>
            }

            {
                MyOption && props.ItsI && <div className={p.EditAvatar}>
                    <div style={{marginBottom: '4px'}}>Изменить фото профиля</div>
                    <input type={"file"} onChange={OnMainPhotoSelected}/></div>
            }

            <p>{props.Prof.aboutMe}</p>
            <div className={p.info}>{props.Prof.lookingForAJob ? <div className={p.true}>Ищет работу</div> :
                <div className={p.false}>Не ищет работу</div>}</div>
            <p>{props.Prof.lookingForAJobDescription}</p>
            {props.ItsI && !props.EditContacts &&
            <button onClick={() => props.ChangeEditContacts(true)}>Edit contacts</button>}
            {!props.EditContacts ? <MyContacts Prof={props.Prof}/> : props.ItsI ?
                <ProfileContactForm initialValues={props.Prof}
                                    MyProfile={props.Prof}
                                    SaveMyContacts={props.SaveMyContacts}
                                    ChangeEditContacts={props.ChangeEditContacts}/> : <MyContacts Prof={props.Prof}/>}
            <div style={{margin: '8px 5px 5px 5px'}}>
                {props.ItsI ? <MyProfileStatus UpdateStatus={props.UpdateStatus} MyStatus={props.MyStatus}/> :
                    <ProfileStatus status={props.Status}/>
                }
            </div>
        </div>

    </div>
}
export default ProfileContact