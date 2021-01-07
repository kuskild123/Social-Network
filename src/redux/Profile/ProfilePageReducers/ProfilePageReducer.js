import {
    getMyProfileA,
    getMyStatusA,
    getProfileAPI,
    getStatusA,
    saveMyContactsA,
    savePhoto,
    updateStatusA
} from "../../../components/DAL/api";
import {stopSubmit} from "redux-form";

const SetProfileUsers = 'SET-PROFILE-USERS'
const SetMyProfile = 'SET-MY-PROFILE'
const SetProfileStatus = 'SET-PROFILE-STATUS'
const SetMyProfileStatus = 'SET-MY-PROFILE-STATUS'
const SetMyProfilePhoto = 'SET-MY-PROFILE-PHOTO'
const SetEditContacts = 'SET-EDIT-CONTACTS'
const initialState = {
    ProfileUsers: [],
    MyUser: [],
    Status: "",
    MyStatus: "",
    EditContacts: false
}

const ProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SetProfileUsers:
            return {
                ...state,
                ProfileUsers: action.user
            }
        case SetProfileStatus:
            return {
                ...state,
                Status: action.status
            }
        case SetMyProfileStatus:
            return {
                ...state,
                MyStatus: action.myStatus
            }
        case SetMyProfile:
            return {
                ...state,
                MyUser: action.myProfile
            }
        case SetMyProfilePhoto:
            return {
                ...state,
                MyUser: {...state.MyUser, photos: action.NewPhoto}
            }
        case SetEditContacts:
            return {
                ...state,
                EditContacts: action.selectContacts
            }
        default:
            return state;
    }
}

const SetProfile = (user) => {
    return {
        type: 'SET-PROFILE-USERS', user
    }
}
const SetStatus = (status) => {
    return {
        type: 'SET-PROFILE-STATUS', status
    }
}
const SetProfileMe = (myProfile) => {
    return {
        type: SetMyProfile, myProfile
    }
}
const SetProfilePhoto = (NewPhoto) => {
    return {
        type: SetMyProfilePhoto, NewPhoto
    }
}
const ChangeEditContacts = (selectContacts) => {
    return {
        type:SetEditContacts,selectContacts
    }
}
const GetProfile = (userId) => async (dispatch) => {
    let response = await getProfileAPI(userId)
    dispatch(SetProfile(response.data))
}
const GetStatus = (userId) => async (dispatch) => {
    let response = await getStatusA(userId)
    dispatch(SetStatus(response.data))
}
const UpdateStatus = (status) => async (dispatch) => {
    try{
    let response = await updateStatusA(status)
    if (response.data.resultCode === 0) {
        dispatch(SetMyStatus(status))
    }} catch (error){
        debugger;
    }
}
const GetMyProfile = (id) => async (dispatch) => {
    let response = await getMyProfileA(id)
    dispatch(SetProfileMe(response.data))
}
const SetMyStatus = (myStatus) => {
    return {
        type: SetMyProfileStatus, myStatus
    }
}
const GetMyStatus = (myStatus) => async (dispatch) => {
    let response = await getMyStatusA(myStatus)
    dispatch(SetMyStatus(response.data))
}
const SavePhoto = (file) => async (dispatch) => {
    let response = await savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(SetProfilePhoto(response.data.data.photos))
    }
}
const SaveMyContacts = (contacts) => async (dispatch,getState) => {
    let id = getState().auth.id
    let response = await saveMyContactsA(contacts);
    if (response.data.resultCode === 0 ){
        dispatch(GetMyProfile(id))
        dispatch(ChangeEditContacts(false))
    } else {
        let message = response.data.messages? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit("Contacts", {_error: message}))
    }
}
export {
    ProfilePageReducer, SetProfile, GetProfile, SetStatus, GetStatus, UpdateStatus,
    GetMyProfile, GetMyStatus, SetMyStatus, SavePhoto, SaveMyContacts,ChangeEditContacts
}
