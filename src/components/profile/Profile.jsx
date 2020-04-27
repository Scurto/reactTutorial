import React from 'react';
import css from './Profile.module.css';
import Posts from "./posts/Posts";

const Profile = (props) => {

    return (
        <div className={css.content}>
            Profile content:
            <Posts posts={props.posts} likes={props.likesCount} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;
