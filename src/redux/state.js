import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Message1", likesCount: 11},
            {id: 2, message: "Message2", likesCount: 12}
        ]
    },
    dialogsPage: {
        messagesData: [
            {id: 1, message: "Message1"},
            {id: 2, message: "Message2"},
            {id: 3, message: "Message3"},
            {id: 4, message: "Message4"},
            {id: 5, message: "Message5"}
        ],
        dialogsData: [
            {id: 1, name: "Name1"},
            {id: 2, name: "Name2"},
            {id: 3, name: "Name3"},
            {id: 4, name: "Name4"},
            {id: 5, name: "Name5"}
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};


export default state;
