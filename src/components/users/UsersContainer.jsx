import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching,
    getUsersThunkCreator, toggleIsFollowingInProgress, followThunkCreator, unFollowThunkCreator
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader /> : null}

            <Users users={this.props.users}
                          totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          unFollow={this.props.unFollow}
                          follow={this.props.follow}
                          isFetching={this.props.isFetching}
                          followingInProgress={this.props.followingInProgress}
                          toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
                          onPageChange={this.onPageChange}
            />
        </div>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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
// export default connect(mapStateToProps, {
//     setCurrentPage, setFetching, toggleIsFollowingInProgress,
//     getUsers: getUsersThunkCreator, follow: followThunkCreator, unFollow: unFollowThunkCreator
// })(UsersContainer);

export default compose(
    connect(mapStateToProps, {
        setCurrentPage, setFetching, toggleIsFollowingInProgress,
        getUsers: getUsersThunkCreator, follow: followThunkCreator, unFollow: unFollowThunkCreator
    })
)(UsersContainer)