import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageCreator} from "../../redux/dialogsReducer";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => {
            dispatch(addMessageCreator(message))
        }
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
