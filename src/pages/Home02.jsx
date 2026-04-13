import React from 'react';
import './Home02.css'; // Ensure to create and style this CSS file

const Home02 = () => {
  return (
    <div className="home02">
      <header className="home02-header">
        <h1>Welcome to Home 02</h1>
        <p>Your modern and sleek layout</p>
      </header>

      <section className="home02-intro">
        <div className="intro-content">
          <h2>About Our Services</h2>
          <p>
            We provide top-notch solutions tailored to your needs. Explore our
            features and offerings designed to elevate your experience.
          </p>
        </div>
        <div className="intro-image">
          <img src="/path-to-image.jpg" alt="Intro" />
        </div>
      </section>

      <section className="home02-features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Feature 1</h3>
            <p>Detail about feature 1.</p>
          </div>
          <div className="feature-item">
            <h3>Feature 2</h3>
            <p>Detail about feature 2.</p>
          </div>
          <div className="feature-item">
            <h3>Feature 3</h3>
            <p>Detail about feature 3.</p>
          </div>
        </div>
      </section>

      <footer className="home02-footer">
        <p>&copy; 2026 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home02;