import React from 'react';
import Login from "./login";
import {compose} from "redux";
import {connect} from "react-redux";
import {LoginT} from "../../../redux/Auth/AuthReducer";


class loginSettings extends React.Component {

    render () {
        return(
            <div>
                <Login {...this.props}/>
            </div>
        )
    }
}
let MapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth,
        captcha : state.auth.captcha
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        login:(email,password,rememberMe,captcha = null)=>{dispatch(LoginT(email,password,rememberMe,captcha))},

    }
}

let LogContainer = compose(
    connect(MapStateToProps,MapDispatchToProps)
)(loginSettings)

export default LogContainer