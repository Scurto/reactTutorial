import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div className={css.content}>
            {props.message}, likes: {props.likesCount}
        </div>
    );
};

export default Post;
