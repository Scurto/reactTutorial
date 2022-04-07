import React, {useState} from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import {Field, reduxForm} from "redux-form";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onPhotoChange = (e) => {
        props.savePhoto(e.target.files[0]);
    }

    const onSaveClick = (formData) => {
        console.log(formData);
        setEditMode(false);
        // props.login(formData.login, formData.password, formData.rememberMe);
    }

    const onEditClick = (e) => {
        setEditMode(true);
    };

    return (
        <div className={css.content}>
            <img
                src={props.profile.photos.large != null ? props.profile.photos.large : 'http://localhost:8830/api/1.0/profile/photo/13976'}
                className={css.mainPhoto}/>
            {props.isOwner && <input type={'file'} onChange={onPhotoChange}/>}
            <ProfileStatusWithHook isOwner={props.isOwner} userId={props.profile.userId} status={props.status} updateUserStatus={props.updateUserStatus}/>

            <div>
                {
                    editMode ?
                        <ProfileReduxForm onSubmit={onSaveClick} initialValues={props.profile}></ProfileReduxForm> :
                        <ProfileReadForm
                            onEditClick={onEditClick}
                            profile={props.profile}
                            isOwner={props.isOwner}
                        />
                }
            </div>
        </div>
    );
};


const ProfileReadForm = (props) => {
    return (
        <div>
            {props.isOwner && <button onClick={ props.onEditClick }>Edit</button>}
            <div>About me: {props.profile.aboutMe}</div>
            <div>Full name: {props.profile.fullName}</div>
            <div>User id: {props.profile.userId}</div>
        </div>
    );
}

const ProfileContactForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <button type={"submit"}>Save</button>
            <div>
                About me:
                <Field name="aboutMe" component="input" type="text" placeholder="About me" />
            </div>
            <div>
                Full name:
                <Field name="fullName" component="input" type="text" placeholder="Full name" />
            </div>
            <div>
                User id:
                <Field name="userId" component="input" type="text" placeholder="User Id" />
            </div>

        </form>
    );
}

const ProfileReduxForm = reduxForm({form: 'profileContactForm'})(ProfileContactForm)

export default ProfileInfo;