// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the code to handle the form submission,
    // such as sending an email or saving the data to a database.
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='Contact-page'>
      <h1>Contact Us</h1>
      <form className='contact-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor='message'>Message:</label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          rows='5'
          required
        ></textarea>

        <button type='submit'>Send Message</button>
      </form>
    </div>
  );
}
