import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator, usersActionCreator, setPageActionCreator, setTotalUsersCountActionCreator} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(resp => {
            this.props.setUsers(resp.data.items);
            this.props.setTotalUsersCount(resp.data.totalCount)
        })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(resp => {
            this.props.setUsers(resp.data.items);
        })
    }

    render() {
        return <Users users={this.props.users}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      onPageChange={this.onPageChange}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);