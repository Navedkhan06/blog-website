// src/components/Post.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link to={`/posts/${post.id}`}>Read more</Link>
    </div>
  );
};

export default Post;
