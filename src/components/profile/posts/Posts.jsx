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
        // let text = newPostRef.current.value;
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostRef.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={css.content}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostRef} value={props.newPostText} onChange={onPostChange}></textarea>
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
