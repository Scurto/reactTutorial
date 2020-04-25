import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./dialogItems/DialogItem";
import Message from "./message/Message";


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Name1"},
        {id: 2, name: "Name2"},
        {id: 3, name: "Name3"},
        {id: 4, name: "Name4"},
        {id: 5, name: "Name5"}
    ];

    let messagesData = [
        {id: 1, message: "Message1"},
        {id: 2, message: "Message2"},
        {id: 3, message: "Message3"},
        {id: 4, message: "Message4"},
        {id: 5, message: "Message5"}
    ];

    let dialogItems = dialogsData.map(value => {
       return <DialogItem id={value.id} name={value.name}/>;
    });

    let messageItems = messagesData.map(value => {
        return (
            <Message message={value.message}/>
        )
    });

    return (
        <div className={css.dialogs}>
            <div>
                {dialogItems}
            </div>
            <div className={css.messages}>
                {messageItems}
            </div>
        </div>
    );
};

export default Dialogs;
