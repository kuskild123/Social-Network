import React from 'react';
import {Field, reduxForm} from "redux-form";
import Element from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../help/validators/validators";
import {Redirect} from "react-router-dom";
import l from '../LoginCss/login.module.css'
let Input = Element('input')
let maxLength20 = maxLengthCreator(20)
let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={l.someError}>{props.error}</div>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required,maxLength20]}/>
            </div>
            <div>
                <Field placeholder={"Password"} type={"password"} name={"password"} validate={[required,maxLength20]} component={Input}/>
            </div>
            <div>

                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>remember me
                </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form:'login'})(LoginForm)
let Login = (props) => {
    if(props.isAuth) {
        return <Redirect to={'/profile'}></Redirect>
    }
    const GetFormData = (formData) => {
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={GetFormData}></LoginReduxForm>
        </div>

    )
}
export default Login;