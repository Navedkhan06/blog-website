// src/pages/Category.js
import React from 'react';
import PostList from '../components/PostList';
import './Category.css';

const Category = ({ category, posts }) => {
  // const filteredPosts = posts.filter(post => post.category === category);

  // return (
  //   <div className="category">
  //     <h1>{category}</h1>
  //     <PostList posts={filteredPosts} />
  //   </div>
  // );

  // const categories = [
  //   { name: 'Personal Stories', description: 'Experiences and reflections' },
  //   { name: 'How-To Guides', description: 'Step-by-step guides and tutorials' },
  //   { name: 'Product Reviews', description: 'Reviews of various products' },
  //   { name: 'Opinion Pieces', description: 'Opinions on various topics' },
  //   { name: 'Guest Posts', description: 'Articles from guest writers' },
  // ];

  const categories = [
    { name: 'Personal Stories', description: 'Experiences and reflections' },
    { name: 'How-To Guides', description: 'Step-by-step guides and tutorials' },
    { name: 'Product Reviews', description: 'Reviews of various products' },
    { name: 'Opinion Pieces', description: 'Opinions on various topics' },
    { name: 'Guest Posts', description: 'Articles from guest writers' },
    { name: 'Gaming', description: 'Latest news, reviews, and guides on gaming' },
    { name: 'Sports', description: 'Updates and opinions on various sports' },
    { name: 'Technology', description: 'News and reviews on the latest technology' },
    { name: 'Health & Fitness', description: 'Tips and guides for a healthy lifestyle' },
    { name: 'Travel', description: 'Travel guides and personal travel stories' },
    { name: 'Food & Recipes', description: 'Delicious recipes and food reviews' },
    { name: 'Fashion', description: 'Latest trends and fashion advice' },
    { name: 'Entertainment', description: 'News and reviews on movies, TV shows, and more' },
    { name: 'Finance', description: 'Advice and news on personal finance and investing' },
    { name: 'DIY & Crafts', description: 'Creative DIY projects and craft ideas' },
    { name: 'Home & Garden', description: 'Tips for home improvement and gardening' },
    { name: 'Education', description: 'Resources and advice for learning and education' },
    { name: 'Parenting', description: 'Advice and stories about parenting' },
    { name: 'Lifestyle', description: 'General lifestyle tips and advice' },
    { name: 'Science', description: 'News and discoveries in science' },
    { name: 'Environment', description: 'Information on environmental issues and sustainability' },
    { name: 'Business', description: 'Insights and news on business and entrepreneurship' },
    { name: 'Automotive', description: 'Reviews and news on cars and automotive industry' },
    { name: 'Pets', description: 'Tips and stories about pet care and training' },
    { name: 'Relationships', description: 'Advice and stories about relationships and dating' }
  ];
  

  return (
    <div className="categories-page">
      <h1>Categories</h1>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

};

export default Category;
