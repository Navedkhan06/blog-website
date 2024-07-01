// src/pages/Home.js
import React, { useState } from "react";
// import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
import "./Home.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LatestPosts from "../components/LatestPosts";
import PostList from "../components/PostList";


const Home = (props) => {

  return (
    // <Router>
    <div className="Home-Container">
      <h1 id="title" className="Title" style={{ marginLeft: "20px" }}>
        {props.title}
      </h1>
      <div className="home">
      <PostList posts={props.posts} />
        {/* <Routes>
          <Route path="/" element={<PostList posts={props.posts} />} />
          <Route path="/PersonalStories" element={<>Heyy</>} /> 
        </Routes> */}
        <Sidebar ChangeHomeContent={props.ChangeHomeContent} />
      </div>
    </div>
    // </Router>

  );
};

export default Home;
