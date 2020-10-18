import React from 'react';
import css from './Posts.module.css';
import Post from "./post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const Posts = (props) => {

    let postsItem = props.posts.map(value => {
        return (
            <Post message={value.message} likesCount={value.likesCount}/>
        );
    });

    let newPostRef = React.createRef();

    let addPostClick = () => {
        // let text = newPostRef.current.value;
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostRef.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
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
