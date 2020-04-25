import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./dialogItems/DialogItem";
import Message from "./message/Message";


const Dialogs = (props) => {

    let dialogItems = props.dialogs.map(value => {
       return <DialogItem id={value.id} name={value.name}/>;
    });

    let messageItems = props.messages.map(value => {
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
