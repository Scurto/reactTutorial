import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./dialogItems/DialogItem";
import Message from "./message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


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

    const onSendNewMessageSubmit = (formData) => {
        props.sendMessage(formData.newMessageBody);
    }

    return (
        <div className={css.dialogs}>
            <div>
                {dialogItems}
            </div>
            <div className={css.messages}>
                <div>{messageItems}</div>
                <AddReduxMessageForm onSubmit={ onSendNewMessageSubmit }/>
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder="Input new text here"/>
            </div>
            <div>
                <button type={"submit"}>Send</button>
            </div>
        </form>
    );
}

const AddReduxMessageForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
