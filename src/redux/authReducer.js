import {authAPI, usersAPI} from "../api/api";
import {setUserProfile} from "./profileReducer";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export let setAuthUserData = (userId, email, login) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {
            userId: userId,
            email: email,
            login: login,
        }
    }
}

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.authMe().then(resp => {
            if(resp.data.resultCode === 0) {
                let {id, login, email} = resp.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
    }
}

export default authReducer;