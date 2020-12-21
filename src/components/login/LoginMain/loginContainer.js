import React from 'react';
import Login from "./login";
import {compose} from "redux";
import {connect} from "react-redux";
import {LoginT} from "../../../redux/Auth/AuthReducer";


class loginSettings extends React.Component {

    render () {
        return(
            <div>
                <Login {...this.props}></Login>
            </div>
        )
    }
}
let MapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        login:(email,password,rememberMe)=>{dispatch(LoginT(email,password,rememberMe))}

    }
}

let LogContainer = compose(
    connect(MapStateToProps,MapDispatchToProps)
)(loginSettings)

export default LogContainer