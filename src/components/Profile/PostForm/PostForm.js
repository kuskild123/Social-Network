import React from 'react';
import {Field, reduxForm,reset} from "redux-form";
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
let PostWithForm = (props) => {
    let GetFormData = (formdata) => {
        props.SetPostUser(formdata.NewPostInput,reset,'NewPost')
        debugger;
    }

    return (
        <div className={f.form}>
            <PostReduxForm {...props} onSubmit={GetFormData}/>
        </div>
    )
}

export default PostWithForm