// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import SinglePost from './pages/SinglePost';
import './App.css';
import Contact from './pages/Contact';
import HeroSection from './components/HeroSection';

const App = () => {
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      title: 'Exploring the Outdoors: A Journey Through Nature', 
      excerpt: 'Join me as I recount my adventures in the wilderness.', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod felis tellus, vel vestibulum ligula ultrices ac. Morbi convallis augue vitae libero lobortis suscipit. Proin fermentum ultricies est, id interdum felis blandit non. Fusce efficitur nibh eu odio vestibulum, in fermentum dui vestibulum. In vitae felis vel nulla egestas blandit. Integer scelerisque, velit vitae dignissim elementum, libero tortor eleifend justo, sed faucibus purus velit id risus. Nulla facilisi. Phasellus nec nulla leo. Nulla facilisi. Aenean et dolor ac lorem euismod pharetra.',
      category: 'Personal Stories' 
    },
    { 
      id: 2, 
      title: 'The Ultimate Guide to DIY Home Renovation', 
      excerpt: 'Learn how to transform your living space with these practical tips.', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod felis tellus, vel vestibulum ligula ultrices ac. Morbi convallis augue vitae libero lobortis suscipit. Proin fermentum ultricies est, id interdum felis blandit non. Fusce efficitur nibh eu odio vestibulum, in fermentum dui vestibulum. In vitae felis vel nulla egestas blandit. Integer scelerisque, velit vitae dignissim elementum, libero tortor eleifend justo, sed faucibus purus velit id risus. Nulla facilisi. Phasellus nec nulla leo. Nulla facilisi. Aenean et dolor ac lorem euismod pharetra.',
      category: 'How-To Guides' 
    },
    { 
      id: 3, 
      title: 'Review: The Latest Tech Gadgets of 2024', 
      excerpt: 'Explore the pros and cons of the hottest gadgets on the market.', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod felis tellus, vel vestibulum ligula ultrices ac. Morbi convallis augue vitae libero lobortis suscipit. Proin fermentum ultricies est, id interdum felis blandit non. Fusce efficitur nibh eu odio vestibulum, in fermentum dui vestibulum. In vitae felis vel nulla egestas blandit. Integer scelerisque, velit vitae dignissim elementum, libero tortor eleifend justo, sed faucibus purus velit id risus. Nulla facilisi. Phasellus nec nulla leo. Nulla facilisi. Aenean et dolor ac lorem euismod pharetra.',
      category: 'Product Reviews' 
    },
    { 
      id: 4, 
      title: 'In My Opinion: The Future of Artificial Intelligence', 
      excerpt: 'Read my thoughts on where AI is headed and its implications for society.', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod felis tellus, vel vestibulum ligula ultrices ac. Morbi convallis augue vitae libero lobortis suscipit. Proin fermentum ultricies est, id interdum felis blandit non. Fusce efficitur nibh eu odio vestibulum, in fermentum dui vestibulum. In vitae felis vel nulla egestas blandit. Integer scelerisque, velit vitae dignissim elementum, libero tortor eleifend justo, sed faucibus purus velit id risus. Nulla facilisi. Phasellus nec nulla leo. Nulla facilisi. Aenean et dolor ac lorem euismod pharetra.',
      category: 'Opinion Pieces' 
    },
    { 
      id: 5, 
      title: 'A Personal Journey: Overcoming Challenges in Life', 
      excerpt: 'Discover how perseverance and determination shaped my life story.', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod felis tellus, vel vestibulum ligula ultrices ac. Morbi convallis augue vitae libero lobortis suscipit. Proin fermentum ultricies est, id interdum felis blandit non. Fusce efficitur nibh eu odio vestibulum, in fermentum dui vestibulum. In vitae felis vel nulla egestas blandit. Integer scelerisque, velit vitae dignissim elementum, libero tortor eleifend justo, sed faucibus purus velit id risus. Nulla facilisi. Phasellus nec nulla leo. Nulla facilisi. Aenean et dolor ac lorem euismod pharetra.',
      category: 'Personal Stories' 
    },
    // Add more posts as needed
  ]);

  const changePost = (post) => {
    setPosts(post);
  }

  const [title, setTitle] = useState("Latest Post");
  const ChangeHomeContent = (title) => {
    setTitle(title);
  }
  // const ChangeHomeContent = (title,post) => {
  //   setTitle(title);
  //   changePost(post);
  // }

  return (
    <Router>
      <Header />
      <div className="main-content">
        
        <Routes>
          <Route path="/" element={<>
          <HeroSection/>
          <Home posts={posts} title={title} ChangeHomeContent = {ChangeHomeContent} changePost={changePost} />
          </>} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Category posts={posts} />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/posts" element={<SinglePost post={posts.find(post => post.id === parseInt(window.location.pathname.split("/").pop()))} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
