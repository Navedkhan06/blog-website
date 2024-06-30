// src/pages/Category.js
import React from 'react';
import PostList from '../components/PostList';
import './Category.css';

const Category = ({ category, posts }) => {
  const filteredPosts = posts.filter(post => post.category === category);

  return (
    <div className="category">
      <h1>{category}</h1>
      <PostList posts={filteredPosts} />
    </div>
  );
};

export default Category;
