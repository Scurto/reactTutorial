import {profileAPI, usersAPI} from "../api/api";
import {followSuccess, toggleIsFollowingInProgress} from "./usersReducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

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
                message: action.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
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
        case SAVE_PHOTO_SUCCESS: {
            let stateCopy = Object.assign({}, state);
            let profileCopy = Object.assign({}, state.profile);
            profileCopy.photos = action.photos;
            stateCopy.profile = profileCopy;
            // return {...state, profile: {...state.profile, photos: action.photos}};

            return stateCopy;
        }
        default: return state;
    }
}

export let addPostCreator = (text) => {
    return {
        type: ADD_POST,
        newPostText: text
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

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos: photos
    }
}

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(response.data.status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export default profileReducer;