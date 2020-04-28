let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Message1", likesCount: 11},
            {id: 2, message: "Message2", likesCount: 12}
        ],
        newPostText: 'newPostText'
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

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

let rerenderEntireTree = () => {};

export const subscribe =  (observer) => {
    rerenderEntireTree = observer;
};


export default state;
