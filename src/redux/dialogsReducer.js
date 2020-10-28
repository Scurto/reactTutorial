const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initState = {
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

const dialogsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {id: 6, message: state.newMessageText};
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
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