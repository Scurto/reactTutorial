const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Message1", likesCount: 11},
                {id: 2, message: "Message2", likesCount: 12}
            ],
            newPostText: ''
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
            ],
            newMessageText: ''
        }
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {id: 6, message: this._state.dialogsPage.newMessageText};
            this._state.dialogsPage.newMessageText = '';
            this._state.dialogsPage.messagesData.push(newMessage);

            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('State changed');
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

export let addMessageCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export let updateNewMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default store;
window.store = store;
