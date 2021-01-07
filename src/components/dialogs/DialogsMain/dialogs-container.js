import React from 'react';
import {Dialog} from "./dialogs";
import {compose} from "redux";
import {connect} from "react-redux";
import {AddDialogMessageCreate} from "../../../redux/Dialogs/DialogPageReducer";
import withAuthRedirect from "../../HOC/WithAuthRedirect";

class DialogContainer extends React.Component {
    render() {
        return (
            <div>
                <Dialog {...this.props}/>
            </div>
        )
    }
}

let MapStateToProps = (state) => {
    return{
        DialogData:state.DialogPage.DialogData,
        MessageData1:state.DialogPage.MessageData1,
        MessageData2:state.DialogPage.MessageData2
    }
};
let MapDispatchToProps = (dispatch) => {
    return {
        AddDialog:(NewMessageBody) => {
            dispatch(AddDialogMessageCreate(NewMessageBody))
        }
    }
}
export default compose(
    connect(MapStateToProps,MapDispatchToProps),
    withAuthRedirect
)(DialogContainer)
