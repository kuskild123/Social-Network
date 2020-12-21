import React from 'react';
import d from '../DialogsCss/dialogs.module.css';
import {Dial, Message, MessageTwo} from '../DialogsItems/dialogItem'
import DialogsForm from "../DialogsForm/DialogsForm";

function Dialog (props) {

    let Dialogs = props.DialogData.map(D=> <Dial id={D.id} key={D.id} name={D.name}></Dial>);
    let Message1 = props.MessageData1.map(m=> <Message id={m.id} key={m.id} message1={m.message1}></Message>);
    let Message2 = props.MessageData2.map(m=> <MessageTwo id={m.id} key={m.id} message2={m.message2}></MessageTwo>);
    return(

        <div className={d.dialogs}>
            <div className={d.dial}>
                {Dialogs}

            </div>
            <div className={d.line}></div>
            <div className={d.mess}>

                <div className={d.mess1}>
                    {Message1}
                </div>
                <div className={d.mess2}>
                    {Message2}
                </div>
                <div className={d.form}>
                    <DialogsForm {...props}></DialogsForm>
                </div>
            </div>


        </div>

    )
}
export {Dialog};