const ADD_MESSAGE = 'ADD-MESSAGE';

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
            let newMessage = {id: 6, message: action.newMessageText};
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            // stateCopy.newMessageText = '';
            return stateCopy;
        }

        default: return state;
    }
}

export let addMessageCreator = (message) => {
    return {
        type: ADD_MESSAGE,
        newMessageText: message
    }
}

export default dialogsReducer;