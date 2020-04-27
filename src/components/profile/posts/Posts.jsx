import React from 'react';
import css from './Posts.module.css';
import Post from "./post/Post";

const Posts = (props) => {

    let postsItem = props.posts.map(value => {
        return (
            <Post message={value.message} likesCount={value.likesCount}/>
        );
    });

    let newPostRef = React.createRef();

    let addPostClick = () => {
        props.addPost(newPostRef.current.value);
        newPostRef.current.value = '';
    };

    return (
        <div className={css.content}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostRef}></textarea>
                </div>
                <div>
                    <button onClick={addPostClick}>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsItem}
            </div>

        </div>
    );
};

export default Posts;
