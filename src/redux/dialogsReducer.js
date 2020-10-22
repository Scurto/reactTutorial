const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {id: 6, message: state.newMessageText};
            state.newMessageText = '';
            state.messagesData.push(newMessage);
            return state;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText;
            return state;
        }

        default: return state;
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

export default dialogsReducer;