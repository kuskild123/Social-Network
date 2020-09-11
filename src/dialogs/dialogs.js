import React from 'react';
import d from './dialogs.module.css';
import {NavLink} from "react-router-dom";
import {Dial,Message,MessageTwo} from './dialogItem'
import {Form} from "./form";
function Dialog (props) {

    let Dialogs = props.DialogData.map(D=> <Dial id={D.id} name={D.name}></Dial>);
    let Message1 = props.MessageData1.map(m=> <Message message1={m.message1}></Message>);
    let Message2 = props.MessageData2.map(m=> <MessageTwo message2={m.message2}></MessageTwo>);


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
                    <Form NewDialogValue={props.NewDialogValue} dispatch={props.dispatch}></Form>
                </div>
            </div>


        </div>

    )
}
export {Dialog};