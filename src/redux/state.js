let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
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

export default store;
window.store = store;
