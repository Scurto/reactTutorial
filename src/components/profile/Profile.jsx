import React from 'react';
import css from './Profile.module.css';
import Posts from "./posts/Posts";

const Profile = (props) => {

    return (
        <div className={css.content}>
            Profile content:
            <Posts posts={props.posts}
                   likes={props.likesCount}
                   newPostText={props.newPostText}
                   dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;
