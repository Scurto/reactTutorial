import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0';
const baseUrlJava = 'http://localhost:8830/api/1.0';
const apiKey = '382354d6-c04e-478a-b623-652838360af2';



const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY' : apiKey}
});

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
        return axios.get(baseUrl + `/profile/` + userId);

        // {"aboutMe":"я круто чувак 1001%","contacts":{"facebook":"facebook.com","website":null,"vk":"vk.com/dimych","twitter":"https://twitter.com/@sdf","instagram":"instagra.com/sds","youtube":null,"github":"github.com","mainLink":null},"lookingForAJob":true,"lookingForAJobDescription":"не ищу, а дурачусь","fullName":"samurai dimych","userId":2,"photos":{"small":"https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0","large":"https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"}}

    }
}

export const authAPI = {
    authMe() {
        return axios.get(baseUrl + `/auth/me`);
    }
}
