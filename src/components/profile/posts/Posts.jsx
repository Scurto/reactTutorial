import React from 'react';
import css from './Posts.module.css';
import Post from "./post/Post";

const Posts = () => {
    return (
        <div className={css.content}>
            <Post message="post1"/>
            <Post message="post2"/>
        </div>
    );
};

export default Posts;
