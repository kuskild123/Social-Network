import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Loader from "../../common/Preloader/Loader";
import {compose} from "redux";
import {
    follow,
    Followed,
    GetUsers,
    OnClickFetch,
    OnPageChanged,
    setFetching,
    setFetchingFollow,
    setPage, setTerm,
    setTotalCount,
    setUser,
    unFollow,
    UnFollowed
} from "../../../redux/Users/UsersPageReducers/UserPageReducer";
import {
    GetcurrentValue,
    GetisFetching,
    GetisProcessFollow, GetIsTerm,
    GetpageSize,
    GettotalUsersCount,
    GetUserData
} from "../../../redux/Users/UsersPageSelectors/UsersPageSelector";

let MapStateToProps = (state) => {
    return{
        UserData: GetUserData(state),
        PageSize: GetpageSize(state),
        TotalCount: GettotalUsersCount(state),
        CurrentValue: GetcurrentValue(state),
        IsFetching:GetisFetching(state),
        IsProcessFollow:GetisProcessFollow(state),
        Term:GetIsTerm(state),
        isAuth: state.auth.isAuth,
        AuthId:state.auth.id
    }
};
class UsersAPIComponent extends React.Component {
        componentDidMount() {
            this.props.GetUsers(this.props.UserData,this.props.CurrentValue)
            if(this.props.UserData.length > 0) {
                this.props.setFetching(false)
            }
        }
    onPageChanged = (PageNumber) => {
        this.props.OnPageChanged(this.props.setPage,PageNumber,this.props.setFetching,this.props.PageSize,this.props.setUser,this.props.Term)
    }

    Follow = (id) => {
        this.props.Followed(id,this.props.follow,this.props.setFetchingFollow(id,false))
    }
    UnFollow = (id) => {
        this.props.UnFollowed(id,this.props.unFollow,this.props.setFetchingFollow(id,false))
    }
    ClickUnFollow = (id,unfollow) => {
        OnClickFetch(this.props.setFetchingFollow(id,true),id,unfollow)
    }
    ClickFollow = (id,follow) => {
            OnClickFetch(this.props.setFetchingFollow(id,true),id,follow)
    }

    render() {

        return <>
            {this.props.IsFetching ? <Loader/>:null}
            <Users ClickUnFollow={this.ClickUnFollow} ClickFollow={this.ClickFollow}  onPageChanged={this.onPageChanged} GetFollow={this.Follow} GetUnFollow={this.UnFollow} {...this.props}
            />
        </>
    }
}

export default compose(
                        connect(MapStateToProps,{follow,unFollow,setUser,GetUsers,
                            setPage,setTotalCount,setFetching,
                            setFetchingFollow,OnPageChanged,Followed,UnFollowed,OnClickFetch,setTerm
                        })
)(UsersAPIComponent)
