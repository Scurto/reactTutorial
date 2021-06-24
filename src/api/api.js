import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0';
const apiKey = '382354d6-c04e-478a-b623-652838360af2';

const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY' : apiKey}
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(baseUrl + `/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

export const getUsers = (currentPage, pageSize) => {
    return instance.get(baseUrl + `/users?page=${currentPage}&count=${pageSize}`).
    then(response => response.data);
};
