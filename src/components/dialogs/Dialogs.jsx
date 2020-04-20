import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let url = '/dialogs/' + props.id;
    return (
        <div className={css.dialogsItem}>
            <NavLink to={url}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={css.dialog}>{props.message}</div>
    );
};


const Dialogs = () => {

    let dialogItems = [
        <DialogItem id="1" name="Andrey"/>,
        <DialogItem id="2" name="Andrey2"/>,
        <DialogItem id="3" name="Andrey3"/>
    ];

    return (
        <div className={css.dialogs}>
            <div>
                {dialogItems}
            </div>
            <div className={css.messages}>
                <Message message="Hi"/>
                <Message message="How are you ?"/>
            </div>
        </div>
    );
};

export default Dialogs;
