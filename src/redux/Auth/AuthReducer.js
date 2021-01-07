import {CaptchaApi, getData, loginA, loginDelA} from "../../components/DAL/api";
import {stopSubmit} from 'redux-form'

const SetUserData = 'AuthReducer/SET-USER-DATA';
const GetCaptchaUrlSuccess = 'AuthReducer/GetCaptchaUrlSuccess'
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha:null
}

let AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SetUserData:
            return {
                ...state,
                ...action.user
            }
        case GetCaptchaUrlSuccess:
            return{
                ...state,
                captcha: action.captcha
            }
        default:
            return state;
    }
}

const SetUser = (id, email, login, isAuth) => {
    return {
        type: SetUserData, user: {id, email, login, isAuth}
    }
}
const GetCaptchaURL = (captcha) => {
    return {
        type:GetCaptchaUrlSuccess,captcha
    }
}
const GetUser = () => async (dispatch) => {
    const response = await getData()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(SetUser(id, email, login, true))
    }
}

const LoginT = (email, password, rememberMe,captcha) => async (dispatch) => {

    let response = await loginA(email, password, rememberMe,captcha)
    if (response.data.resultCode === 0) {
        dispatch(GetUser())
    } else {
        if(response.data.resultCode === 10){
            dispatch(Captcha())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit("login", {_error: message}));
    }
}
const LogoutT = () => {
    return async (dispatch) => {
        let response = await loginDelA()
        if (response.data.resultCode === 0) {
            dispatch(SetUser(null, null, null, false))
        }

    }
}
export const Captcha = () => {
    return async (dispatch) => {
        const response = await CaptchaApi.getCaptchaURL();
        const CaptchaURL  = response.data.url;
        dispatch(GetCaptchaURL(CaptchaURL))
    }
}


export {AuthReducer, SetUser, GetUser, LoginT, LogoutT}