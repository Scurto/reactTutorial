import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator, usersActionCreator, setPageActionCreator, setTotalUsersCountActionCreator, setFetchingActionCreator} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import preloader from "../../assets/img/preloader.svg";
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(resp => {
            this.props.setFetching(false);
            this.props.setUsers(resp.data.items);
            this.props.setTotalUsersCount(resp.data.totalCount)
        })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(resp => {
            this.props.setFetching(false);
            this.props.setUsers(resp.data.items);
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
        isFetching: state.usersPage.isFetching
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
        setFetching: (fetch) => {
            dispatch(setFetchingActionCreator(fetch))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);