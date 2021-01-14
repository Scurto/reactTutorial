import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0';
const apiKey = '382354d6-c04e-478a-b623-652838360af2';

export const getUsers = (currentPage, pageSize) => {
    return axios.get(baseUrl + `/users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true, headers: {'API-KEY' : apiKey}}
            ).then(response => response.data);
};
