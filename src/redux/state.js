import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);


    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('State changed');
    }
}

export default store;
window.store = store;
