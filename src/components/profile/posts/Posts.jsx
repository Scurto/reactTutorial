import React from 'react';
import css from './Posts.module.css';
import Post from "./post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formsControls/FormsControls";

const Posts = (props) => {

    let state = props.profilePage;

    let postsItem = state.posts.map(value => {
        return (
            <Post key={value.message} message={value.message} likesCount={value.likesCount}/>
        );
    });

    let onAddPost = (formData) => {
        props.addPost(formData.newPostBody)
    };

    return (
        <div className={css.content}>
            <h3>My Posts</h3>
            <AddReduxPostForm onSubmit={ onAddPost }/>
            <div className={css.posts}>
                {postsItem}
            </div>

        </div>
    );
};

let maxLength10 = maxLengthCreator(10);

let AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={Textarea} name={"newPostBody"} placeholder="Input new post text here" validate={[required, maxLength10]}/>
                    {/*<Field component={"textarea"} name={"newPostBody"} placeholder="Input new post text here"/>*/}
                </div>
                <div>
                    <button type={"submit"}>Add post</button>
                </div>
            </div>
        </form>
    );
}

const AddReduxPostForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm)

export default Posts;
