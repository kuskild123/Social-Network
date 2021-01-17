import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../help/validators/validators";
import {Redirect} from "react-router-dom";
import l from '../LoginCss/login.module.css'

let maxLength20 = maxLengthCreator(20)
let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error && <div className={l.someError}>{props.error}</div>}
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field placeholder={"Password"} type={"password"} name={"password"} validate={[required, maxLength20]}
                       component={Input}/>
            </div>
            <div>

                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>remember me
            </div>
            {props.captcha && <div>
                <img src={props.captcha} alt={'captcha'}/>
                <Field placeholder={"Symbols from image.."} name={"captcha"} component={Input}
                       validate={[required, maxLength20]}/>
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
let Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    const GetFormData = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    return (
        <div>
            <div style={{display: 'flex'}}>
                <h2>Login</h2>
                <p style={{margin:'10px'}}>Не зарегистрированы? Тогда спросите тестовый аккаунт у разработчика</p>
            </div>
            <LoginReduxForm captcha={props.captcha} onSubmit={GetFormData}/>
        </div>

    )
}
export default Login;