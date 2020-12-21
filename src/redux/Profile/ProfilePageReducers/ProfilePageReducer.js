import {getProfileAPI,getStatusA,updateStatusA,getMyProfileA,getMyStatusA} from "../../../components/DAL/api";

const SetProfileUsers = 'SET-PROFILE-USERS'
const SetMyProfile = 'SET-MY-PROFILE'
const SetProfileStatus = 'SET-PROFILE-STATUS'
const SetMyProfileStatus = 'SET-MY-PROFILE-STATUS'
const initialState = {
    ProfileUsers: [],
    MyUser:[],
    Status:"",
    MyStatus:""
}

const ProfilePageReducer = (state = initialState,action) => {
    switch(action.type){
        case SetProfileUsers:
            return{
                ...state,
                ProfileUsers: action.user
            }
            case SetProfileStatus:
                return {
                    ...state,
                    Status:action.status
                }
                case SetMyProfileStatus:
                    return {
                        ...state,
                        MyStatus: action.myStatus
                    }
                case SetMyProfile:
                    return{
                        ...state,
                        MyUser:action.myProfile
                    }
        default:
            return state;
    }
}

const SetProfile = (user) => {
    return{
        type:'SET-PROFILE-USERS',user
    }
}
const SetStatus = (status) => {
    return {
        type:'SET-PROFILE-STATUS',status
    }
}
const SetProfileMe = (myProfile) => {
    return {
        type:SetMyProfile, myProfile
    }
}

const GetProfile = (userId) => async (dispatch) => {
       let response = await getProfileAPI(userId)
           dispatch(SetProfile(response.data))


}
const GetStatus = (userId) => async(dispatch) => {
        let response = await getStatusA(userId)
            dispatch(SetStatus(response.data))
}
const UpdateStatus = (status) => async(dispatch) => {
        let response = await updateStatusA(status)
            if(response.data.resultCode === 0)  {
                dispatch(SetMyStatus(status))
            }
}
const GetMyProfile = (id) => async(dispatch) =>{
        let response = await getMyProfileA(id)
            dispatch(SetProfileMe(response.data))
}
const SetMyStatus = (myStatus) => {
    return {
        type: SetMyProfileStatus, myStatus
    }
}
const GetMyStatus = (myStatus) => async(dispatch) => {
        let response = await getMyStatusA(myStatus)
            dispatch(SetMyStatus(response.data))
}
export{ProfilePageReducer,SetProfile,GetProfile,SetStatus,GetStatus,UpdateStatus,GetMyProfile,GetMyStatus,SetMyStatus}
