import React from 'react';
import {Input, TextArea} from "../../../common/FormControls/FormControls";
import l from "../../../login/LoginCss/login.module.css";
import {Field, reduxForm} from "redux-form";

const ProfileContactFormContainer = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <button>Save</button>
        {props.error && <div className={l.someError}>{props.error}</div>}
        <FieldsHelp param={'Full name :'} component={Input} name={'fullName'} placeholder={'your name..'}/>
        <FieldsHelp param={'Looking for a Job :'} type={'checkbox'} component={Input} name={'lookingForAJob'}/>
        <FieldsHelp param={'Job Description :'} component={TextArea} name={'lookingForAJobDescription'}
                    placeholder={"job description.."}/>
        <FieldsHelp param={'About me :'} component={TextArea} name={'aboutMe'} placeholder={"about me.."}/>
        {Object.keys(props.MyProfile.contacts).map(key => {
            return <div key={key} style={{margin: '10px'}}><FieldsHelp param={key} placeholder={`${key}..`}
                                                                       component={Input} name={`contacts.${key}`}/>
            </div>
        })}
    </form>
}
const ProfileContactReduxFormContainer = reduxForm({form: 'Contacts'})(ProfileContactFormContainer)
const ProfileContactForm = (props) => {
    const getFormData = (formData) => {
        props.SaveMyContacts(formData);
    }
    return <div>
        <span style={{cursor: "pointer"}} onClick={() => props.ChangeEditContacts(false)}>&#10006;</span>
        <ProfileContactReduxFormContainer MyProfile={props.MyProfile} initialValues={props.initialValues}
                                          onSubmit={getFormData}/>
    </div>
}
const FieldsHelp = (props) => {
    return <div><b>{props.param}</b>
        <Field component={props.component} name={props.name} placeholder={props.placeholder} type={props.type}/>
    </div>
}
export default ProfileContactForm;
