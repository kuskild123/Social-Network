import React, {useEffect, useState} from 'react';
import p from '../../ProfileCss/profile.module.css';


let MyProfileStatus = (props) => {
    //HOOKS

    const [editMode,setEditMode] = useState(false)
    const [status,setStatus] = useState(props.MyStatus)
    useEffect( () => {
        setStatus(props.MyStatus)
    },[props.MyStatus] )
    //END HOOKS

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.UpdateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus( e.currentTarget.value )
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span
                        onDoubleClick={ activateEditMode } className={p.MyStatus} >{props.MyStatus? props.MyStatus:'edit status..'}</span>
                </div>
            }
            {editMode &&
            <div>
                <input onChange={ onStatusChange }  autoFocus={true} onBlur={ deactivateEditMode }
                                                          value={ status }/>
                <button style={{margin:'8px'}} onClick={ deactivateEditMode }>Опубликовать</button>
            </div>
            }
        </div>
    )

}


export default MyProfileStatus;