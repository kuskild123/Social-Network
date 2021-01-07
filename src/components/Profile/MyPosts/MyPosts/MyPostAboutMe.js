import React, {useState} from 'react';
import ProfileContact from "./ProfileContact";


const MyPostAboutMe = (props) => {
    const [ItsI] = useState(true)

    return <div>
        <ProfileContact EditContacts={props.EditContacts} ChangeEditContacts={props.ChangeEditContacts}
                        Prof={props.MyProfile} ItsI={ItsI} {...props}/>
    </div>
}


export default MyPostAboutMe