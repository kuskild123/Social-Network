import React from 'react'
import {Field, reduxForm} from "redux-form";
import m from "../DialogsCss/dialogs.module.css"
import {maxLengthCreator, required} from "../../help/validators/validators";
import Element from "../../common/FormControls/FormControls";

const Input = Element("input")
const MaxLength50 = maxLengthCreator(50)

let DialogsFormInside = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}  name={"AddMessage"}
                       className={m.AddMessage} placeholder={"Напишите сообщение..."}
                       validate={[required,MaxLength50]}
                />
            </div>
            <div>
                <button className={m.FormButton}>Отправить</button>
            </div>
        </form>
    )
}

let DialogsReduxForm = reduxForm({
    form : "Dialogs"
})(DialogsFormInside)

let DialogsForm = (props) => {
    let GetFormData = (formdata) => {
        props.AddDialog(formdata.AddMessage)
    }
    return (
        <div>
            <DialogsReduxForm {...props} onSubmit={GetFormData}></DialogsReduxForm>
        </div>
    )
}

export default DialogsForm