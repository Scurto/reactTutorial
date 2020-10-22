import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./dialogItems/DialogItem";
import Message from "./message/Message";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {

    let dialogItems = props.dialogs.map(value => {
       return <DialogItem id={value.id} name={value.name}/>;
    });

    let messageItems = props.messages.map(value => {
        return (
            <Message message={value.message}/>
        )
    });

    let onChangeNewMessage = (e) => {
        let newMessage = e.target.value;
        props.dispatch(updateNewMessageTextCreator(newMessage));
    }

    let onSendNewMessage = () => {
        props.dispatch(addMessageCreator());
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
                        value={props.newMessageText}
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
