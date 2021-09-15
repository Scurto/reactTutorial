import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0';
const baseUrlJava = 'http://localhost:8830/api/1.0';
const apiKey = 'e5d4214a-1264-4d29-9c10-5a062784892c';



const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY' : apiKey}
});

const evn = 'LOCAL';

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(baseUrl + `/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(userId) {

        return axios.delete(baseUrlJava + `/follow/${userId}`)
            .then(response => response.data);
    },

    unFollow(userId) {
        return axios.post(baseUrlJava + `/follow/${userId}`)
            .then(response => response.data);
    },

    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        if (evn === 'LOCAL') {
            return axios.get(baseUrlJava + `/profile/` + userId);
        } else {
            return instance.get(baseUrl + `/profile/` + userId);
        }
        // {"aboutMe":"я круто чувак 1001%","contacts":{"facebook":"facebook.com","website":null,"vk":"vk.com/dimych","twitter":"https://twitter.com/@sdf","instagram":"instagra.com/sds","youtube":null,"github":"github.com","mainLink":null},"lookingForAJob":true,"lookingForAJobDescription":"не ищу, а дурачусь","fullName":"samurai dimych","userId":2,"photos":{"small":"https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0","large":"https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"}}

    },
    getStatus(userId) {
        if (evn === 'LOCAL') {
            return axios.get(baseUrlJava + `/profile/status/` + userId);
        } else {
            return instance.get(baseUrl + `/profile/status/` + userId);
        }
        // "asdasd"
    },
    updateStatus(status) {
        if (evn === 'LOCAL') {
            // return axios.put(baseUrlJava + `/profile/status`, {status: status});
            return axios.put(baseUrlJava + `/profile/status`, {status: status});
        } else {
            return instance.put(baseUrl + `/profile/status`, {status: status});
        }

        // {"data":{},"messages":[],"fieldsErrors":[],"resultCode":0}
    }
}

export const authAPI = {
    authMe() {
        if (evn === 'LOCAL') {
            return axios.get(baseUrlJava + `/auth/me`);
        } else {
            return instance.get(baseUrl + `/auth/me`);
        }
        // {"data":{"id":13976,"login":"test12345678","email":"yokef52217@sofiarae.com"},"messages":[],"fieldsErrors":[],"resultCode":0}
    },
    login(email, password, rememberMe = false) {
        if (evn === 'LOCAL') {
            return axios.post(baseUrlJava + `/auth/login`, {email, password, rememberMe});
        } else {
            return instance.post(baseUrl + `/auth/login`, {email, password, rememberMe});
        }
    },
    logout() {
        // if (evn === 'LOCAL') {
        //     return axios.delete(baseUrlJava + `/auth/login`);
        // } else {
            return instance.delete(baseUrl + `/auth/login`);
        // }
    }
}
