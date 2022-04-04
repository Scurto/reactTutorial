import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onPhotoChange = (e) => {
        console.log('e', e);
        props.savePhoto(e.target.files[0]);
    }
    return (
        <div className={css.content}>
            <img src={props.profile.photos.large != null ? props.profile.photos.large : 'http://localhost:8830/api/1.0/profile/photo/13976'} className={css.mainPhoto}/>
            { props.isOwner && <input type={'file'} onChange={ onPhotoChange }/>}
            {/*<ProfileStatus status={ props.status } updateUserStatus={ props.updateUserStatus }/>*/}
            <ProfileStatusWithHook status={ props.status } updateUserStatus={ props.updateUserStatus }/>
            <div>About me: {props.profile.aboutMe}</div>
            <div>Full name: {props.profile.fullName}</div>
            <div>User id: {props.profile.userId}</div>
        </div>
    );
};

export default ProfileInfo;