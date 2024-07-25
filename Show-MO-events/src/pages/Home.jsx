// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <div>
        <h2>About the Application</h2>
        <p>ShowMOEvents is an application designed to help people connect with local events and community posts in Missouri.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
