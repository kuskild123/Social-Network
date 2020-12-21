import React from 'react';
import AddPost from "./AddPost";
import {compose} from "redux";
import {connect} from "react-redux";


class AddPostContainer extends React.Component {
    render() {
        return (
            <div>
                <AddPost {...this.props}></AddPost>
            </div>
        )
    }
}
let MapStateToProps = (state) => {
    return{
        Post : state.PostPage.Posts
    }
}
export default compose(connect(MapStateToProps),
    )(AddPostContainer)