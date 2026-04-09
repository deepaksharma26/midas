import React from 'react';
import './Loading.css';

import gifImage from '../assets/img/logo.png';
const Loading = () => {
  return (
    <div className="loading-container">
      <img src={gifImage} alt="Loading..." className="loading-image" />
    </div>
  );
};

export default Loading;
