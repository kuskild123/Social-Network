import React from 'react';
import {Field, reduxForm} from "redux-form";
import f from '../ProfileCss/PostForm.module.css'
import {required,maxLengthCreator} from "../../help/validators/validators";
import Element from "../../common/FormControls/FormControls";
const maxLength20 = maxLengthCreator(20)
const TextArea = Element("textarea")
let PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={f.add} component={TextArea} name={"NewPostInput"} placeholder={"Добавить пост...."}
                validate={[required,maxLength20]}
                />
            </div>
            <div>
                <button>Добавить</button>
            </div>
        </form>
    )
}

let PostReduxForm = reduxForm({form:'NewPost'})(PostForm)
let NewPost = (props) => {
    let GetFormData = (formdata) => {
        props.SetPostUser(formdata.NewPostInput)
    }

    return (
        <div className={f.form}>
            <PostReduxForm onSubmit={GetFormData}></PostReduxForm>
        </div>
    )
}

export default NewPost