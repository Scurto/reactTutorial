import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator, usersActionCreator} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followActionCreator(id))
        },
        unfollow: (id) => {
            dispatch(unfollowActionCreator(id))
        },
        setUsers: (users) => {
            dispatch(usersActionCreator(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;