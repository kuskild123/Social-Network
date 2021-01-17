import React from 'react';
import * as axios from "axios";

const instanse = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY' : '29446d5c-516e-49e2-a5cb-353fd84f261a'
    }

}) 
const UsersAPI = {
    getUsers(CurrentValue = 1,PageSize = 5,term){
        return instanse.get(`users?page=${CurrentValue}&count=${PageSize}&term=${term}`).then(response => response.data)
    },
    Follow(id) {
        return instanse.post(`follow/${id}`).then(response => response.data)
    },
    UnFollow(id) {
        return instanse.delete(`follow/${id}`).then(response => response.data
        )
    }
}

const authAPI = {
    getData(){
        return instanse.get(`auth/me`)
    },
    login(email,password,rememberMe = false,captcha = null){
        return instanse.post(`auth/login`,{email,password,rememberMe,captcha})
    },
    loginDelete(){
        return instanse.delete(`auth/login`)
    }
}

const ProfileAPI = {
    getProfile(userId){
        return instanse.get(`profile/${userId}`)
    },
    getStatusA(userId){
        return instanse.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instanse.put(`profile/status`,{'status':status})
    },
    getMyProfile(id){
        return instanse.get(`profile/${id}`)
    },
    getMyStatus(myStatus){
        return instanse.get(`profile/status/${myStatus}`)
    },
    updateMyPhoto(NewPhoto){
        let formData = new FormData();
        formData.append("image",NewPhoto)
        return instanse.put(`profile/photo`,formData,{headers:{
                    'Content-Type':'multipart/form-data'
            }})
    },
    saveMyContacts(contacts) {
        return instanse.put(`profile`,contacts)
    }
}
export const CaptchaApi = {
    getCaptchaURL(){
        return instanse.get(`security/get-captcha-url`)
    }
}

const getUsers = (CurrentValue,PageSize,term) => UsersAPI.getUsers(CurrentValue,PageSize,term)
const getFollow = (id) => UsersAPI.Follow(id)
const getUnFollow = (id) => UsersAPI.UnFollow(id)
const getData = () => authAPI.getData()
const getProfileAPI = (userId) => ProfileAPI.getProfile(userId)
const getStatusA = (userId) => ProfileAPI.getStatusA(userId)
const updateStatusA = (status) => ProfileAPI.updateStatus(status)
const getMyProfileA = (id) => ProfileAPI.getMyProfile(id)
const getMyStatusA = (myStatus) => ProfileAPI.getMyStatus(myStatus)
const loginA = (email,password,rememberMe,captcha) => authAPI.login(email,password,rememberMe,captcha)
const loginDelA = () => authAPI.loginDelete()
const savePhoto = (NewPhoto) => ProfileAPI.updateMyPhoto(NewPhoto)
const saveMyContactsA = (contacts) => ProfileAPI.saveMyContacts(contacts)

export {getFollow,getUnFollow,getUsers,getData,getProfileAPI,
    getStatusA,updateStatusA,getMyProfileA,getMyStatusA,loginA,
    loginDelA,savePhoto,saveMyContactsA
};
