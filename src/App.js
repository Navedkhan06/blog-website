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

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post One', excerpt: 'This is the first post', content: 'Full content of the first post', category: 'Personal Stories' },
    { id: 2, title: 'Post Two', excerpt: 'This is the second post', content: 'Full content of the second post', category: 'How-To Guides' },
    { id: 2, title: 'Post Two', excerpt: 'This is the second post', content: 'Full content of the second post', category: 'How-To Guides' },
    { id: 2, title: 'Post Two', excerpt: 'This is the second post', content: 'Full content of the second post', category: 'How-To Guides' },
    { id: 2, title: 'Post Two', excerpt: 'This is the second post', content: 'Full content of the second post', category: 'How-To Guides' },
    { id: 2, title: 'Post Two', excerpt: 'This is the second post', content: 'Full content of the second post', category: 'How-To Guides' },
    { id: 2, title: 'Post Two', excerpt: 'This is the second post', content: 'Full content of the second post', category: 'How-To Guides' },
    { id: 2, title: 'Post Two', excerpt: 'This is the second post', content: 'Full content of the second post', category: 'How-To Guides' },
    // Add more posts as needed
  ]);

  const changePost = (post) => {
    setPosts(post);
  }

  const [title, setTitle] = useState("Latest Post");
  const ChangeTitle = (title) => {
    setTitle(title);
  }

  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<>
          
          <Home posts={posts} title={title} ChangeTitle = {ChangeTitle} changePost={changePost} />
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
