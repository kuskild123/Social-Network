import React from 'react';
import AddPost from "./AddPost";
import {compose} from "redux";
import {connect} from "react-redux";
import {DisLikePost, LikePost, SetPostUser} from "../../../redux/Profile/ProfilePageReducers/PostPageReducer";
import PostWithForm from "../PostForm/PostForm";


class AddPostContainer extends React.Component {
    render() {
        return (
            <div>
                <h2>Local Posts</h2>
                <PostWithForm SetPostUser={this.props.SetPostUser}/>
                <AddPost {...this.props}/>
            </div>
        )
    }
}
let MapStateToProps = (state) => {
    return{
        Post : state.PostPage.Posts
    }
}
export default compose(connect(MapStateToProps,{LikePost,DisLikePost,SetPostUser}),
    )(AddPostContainer)