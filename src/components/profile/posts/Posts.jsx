import React from 'react';
import css from './Posts.module.css';
import Post from "./post/Post";

const Posts = (props) => {

    let state = props.profilePage;

    let postsItem = state.posts.map(value => {
        return (
            <Post message={value.message} likesCount={value.likesCount}/>
        );
    });

    let newPostRef = React.createRef();

    let addPostClick = () => {
        // let text = newPostRef.current.value;
        // props.dispatch(addPostCreator());
        props.addPost()
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        // props.dispatch(updateNewPostTextCreator(text));
        props.updateNewPostText(text)
    };

    return (
        <div className={css.content}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostRef} value={state.newPostText} onChange={onPostChange}></textarea>
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
