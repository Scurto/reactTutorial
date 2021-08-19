import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./dialogItems/DialogItem";
import Message from "./message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    if (!props.isAuth) return <Redirect to={'/login'}/>

    let state = props.dialogsPage;

    let dialogItems = state.dialogsData.map(value => {
       return <DialogItem id={value.id} name={value.name}/>;
    });

    let messageItems = state.messagesData.map(value => {
        return (
            <Message message={value.message}/>
        )
    });

    let onChangeNewMessage = (e) => {
        let newMessage = e.target.value;
        // props.dispatch(updateNewMessageTextCreator(newMessage));
        props.updateNewMessageText(newMessage);
    }

    let onSendNewMessage = () => {
        // props.dispatch(addMessageCreator());
        props.sendMessage();
    }

    return (
        <div className={css.dialogs}>
            <div>
                {dialogItems}
            </div>
            <div className={css.messages}>
                <div>{messageItems}</div>
                <div>
                    <textarea
                        placeholder="Input new text here"
                        value={state.newMessageText}
                        onChange={onChangeNewMessage}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onSendNewMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
