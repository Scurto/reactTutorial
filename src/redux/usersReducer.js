const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_FETCHING = 'SET_FETCHING';

let initState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false
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
        default:
            return state;
    }
}

export let follow = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
}

export let unfollow = (id) => {
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



export default usersReducer;