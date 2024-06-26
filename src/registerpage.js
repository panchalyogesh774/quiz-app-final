// RegisterForm.js

import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      console.log(response.data); // Log the response from the backend
      window.location.replace('/play/home');
      // You can perform additional actions based on the response, e.g., show a success message
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="username" 
        placeholder="Username" 
        value={formData.username} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleChange} 
        required 
      />
      {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={formData.password} 
        onChange={handleChange} 
        required 
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
