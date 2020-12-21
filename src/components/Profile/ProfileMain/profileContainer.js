import React from 'react';
import {Profile} from "./profile";
import {connect} from "react-redux";
import {GetProfile, SetProfile,GetStatus,UpdateStatus,GetMyProfile,GetMyStatus} from "../../../redux/Profile/ProfilePageReducers/ProfilePageReducer"
import {compose} from "redux";
import {SetPostUser} from "../../../redux/Profile/ProfilePageReducers/PostPageReducer";
import {withRouter} from "react-router-dom";

class ProfileContainerAPI extends React.Component {
    constructor(props) {
        super(props);
        this.userPhoto = 'https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg'
        this.ProfileImage = (props) => {
            if(props.photos.small){
                return props.photos.small
            }
            if(props.photos.large) {
                return props.photos.large;
            }
            else{
                return this.userPhoto
            }

        }
    }
    componentDidMount(){

           let userId = this.props.match.params.userId

            if(!userId){
                userId = 2
            }

        let MyId = () => {
            if(this.props.IsAuth){
               return this.props.MyProfileId;
            }
            // if(!this.props.IsAuth) {
            //     this.props.history.push('/login')
            // }
        }


           this.props.GetProfile( userId )
           this.props.GetMyStatus(MyId())
           this.props.GetMyProfile(MyId())
           this.props.GetStatus(userId)

       }

    render(){
        return <>
            <Profile  ProfileImage={this.ProfileImage} {...this.props}></Profile>
        </>
    }
}
let MapStateToProps = (state) => {
    return{
            MyProfile:state.ProfilePage.MyUser,
            ProfileUsers:state.ProfilePage.ProfileUsers,
            Status:state.ProfilePage.Status,
            MyStatus:state.ProfilePage.MyStatus,
            MyProfileId:state.auth.id,
            IsAuth:state.auth.isAuth
    }
}


export default compose(connect(MapStateToProps,{SetProfile,GetProfile,GetStatus,UpdateStatus,GetMyProfile,GetMyStatus,SetPostUser}),
                        withRouter
    )(ProfileContainerAPI)

