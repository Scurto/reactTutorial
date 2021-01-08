import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={css.content}>
            <img src={props.profile.photos.large}/>
            <div>About me: {props.profile.aboutMe}</div>
            <div>Full name: {props.profile.fullName}</div>
            <div>User id: {props.profile.userId}</div>
        </div>
    );
};

export default ProfileInfo;