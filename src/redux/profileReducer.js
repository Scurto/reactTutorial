import {profileAPI, usersAPI} from "../api/api";
import {followSuccess, toggleIsFollowingInProgress} from "./usersReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initState = {
    posts: [
        {id: 1, message: "Message1", likesCount: 11},
        {id: 2, message: "Message2", likesCount: 12}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            let stateCopy = {...state};
            stateCopy.profile = action.profile;
            return stateCopy;
        }
        case SET_STATUS: {
            let stateCopy = {...state};
            stateCopy.status = action.status;
            return stateCopy;
        }



        default: return state;
    }
}

export let addPostCreator = () => {
    return {
        type: ADD_POST
    }
}

export let updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(resp => {
            dispatch(setUserProfile(resp.data));
        })
    }
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(resp => {
        dispatch(setStatus(resp.data));
    })
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(resp => {
        if (resp.resultCode === 0) {
            dispatch(setStatus(resp.data));
        }
    })
}

export default profileReducer;