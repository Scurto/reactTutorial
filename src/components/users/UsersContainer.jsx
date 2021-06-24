import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching,
    getUsersThunkCreator, toggleIsFollowingInProgress
} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {getUsers, usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(resp => {
            this.props.setFetching(false);
            this.props.setUsers(resp.items);
            this.props.setTotalUsersCount(resp.totalCount)
        })

        // this.props.getUsersThunkCreator();
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setFetching(true);
        getUsers(pageNumber, this.props.pageSize).then(resp => {
            this.props.setFetching(false);
            this.props.setUsers(resp.items);
        })
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader /> : null}

            <Users users={this.props.users}
                          totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          unfollow={this.props.unfollow}
                          follow={this.props.follow}
                          isFetching={this.props.isFetching}
                          followingInProgress={this.props.followingInProgress}
                          toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
                          onPageChange={this.onPageChange}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (id) => {
//             dispatch(followActionCreator(id))
//         },
//         unfollow: (id) => {
//             dispatch(unfollowActionCreator(id))
//         },
//         setUsers: (users) => {
//             dispatch(usersActionCreator(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setPageActionCreator(page))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountActionCreator(totalCount))
//         },
//         setFetching: (fetch) => {
//             dispatch(setFetchingActionCreator(fetch))
//         },
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setFetching, toggleIsFollowingInProgress, getUsersThunkCreator
})(UsersContainer);