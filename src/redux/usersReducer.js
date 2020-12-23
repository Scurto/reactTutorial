const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 20,
    currentPage: 1
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
        default:
            return state;
    }
}

export let followActionCreator = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
}

export let unfollowActionCreator = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
}

export let usersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export let setPageActionCreator = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: page
    }
}
export let setTotalUsersCountActionCreator = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    }
}


export default usersReducer;