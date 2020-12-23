import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator, usersActionCreator, setPageActionCreator, setTotalUsersCountActionCreator} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (page) => {
            dispatch(setPageActionCreator(page))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount))
        },
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;