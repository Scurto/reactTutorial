import React from 'react';
import css from './Profile.module.css';
import Posts from "./posts/Posts";

const Profile = () => {
    return (
        <div className={css.content}>
            Profile content:
            <Posts />
        </div>
    );
};

export default Profile;
