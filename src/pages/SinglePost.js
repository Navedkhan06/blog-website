// src/pages/SinglePost.js
import React from 'react';
import './SinglePost.css';

const SinglePost = ({ post }) => {
  return (
    <div className="single-post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default SinglePost;
