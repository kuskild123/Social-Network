import React from "react";
import {AddDialogMessageCreate, NewDialogMessageCreate} from "../redux/DialogPageReducer";
import f from './form.module.css';
function Form(props) {
    let messageRef = React.createRef();
    let NewDialog = () => {
        let message = messageRef.current.value;
        let action = NewDialogMessageCreate(message);
        props.dispatch(action)
    };
    let AddDialog = () => {
        let action = AddDialogMessageCreate();
        props.dispatch( action )
    }
    return (
        <div>
            <div>
                <textarea className={f.textarea} onChange={ NewDialog } ref={ messageRef } value={ props.NewDialogValue } placeholder='Напишите сообщение...' cols="30" rows="2"></textarea>
            </div>
            <div>
                <button className={f.btn} onClick={ AddDialog }>Отправить</button>
            </div>
        </div>
    )


}
export {Form};