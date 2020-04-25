import React from 'react';
import css from './Posts.module.css';
import Post from "./post/Post";

const Posts = () => {

    let posts = [
        {id: 1, message: "Message1", likesCount: 11},
        {id: 2, message: "Message2", likesCount: 12}
    ];

    let postsItem = posts.map(value => {
        return (
            <Post message={value.message}/>
        );
    });

    return (
        <div className={css.content}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsItem}
            </div>

        </div>
    );
};

export default Posts;
