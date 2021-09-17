import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_FETCHING = 'SET_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            let newState = {...state};
            // newState.users = [...state.users, ...action.users]
            newState.users = [...action.users];
            return newState;
            break;
        }
        case SET_CURRENT_PAGE: {
            let newState = {...state};
            newState.currentPage = action.currentPage
            return newState;
            break;
        }
        case SET_TOTAL_USERS_COUNT: {
            let newState = {...state};
            newState.totalUsersCount = action.totalCount
            return newState;
            break;
        }
        case SET_FETCHING: {
            let newState = {...state};
            newState.isFetching = action.isFetching
            return newState;
            break;
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                                                       : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    }
}

export let followSuccess = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
}

export let unFollowSuccess = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
}

export let setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export let setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: page
    }
}
export let setTotalUsersCount = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    }
}

export let setFetching = (isFetching) => {
    return {
        type: SET_FETCHING,
        isFetching: isFetching
    }
}

export let toggleIsFollowingInProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching: isFetching,
        userId: userId
    }
}

export const getUsersThunkCreator = (page, pageSize) => {
  return (dispatch) => {
      dispatch(setFetching(true));
      dispatch(setCurrentPage(page));

      usersAPI.getUsers(page, pageSize).then(resp => {
          dispatch(setFetching(false));
          dispatch(setUsers(resp.items));
          dispatch(setTotalUsersCount(resp.totalCount));
      })
  }
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId));
        usersAPI.follow(userId).then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleIsFollowingInProgress(false, userId));
        })
    }
}

export const unFollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId));
        usersAPI.unFollow(userId).then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(unFollowSuccess(userId));
            }
            dispatch(toggleIsFollowingInProgress(false, userId));
        })
    }
}

export default usersReducer;