const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initState = {
    users: []
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let newState = {...state};
            newState.users.map(u => {
                if (u.id === action.id) {
                    u.followed = true;
                }
            })
            return newState;
            break;
        }
        case UNFOLLOW: {
            let newState = {...state};
            newState.users.map(u => {
                if (u.id === action.id) {
                    u.followed = false;
                }
            })
            return newState;
            break;
        }
        case SET_USERS: {
            let newState = {...state};
            debugger;
            newState.users = [...state.users, ...action.users]
            // newState.users.push(action.users);
            debugger;
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

export default usersReducer;