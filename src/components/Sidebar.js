// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  
  return (
    <aside className="sidebar">
      <div className="widget">
        <h3>Categories</h3>
        <ul>
          <li><Link to="/PersonalStories" onClick={ () => props.ChangeTitle("Personal Stories")}>Personal Stories</Link></li>
          <li><Link to="/" onClick={ () => props.ChangeTitle("How-To Guides")}>How-To Guides</Link></li>
          <li><Link to="/" onClick={ () => props.ChangeTitle("Product Reviews")}>Product Reviews</Link></li>
          <li><Link to="/" onClick={ () => props.ChangeTitle("Opinion Piece")}>Opinion Piece</Link></li>
          <li><Link to="/" onClick={ () => props.ChangeTitle("Guest Posts")}>Guest Posts</Link></li>
        </ul>
      </div>
      <div className="widget">
        <h3>Newsletter Signup</h3>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
