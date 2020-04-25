import React from 'react';
import css from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let url = '/dialogs/' + props.id;
    return (
        <div className={css.dialogsItem}>
            <NavLink to={url}>{props.name}</NavLink>
        </div>
    );
};


export default DialogItem;
