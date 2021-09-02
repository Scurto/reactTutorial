import React from 'react';
import css from './Profile.module.css';
import Posts from "./posts/Posts";
import ProfileInfo from "./posts/profileInfo/ProfileInfo";
import PostsContainer from "./posts/PostsContainer";

const Profile = (props) => {

    return (
        <div className={css.content}>
            <ProfileInfo profile={props.profile} status={ props.status } updateUserStatus={ props.updateUserStatus }/>
            <PostsContainer />
        </div>
    );
};

export default Profile;
