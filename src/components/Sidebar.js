// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

  const personalStoriesPosts = [
    { 
      id: 1, 
      title: 'My Journey to Self-Discovery', 
      excerpt: 'Reflecting on the moments that shaped who I am today.', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod felis tellus, vel vestibulum ligula ultrices ac. Morbi convallis augue vitae libero lobortis suscipit. Proin fermentum ultricies est, id interdum felis blandit non. Fusce efficitur nibh eu odio vestibulum, in fermentum dui vestibulum. In vitae felis vel nulla egestas blandit. Integer scelerisque, velit vitae dignissim elementum, libero tortor eleifend justo, sed faucibus purus velit id risus. Nulla facilisi. Phasellus nec nulla leo. Nulla facilisi. Aenean et dolor ac lorem euismod pharetra.',
      category: 'Personal Stories' 
    },
    { 
      id: 2, 
      title: 'Lessons Learned from Traveling Alone', 
      excerpt: 'Discovering new cultures and myself along the way.', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod felis tellus, vel vestibulum ligula ultrices ac. Morbi convallis augue vitae libero lobortis suscipit. Proin fermentum ultricies est, id interdum felis blandit non. Fusce efficitur nibh eu odio vestibulum, in fermentum dui vestibulum. In vitae felis vel nulla egestas blandit. Integer scelerisque, velit vitae dignissim elementum, libero tortor eleifend justo, sed faucibus purus velit id risus. Nulla facilisi. Phasellus nec nulla leo. Nulla facilisi. Aenean et dolor ac lorem euismod pharetra.',
      category: 'Personal Stories' 
    },
    { 
      id: 3, 
      title: 'Facing Adversity: How I Overcame My Greatest Challenge', 
      excerpt: 'Turning hardships into opportunities for growth.', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod felis tellus, vel vestibulum ligula ultrices ac. Morbi convallis augue vitae libero lobortis suscipit. Proin fermentum ultricies est, id interdum felis blandit non. Fusce efficitur nibh eu odio vestibulum, in fermentum dui vestibulum. In vitae felis vel nulla egestas blandit. Integer scelerisque, velit vitae dignissim elementum, libero tortor eleifend justo, sed faucibus purus velit id risus. Nulla facilisi. Phasellus nec nulla leo. Nulla facilisi. Aenean et dolor ac lorem euismod pharetra.',
      category: 'Personal Stories' 
    },
    { 
      id: 4, 
      title: 'Memories of Childhood: Growing Up in a Small Town', 
      excerpt: 'Nostalgic moments and life lessons from my hometown.', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod felis tellus, vel vestibulum ligula ultrices ac. Morbi convallis augue vitae libero lobortis suscipit. Proin fermentum ultricies est, id interdum felis blandit non. Fusce efficitur nibh eu odio vestibulum, in fermentum dui vestibulum. In vitae felis vel nulla egestas blandit. Integer scelerisque, velit vitae dignissim elementum, libero tortor eleifend justo, sed faucibus purus velit id risus. Nulla facilisi. Phasellus nec nulla leo. Nulla facilisi. Aenean et dolor ac lorem euismod pharetra.',
      category: 'Personal Stories' 
    },
    { 
      id: 5, 
      title: 'Finding Love Unexpectedly: My Romantic Journey', 
      excerpt: 'A story of serendipity and the power of true connection.', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod felis tellus, vel vestibulum ligula ultrices ac. Morbi convallis augue vitae libero lobortis suscipit. Proin fermentum ultricies est, id interdum felis blandit non. Fusce efficitur nibh eu odio vestibulum, in fermentum dui vestibulum. In vitae felis vel nulla egestas blandit. Integer scelerisque, velit vitae dignissim elementum, libero tortor eleifend justo, sed faucibus purus velit id risus. Nulla facilisi. Phasellus nec nulla leo. Nulla facilisi. Aenean et dolor ac lorem euismod pharetra.',
      category: 'Personal Stories' 
    },
    // Add more personal stories as needed
  ];
  
  
  return (
    <aside className="sidebar">
      <div className="widget">
        <h3>Categories</h3>
        <ul>
          <li><Link to="/PersonalStories" onClick={ () => props.ChangeHomeContent("Personal Stories")}>Personal Stories</Link></li>
          <li><Link to="/" onClick={ () => props.ChangeHomeContent("How-To Guides")}>How-To Guides</Link></li>
          <li><Link to="/" onClick={ () => props.ChangeHomeContent("Product Reviews")}>Product Reviews</Link></li>
          <li><Link to="/" onClick={ () => props.ChangeHomeContent("Opinion Piece")}>Opinion Piece</Link></li>
          <li><Link to="/" onClick={ () => props.ChangeHomeContent("Guest Posts")}>Guest Posts</Link></li>
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
